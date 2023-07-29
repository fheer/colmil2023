<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class DocenteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        if ($request->id) {
            return [
                'CI' => 'required',
                'Grado' => 'required',
                'Arma' => 'required',
                'Nombres' => 'required|regex:/(^[A-Za-z ]+$)+/|max:50',
                'ApellidoPaterno' => 'required|alpha|max:50',
                'ApellidoMaterno' => 'nullable|max:80',
                'Rol' => 'required',
                'email' => 'required|email',
            ];
        } else {
            return [
                'CI' => 'required',
                'Grado' => 'required',
                'Arma' => 'required',
                'Nombres' => 'required|regex:/(^[A-Za-z ]+$)+/|max:50',
                'ApellidoPaterno' => 'required|alpha|max:50',
                'ApellidoMaterno' => 'nullable|max:50',
                'Rol' => 'required',
                'email' => 'required|email|unique:Persona',
            ];
        }
    }
}
