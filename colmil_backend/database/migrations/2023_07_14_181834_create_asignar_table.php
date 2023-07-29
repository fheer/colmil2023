<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAsignarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Asignar', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Curso', 250)->nullable();
            $table->string('Cadete', 250)->nullable();
            $table->string('Docente', 250)->nullable();
            $table->string('Materia', 250)->nullable();
            $table->string('Paralelo', 250)->nullable();
            $table->integer('Asignar')->nullable();

            $table->integer('idCadete')->nullable();
            $table->integer('idDocente')->nullable();
            $table->integer('idMateria')->nullable();
            $table->integer('idParalelo')->nullable();
            $table->integer('idCurso')->nullable();

            $table->nullableTimestamps();
            $table->SoftDeletes();
            $table->string('CreatorUserName', 250)->nullable();
            $table->string('CreatorFullUserName', 250)->nullable();
            $table->string('CreatorIP', 250)->nullable();
            $table->string('UpdaterUserName', 250)->nullable();
            $table->string('UpdaterFullUserName', 250)->nullable();
            $table->string('UpdaterIP', 250)->nullable();
            $table->string('DeleterUserName', 250)->nullable();
            $table->string('DeleterFullUserName', 250)->nullable();
            $table->string('DeleterIP', 250)->nullable();

            $table->foreign('idCadete')->references('id')->on('Persona');
            $table->foreign('idDocente')->references('id')->on('Persona');
            $table->foreign('idMateria')->references('id')->on('Materia');
            $table->foreign('idParalelo')->references('id')->on('Paralelo');
            $table->foreign('idCurso')->references('id')->on('Curso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Asignar');
    }
}
