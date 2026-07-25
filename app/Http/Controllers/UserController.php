<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = Cache::remember('users_list', 3600, function () {
            return User::orderBy('name')->get();
        });

        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }
}
