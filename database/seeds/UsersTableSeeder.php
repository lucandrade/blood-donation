<?php

use Illuminate\Database\Seeder;

use App\Model\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Lucas Andrade',
            'email' => 'lucasandradedeveloper@gmail.com',
            'password' => bcrypt('lucas')
        ]);
    }
}
