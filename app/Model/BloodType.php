<?php

namespace App\Model;

use App\Model\Base as Model;

class BloodType extends Model
{
    protected $table = 'blood_type';

    protected $fillable = [
        'name', 'description', 'active'
    ];
}
