<?php

namespace App\Http\Controllers;

use App\Models\Asignar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Yajra\Datatables\Datatables;
use App\Http\Requests\AsignarRequest;
use App\Models\Persona;
      
class AsignarController extends Controller
{
    public function index()
    {
        ///*
        $asignar = Asignar::select('id', 'Curso', 'Cadete', 'Docente', 'Materia', 'Paralelo')
        //->disticnt('Asinar')
        ->whereNull('deleted_at');
        
        //*/

        return Datatables::of($asignar)
        ->addIndexColumn()
        ->addColumn('action', function ($p) {
            return '<a class="btn btn-info btn-xs btn-datatable-Rol" id="' . $p->id . '"><i class="fa fa-bars"></i> ' . 'Detalles' . '</a> &nbsp;';
        })
        ->editColumn('id', '{{$id}}')
        ->make(true);
    }

    public function list(Request $request)
    {
        $item = new Asignar();
        $objeto = null;

        if (Auth::user()->Rol != 1)
            //$item = $item->where('id', '>', 1);

        $objeto = $item->orderBy('id', 'asc')->whereNull('deleted_at')->get();

        $data = array(
            'success' => true,
            'data' => $objeto,
            'msg' => trans('messages.listed')
        );

        return response()->json($data);
    }

    public function show(Request $request)
    {
        $item = Asignar::findOrFail($request->id);
        $data = array(
            'success' => true,
            'data' => $item,
            'msg' => trans('messages.listed')
        );

        return response()->json($data);
    }

    public function seleccionarCadetes(Request $request)
    {
        //return $request->curso;
        $item = new Persona();
        $objeto = null;
        //$curso  = "'" + $request + "'";
        $miCadena = (string)$request;
        $objeto = $item->orderBy('ApellidoPaterno', 'asc')
                ->where('Curso', $request->curso)
                //->where('Curso', 'PRIMER')
                ->whereNull('deleted_at')
                ->get();

        $data = array(
            'success' => true,
            'data' => $objeto,
        );

        return response()->json($data);
    }

    public function store(AsignarRequest $request)
    {
        /*
        if ($request->id) {
            $item = Asignar::findOrFail($request->id);
            $msg = trans('messages.updated');
        } else {
            $item = new Asignar();
            hghghrgr.hhshshshshutuqye
            $item->CreatorUserName = Auth::user()->email;
            $item->CreatorFullUserName = Auth::user()->Persona;
            $item->CreatorIP = $request->ip();
            $msg = trans('messages.added');
        }
        */
        $item = new Asignar();
        $item->CreatorUserName = Auth::user()->email;
        $item->CreatorFullUserName = Auth::user()->Persona;
        $item->CreatorIP = $request->ip();
        $msg = trans('messages.added');

        $item->Cadete = $request->Persona;
        $item->Docente = $request->Docente;
        $item->Materia = $request->Materia;
        $item->Paralelo = $request->Paralelo;
        $item->Curso = $request->Curso;
        $item->Asignar = $request->Asignar;
        /*
        $item->idCadete = $request->idCadete;
        $item->idDocente = $request->idDocente;
        $item->idMateria = $request->idMateria;
        $item->idParalelo = $request->idParalelo;
        $item->idCurso = $request->idCurso;
        */
        $item->UpdaterUserName = Auth::user()->email;
        $item->UpdaterFullUserName = Auth::user()->Persona;
        $item->UpdaterIP = $request->ip();
        $item->save();

        $result = array(
            'success' => true,
            'data' => $item,
            'msg' => $msg
        );
        return response()->json($result);
    }

    public function destroy(Request $request)
    {
        $item = Asignar::where('id', $request->id)->first();
        $item->deleted_at = Carbon::now();
        $item->DeleterUserName = Auth::user()->Persona;
        $item->DeleterFullUserName = Auth::user()->Persona;
        $item->DeleterIP =  $request->ip();
        $item->save();
        $result = array(
            'success' => true,
            'data' => null,
            'msg' => trans('messages.deleted')
        );

        return response()->json($result);
    }

    function contarAsignacion()
    {
        return 1;
        $maxValue = Asignar::whereNull('deleted_at')->max('Asignar');
        if ($maxValue != 0) {
            return ($maxValue + 1);
        } else {
            if ($maxValue != null) {
                return ($maxValue + 1);
            } else {
                return 1;
            }
        } 
    }

    function reporte ()
    {
        return 0;
    }

    
}
