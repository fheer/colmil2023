<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('Curso')->insert(['Curso' => 'Primer']);
        DB::table('Curso')->insert(['Curso' => 'Segundo']);
        DB::table('Curso')->insert(['Curso' => 'Tercer']);
        DB::table('Curso')->insert(['Curso' => 'Cuarto']);
    }
}
