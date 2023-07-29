<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArmaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('Arma')->insert(['Arma'=> 'DAEN.', 'Descripcion' => 'DIPLOMADO EN ALTOS ESTUDIOS NACIONALES','Tipo'=>1]);
        DB::table('Arma')->insert(['Arma'=> 'DEM.', 'Descripcion' => 'DIPLOMADO EN ESTADO MAYOR','Tipo'=>1]);
        DB::table('Arma')->insert(['Arma'=> 'DIM.', 'Descripcion' => 'DIPLOMADO EN INGENIERÍA MILITAR','Tipo'=>1]);

        DB::table('Arma')->insert(['Arma'=> 'ART.', 'Descripcion' => 'ARTILLERIA','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'CAB.', 'Descripcion' => 'CABALLERIA','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'COM.', 'Descripcion' => 'COMUNICACIONES','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'ING.', 'Descripcion' => 'INGENIERÍA','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'INF.', 'Descripcion' => 'INFANTERIA','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'INT.', 'Descripcion' => 'INTELIGENCIA','Tipo'=>2]);
        DB::table('Arma')->insert(['Arma'=> 'LOG.', 'Descripcion' => 'LOGISTICA','Tipo'=>2]);
                
    }
}
