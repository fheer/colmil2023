<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asignar extends Model
{
    use HasFactory;
    protected $table = 'Asignar';
    /*
    public function curso() {
        return $this->belongsTo(Curso::class, 'Curso');
    }

    public function persona() {
        return $this->belongsTo(Persona::class, 'Persona')->with('Grado', 'Arma');
    }
    
    public function materia() {
        return $this->belongsTo(Materia::class, 'Materia');
    }

    public function paralelo() {
        return $this->belongsTo(Paralelo::class, 'Paralelo');
    }
    */
}
