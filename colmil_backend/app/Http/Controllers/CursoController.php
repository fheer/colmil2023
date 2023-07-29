<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Yajra\Datatables\Datatables;
use App\Http\Requests\CursoRequest;

class CursoController extends Controller
{
    public function index()
    {
        $curso = Curso::select('id', 'Curso')->whereNull('deleted_at');

        return Datatables::of($curso)
            ->addIndexColumn()
            ->addColumn('action', function ($p) {
                return '<a class="btn btn-info btn-xs btn-datatable-Rol" id="' . $p->id . '"><i class="fa fa-bars"></i> ' . 'Detalles' . '</a> &nbsp;';
            })
            ->editColumn('id', '{{$id}}')
            ->make(true);
    }

    public function list()
    {
        $item = new Curso();
        $objeto = null;

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
        $item = Curso::findOrFail($request->id);
        $data = array(
            'success' => true,
            'data' => $item,
            'msg' => trans('messages.listed')
        );

        return response()->json($data);
    }

    public function store(CursoRequest $request)
    {
        if ($request->id) {
            $item = Curso::findOrFail($request->id);
            $msg = trans('messages.updated');
        } else {
            $item = new Curso();
            $item->CreatorUserName = Auth::user()->email;
            $item->CreatorFullUserName = Auth::user()->Persona;
            $item->CreatorIP = $request->ip();
            $msg = trans('messages.added');
        }

        $item->Curso = $request->Curso;
        
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
        $item = Curso::where('id', $request->id)->first();
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
}
