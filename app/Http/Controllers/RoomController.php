<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Events\MessageNotification;
use Illuminate\Support\Facades\Auth;

class RoomController extends Controller
{
    public function index(){
        return Inertia::render('Index',[
            'auth'=>Auth::user()
        ]);
    }
    public function room($email){
        $user = User::where('email',$email)->first();
        if(!$user){
            return redirect('/');
        }
        $room = Room::where('user1_id',Auth::user()->id)
                    ->where('user2_id',$user->id)
                    ->first();
        if(!$room){
            $room = Room::where('user1_id',$user->id)
                        ->where('user2_id',Auth::user()->id)
                        ->first();
        }
        if(!$room){
            $room = Room::create([
                'user1_id'=>Auth::user()->id,
                'user2_id'=>$user->id
            ]);
        }

        return Inertia::render('Index',[
            "user"=>$user,
            "room"=>$room,
            'auth'=>Auth::user()
        ]);
    }
    public function push(){
        return redirect('/');
    }
    public function send(Request $request,Room $room){
        try {
            $user = Auth::user()->id;
            if($room->user1_id == $user){
                $to = $room->user2_id;
            }else{
                $to = $room->user2_id;
            }
            $msg = Message::create([
                'room_id'=>$room->id,
                'from'=>$user,
                'to'=>$to,
                'body'=>$request->body
            ]);
            event(new MessageNotification($room));
            $messages = [];
            foreach(Message::where('room_id', $id)->get() as $message){
                $time = explode(' ',$message->created_at);
                $messages[]=[
                    'room_id'=>$message->room_id,
                    'from'=>$message->from,
                    'to'=>$message->to,
                    'body'=>$message->body,
                    'date'=>$time[0],
                    'clock'=>$time[1]
                ];
            }
            return response()->json([
                'message'=>'Created',
                'data'=>$messages
            ],201);
        } catch (\Throwable $th) {
            return response()->json([
                'message'=>'failed to create'
            ],400);
        }
    }
    public function messages($id){
        $room = Room::find($id);
        $messages = [];
        foreach(Message::where('room_id', $id)->get() as $message){
            $time = explode(' ',$message->created_at);
            $messages[]=[
                'room_id'=>$message->room_id,
                'from'=>$message->from,
                'to'=>$message->to,
                'body'=>$message->body,
                'date'=>$time[0],
                'clock'=>$time[1]
            ];
        }
        $room['messages']=$messages;
        return response()->json([
            'message'=>'Room Ditemukan',
            'data'=>$room
        ],200);
    }
    public function getUser(){
        $users = [];
        $rooms = [];
        foreach(Message::orderBy('id','desc')->get() as $message){
            if($message->from == Auth::user()->id || $message->to == Auth::user()->id){
                if (!in_array($message->room_id, $rooms)){
                    $rooms[]=$message->room_id;
                }
            }
        }
        foreach($rooms as $id){
            $room = Room::find($id);
            $message = Message::orderBy('id','desc')->where('room_id',$room->id)->first();
            $time = explode(' ',$message->created_at);
            $messages=[
                'room_id'=>$message->room_id,
                'from'=>$message->from,
                'to'=>$message->to,
                'body'=>$message->body,
                'date'=>$time[0],
                'clock'=>$time[1]
            ];
            if($room->user1_id == Auth::user()->id){
                $users[]=[
                    'user'=>User::find($room->user2_id),
                    'message'=>$messages
                ];
            }else{
                $users[]=[
                    'user'=>User::find($room->user1_id),
                    'message'=>$messages
                ];
            }
        }
        return response()->json([
            'message'=>'bind users generated',
            'data'=>$users
        ],200);
    }
}
