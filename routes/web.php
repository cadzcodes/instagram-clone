<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::get('/{any}', function () {
    return view('welcome'); // or your React blade entrypoint
})->where('any', '.*');

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::middleware('auth:api')->get('/profile', [AuthController::class, 'profile']);