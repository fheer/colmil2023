<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Rol extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('Rol')->insert(['Num'=>1, 'Rol' => 'Administrador']);
        DB::table('Rol')->insert(['Num'=>2, 'Rol' => 'Operador']);
        DB::table('Rol')->insert(['Num'=>3, 'Rol' => 'Invitado']);

    }
}
