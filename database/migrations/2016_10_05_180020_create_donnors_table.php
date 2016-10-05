<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonnorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donnors', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('patient_id')->unsigned();
            $table->foreign('patient_id')
                ->references('id')
                ->on('users')
                ->onDelete('restrict');
            $table->integer('blood_type_id')->unsigned();
            $table->foreign('blood_type_id')
                ->references('id')
                ->on('blood_type')
                ->onDelete('restrict');
            $table->string('name');
            $table->decimal('lat', 11, 6);
            $table->decimal('lon', 11, 6);
            $table->string('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('donnors');
    }
}
