<?php

namespace App\Repository;

use App\Repository\BaseRepository;
use Auth;

class UserRepository extends BaseRepository
{

    protected function model()
    {
        return "\\App\\Model\\User";
    }

    public function login($email, $password) : boolean
    {
        if (Auth::attempt(['email' => $email, 'password' => $password], true)) {
                return true;
        }

        return false;
    }

    public function loggedUser()
    {
        return Auth::user() ?? false;
    }
}
