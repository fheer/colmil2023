<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Persona extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('Persona', function (Blueprint $table) {
            $table->increments('id');
            $table->string('CI',20)->unique()->nullable();
            $table->string('Curso',30)->nullable();
            $table->string('Grado',20)->nullable();
            $table->string('Arma',20)->nullable();
            $table->integer('UnidadAcademica')->unsigned()->nullable();
            $table->integer('Rol')->unsigned()->nullable();
            $table->integer('idArma')->unsigned()->nullable();
            $table->integer('idGrado')->unsigned()->nullable();
            $table->string('ApellidoPaterno',50)->nullable();
            $table->string('ApellidoMaterno',50)->nullable();
            $table->string('Nombres',50);
            $table->string('Persona',650);
            $table->string('Foto', 250)->nullable();
            $table->integer('Tipo')->default(1);

            /* credenciales de acceso al sistema */
            $table->string('email')->unique()->nullable();
            $table->string('password')->nullable();
            $table->boolean('Activo')->default(false);
            $table->string('TokenLogin')->nullable();
            
            $table->rememberToken();
            /* campos para login con Office365 */
            $table->datetime('UltimoInicioSesion')->nullable();
            $table->string('SocialLogin', 50)->nullable();
            $table->string('SocialLoginId', 150)->nullable();
            $table->string('Avatar', 250)->nullable();

            $table->string('Office365Id', 150)->nullable();

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

            $table->foreign('UnidadAcademica')->references('id')->on('UnidadAcademica');
            $table->foreign('idArma')->references('id')->on('Arma');
            $table->foreign('idGrado')->references('id')->on('Grado');
            $table->foreign('Rol')->references('id')->on('Rol');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Persona'); //
    }
}
