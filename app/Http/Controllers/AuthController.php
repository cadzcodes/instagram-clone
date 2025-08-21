<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:mongodb.users',
            'username' => 'required|string|unique:mongodb.users',
            'fullname' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'email' => $request->email,
            'username' => $request->username,
            'fullname' => $request->fullname,
            'password' => Hash::make($request->password),
        ]);

        // login right after signup
        Auth::login($user);

        return response()->json([
            'message' => 'Signup successful!',
            'user' => $user
        ]);
    }

    public function login(Request $request)
    {
        $login = $request->input('email'); // can be email or username
        $password = $request->input('password');

        // check if it's an email
        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if (!$token = JWTAuth::attempt([$field => $login, 'password' => $password])) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'message' => 'Login successful!',
            'user' => auth()->user(),
            'token' => $token
        ]);
    }


}
