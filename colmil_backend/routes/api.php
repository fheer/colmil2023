<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UnidadAcademicaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\TipoReporteController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\ParaleloController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\AsignarController;
use App\Http\Controllers\CursoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('uploadFile', function (Request $request) {
    try {
        if ($request->hasFile('File')) {
            $fileName = md5(uniqid() . \Carbon\Carbon::now()) . '.' . strtolower($request->file('File')->getClientOriginalExtension());
            //dd($request->op);
            $path = $request->file('File')->storeAs('documents', $fileName, 'public');

            $data = array(
                'success' => true,
                'data' => $fileName,
                'msg' => trans('messages.file_uplodaded')
            );
        } else {
            $data = array(
                'success' => false,
                'data' => null,
                'msg' => 'Error al guardar archivo.'
            );
        }
    } catch (\Exception $e) {
        $data = array(
            'success' => false,
            'data' => null,
            'msg' => $e->getMessage()
        );
    }
    return response()->json($data);
})->name('utils.uploadFile');

Route::post('login', [LoginController::class, 'login'])->middleware('guest');
Route::post('loginToken365', [LoginController::class, 'loginToken365'])->middleware('guest');

/****************************************** ROL *********************************/
Route::group(['prefix' => 'Rol', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [RolController::class, 'list'])->name('Rol.list');
    Route::get('/index', [RolController::class, 'index'])->name('Rol.index');
    Route::post('/destroy', [RolController::class, 'destroy'])->name('Rol.destroy');
    Route::post('/store', [RolController::class, 'store'])->name('Rol.store');
    Route::get('/show', [RolController::class, 'show'])->name('Rol.show');
});

/************************************ UNIDAD ACADEMICA *****************/
Route::group(['prefix' => 'UnidadAcademica', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [UnidadAcademicaController::class, 'list'])->name('UnidadAcademica.list');
    Route::get('/index', [UnidadAcademicaController::class, 'index'])->name('UnidadAcademica.index');
    Route::post('/destroy', [UnidadAcademicaController::class, 'destroy'])->name('UnidadAcademica.destroy');
    Route::post('/store', [UnidadAcademicaController::class, 'store'])->name('UnidadAcademica.store');
    Route::get('/show', [UnidadAcademicaController::class, 'show'])->name('UnidadAcademica.show');
});

/************************************ PERSONA *****************/
Route::group(['prefix' => 'Persona', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [PersonaController::class, 'list'])->name('Persona.list');
    Route::get('/index', [PersonaController::class, 'index'])->name('Persona.index');
    Route::post('/destroy', [PersonaController::class, 'destroy'])->name('Persona.destroy');
    Route::post('/store', [PersonaController::class, 'store'])->name('Persona.store');
    Route::get('/show', [PersonaController::class, 'show'])->name('Persona.show');
    Route::get('/select2', [PersonaController::class, 'select2'])->name('Persona.select2');
    Route::get('/grado', [PersonaController::class, 'grado'])->name('Persona.grado');
    Route::get('/arma', [PersonaController::class, 'arma'])->name('Persona.arma');
    Route::post('/changePassword', [PersonaController::class, 'changePassword'])->name('Persona.changePassword');
});

/************************************ Docente *****************/
Route::group(['prefix' => 'Docente', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [DocenteController::class, 'list'])->name('Docente.list');
    Route::get('/index', [DocenteController::class, 'index'])->name('Docente.index');
    Route::post('/destroy', [DocenteController::class, 'destroy'])->name('Docente.destroy');
    Route::post('/store', [DocenteController::class, 'store'])->name('Docente.store');
    Route::get('/show', [DocenteController::class, 'show'])->name('Docente.show');
    Route::get('/select2', [DocenteController::class, 'select2'])->name('Docente.select2');
    Route::get('/grado', [DocenteController::class, 'grado'])->name('Docente.grado');
    Route::get('/arma', [DocenteController::class, 'arma'])->name('Docente.arma');
    Route::post('/changePassword', [DocenteController::class, 'changePassword'])->name('Docente.changePassword');
});

/************************************ TipoReporte *****************/
Route::group(['prefix' => 'TipoReporte', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [TipoReporteController::class, 'list'])->name('TipoReporte.list');
    Route::get('/index', [TipoReporteController::class, 'index'])->name('TipoReporte.index');
    Route::post('/destroy', [TipoReporteController::class, 'destroy'])->name('TipoReporte.destroy');
    Route::post('/store', [TipoReporteController::class, 'store'])->name('TipoReporte.store');
    Route::get('/show', [TipoReporteController::class, 'show'])->name('TipoReporte.show');
    Route::post('/generate', [TipoReporteController::class, 'generate'])->name('TipoReporte.generate');
});

/************************************ Materia *****************/
Route::group(['prefix' => 'Materia', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [MateriaController::class, 'list'])->name('Materia.list');
    Route::get('/index', [MateriaController::class, 'index'])->name('Materia.index');
    Route::post('/destroy', [MateriaController::class, 'destroy'])->name('Materia.destroy');
    Route::post('/store', [MateriaController::class, 'store'])->name('Materia.store');
    Route::get('/show', [MateriaController::class, 'show'])->name('Materia.show');
});

/************************************ Paralelo *****************/
Route::group(['prefix' => 'Paralelo', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [ParaleloController::class, 'list'])->name('Paralelo.list');
    Route::get('/index', [ParaleloController::class, 'index'])->name('Paralelo.index');
    Route::post('/destroy', [ParaleloController::class, 'destroy'])->name('Paralelo.destroy');
    Route::post('/store', [ParaleloController::class, 'store'])->name('Paralelo.store');
    Route::get('/show', [ParaleloController::class, 'show'])->name('Paralelo.show');
});

/************************************ Asignar *****************/
Route::group(['prefix' => 'Asignar', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [AsignarController::class, 'list'])->name('Asignar.list');
    Route::get('/index', [AsignarController::class, 'index'])->name('Asignar.index');
    Route::post('/destroy', [AsignarController::class, 'destroy'])->name('Asignar.destroy');
    Route::post('/store', [AsignarController::class, 'store'])->name('Asignar.store');
    Route::get('/show', [AsignarController::class, 'show'])->name('Asignar.show');
    Route::get('/contarAsignacion', [AsignarController::class, 'contarAsignacion'])->name('Asignar.contarAsignacion');
    Route::get('/seleccionarCadetes', [AsignarController::class, 'seleccionarCadetes'])->name('Asignar.seleccionarCadetes');
    Route::get('/reporte', [AsignarController::class, 'reporte'])->name('Asignar.reporte');
});

/************************************ Curso *****************/
Route::group(['prefix' => 'Curso', 'middleware' => 'auth:api'], function () {
    Route::get('/list', [CursoController::class, 'list'])->name('Curso.list');
    Route::get('/index', [CursoController::class, 'index'])->name('Curso.index');
    Route::post('/destroy', [CursoController::class, 'destroy'])->name('Curso.destroy');
    Route::post('/store', [CursoController::class, 'store'])->name('Curso.store');
    Route::get('/show', [CursoController::class, 'show'])->name('Curso.show');
});
