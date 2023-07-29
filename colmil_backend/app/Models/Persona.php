<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Persona extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'Persona';

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['URLFoto'];

    public function unidadAcademica() {
        return $this->belongsTo(UnidadAcademica::class, 'UnidadAcademica');
    }
    
    public function rol() {
        return $this->belongsTo(Rol::class, 'Rol');
    }

    public function grado() {
        return $this->belongsTo(Grado::class, 'Grado');
    }

    public function getURLFotoAttribute() {
        if($this->Foto) {
            return url('/') . '/storage/documents/' . $this->Foto;
        } else {
            return url('/') . '/images/default_image_profile.png';
        }
    }
}







