<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UnidadAcademica::class);
        $this->call(Rol::class);
        $this->call(ArmaSeeder::class);
        $this->call(GradoSeeder::class);
        $this->call(CursoSeeder::class);
        $this->call(MateriaSeeder::class);
        $this->call(Persona::class);
        $this->call(TipoReporte::class);
        // \App\Models\User::factory(10)->create();
    }
}
