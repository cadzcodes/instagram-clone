<?php

namespace App\Models;

use MongoDB\Laravel\Auth\User as Authenticatable; // ✅ This is the MongoDB-compatible Authenticatable
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    protected $connection = 'mongodb';
    protected $collection = 'users';

    protected $fillable = [
        'fullname',
        'username',
        'email',
        'password',
    ];

    protected $hidden = ['password'];

    // JWTSubject methods
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
