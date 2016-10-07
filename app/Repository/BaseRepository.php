<?php

namespace App\Repository;

use Illuminate\Container\Container as Application;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    protected $model;
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->makeModel();
    }

    abstract protected function model();

    public function makeModel()
    {

        if (!class_exists($this->model())) {
            throw new \Exception("The model class {$this->model()} not exists");
        }

        $className = $this->model();
        $model = new $className();

        if (!$model instanceof Model) {
            throw new \Exception("Class {$this->model()} must be an instance " .
                "of Illuminate\\Database\\Eloquent\\Model");
        }

        $this->model = $model;
        return $this;
    }
}
