<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/chat/{email}',function($email){
    // dd($email);
    // return $email;
    $user = User::where('email',$email)->first();
    return Inertia::render('Index',[
        "user"=>$user
    ]);
});
