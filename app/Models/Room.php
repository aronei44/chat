<?php

namespace App\Models;

use App\Models\Room;
use App\Models\User;
use App\Models\Message;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user1(){
        return $this->belongsTo(User::class, 'user1_id');
    }
    
    public function user2(){
        return $this->belongsTo(User::class,'user2_id');
    }
    public function messages(){
        return $this->hasMany(Message::class);
    }
}
