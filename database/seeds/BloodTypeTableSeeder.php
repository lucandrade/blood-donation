<?php

use Illuminate\Database\Seeder;

use App\Model\BloodType;

class BloodTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-'];

        array_map(function ($name) {
            BloodType::create(['name' => $name, 'description' => '']);
        }, $data);
    }
}
