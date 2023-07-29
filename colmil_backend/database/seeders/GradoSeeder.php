<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GradoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('Grado')->insert(['Grado'=> 'GRAL. EJTO.', 'Descripcion' => 'GENERAL DE EJERCITO','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'GRAL. DIV.', 'Descripcion' => 'GENERAL DE DIVISION','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'GRAL. BRIG.', 'Descripcion' => 'GENERAL DE BRIGADA','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'CNL.', 'Descripcion' => 'CORONEL','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'TCNL.', 'Descripcion' => 'TENIENTE CORONEL','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'MY.', 'Descripcion' => 'MAYOR','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'CAP.', 'Descripcion' => 'CAPITAN','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'TTE.', 'Descripcion' => 'TENIENTE','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'STTE.', 'Descripcion' => 'SUB TENIENTE','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SOF. MTRE', 'Descripcion' => 'SUBOFICIAL MAESTRE','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SOF. MY.', 'Descripcion' => 'SUBOFICIAL MAYOR','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SOF. 1RO.', 'Descripcion' => 'SUBOFICIAL PRIMERO','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SOF. 2DO.', 'Descripcion' => 'SUBOFICIAL SEGUNDO','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SOF. INCL.', 'Descripcion' => 'SUBOFICIAL INICIAL','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SGTO. 1RO.', 'Descripcion' => 'SARGENTO PRIMERO','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SGTO. 2DO.', 'Descripcion' => 'SARGENTO SEGUNDO','Tipo'=>1]);
        DB::table('Grado')->insert(['Grado'=> 'SGTO INCL.', 'Descripcion' => 'SARGENTO INICIAL','Tipo'=>1]);

        DB::table('Grado')->insert(['Grado'=> '1ER. A.M.', 'Descripcion' => 'PRIMER AÑO','Tipo'=>2]);
        DB::table('Grado')->insert(['Grado'=> '2DO. A.M.', 'Descripcion' => 'SEGUNDO AÑO','Tipo'=>2]);
        DB::table('Grado')->insert(['Grado'=> '3ER. A.M.', 'Descripcion' => 'TERCER AÑO','Tipo'=>2]);
        DB::table('Grado')->insert(['Grado'=> '4TO. A.M.', 'Descripcion' => 'CUARTO AÑO','Tipo'=>2]);
    }
}
