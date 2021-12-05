<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('auth')->group(function(){
    Route::get('/',             [RoomController::class,'index']);
    Route::get('/chat',         [RoomController::class,'push']);
    Route::get('/chat/{email}',        [RoomController::class,'room']);
    Route::post('/send/{room}',   [RoomController::class,'send']);
    Route::get('/messages/{id}',   [RoomController::class,'messages']);
});




Auth::routes();