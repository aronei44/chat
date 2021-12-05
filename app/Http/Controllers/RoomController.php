<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;
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
        $msg = "Room Ditemukan";
        if(!$room){
            $room = Room::where('user1_id',Auth::user()->id)
                        ->where('user2_id',$user->id)
                        ->first();
            $msg = "Room Ditemukan";
        }
        if(!$room){
            $room = Room::create([
                'user1_id'=>Auth::user()->id,
                'user2_id'=>$user->id
            ]);
            $msg = "Room Dibuat";
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
    public function send(Request $request,$id){
        try {
            $msg = Message::create([
                'room_id'=>$id,
                'from'=>Auth::user()->id,
                'body'=>$request->body
            ]);
            return response()->json([
                'message'=>'Created',
                'data'=>Message::where('room_id',$id)->get()
            ],201);
        } catch (\Throwable $th) {
            return response()->json([
                'message'=>'failed to create'
            ],400);
        }
    }
    public function messages($id){
        return response()->json([
            'message'=>'Room Ditemukan',
            'data'=>Room::with('messages')->find($id)
        ],200);
    }
}
