<?php

namespace App\Http\Controllers;

use App\Models\Arma;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Yajra\Datatables\Datatables;
use App\Http\Requests\ArmaRequest;

class ArmaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arma = Arma::select('id', 'grado')->whereNull('deleted_at');
        /*
        if (Auth::user()->Rol == 2) //operador 
            $item->where('p.UnidadAcademica', Auth::user()->UnidadAcademica);

        if (Auth::user()->Rol == 3) //normal
            $item->where('u.id', Auth::user()->id);
        */
        return Datatables::of($arma)
            ->addIndexColumn()
            ->addColumn('action', function ($p) {
                return '<a class="btn btn-info btn-xs btn-datatable-Rol" id="' . $p->id . '"><i class="fa fa-bars"></i> ' . 'Detalles' . '</a> &nbsp;';
            })
            ->editColumn('id', '{{$id}}')
            ->make(true);
    }

    public function list(Request $request)
    {
        $item = new Arma();
        $objeto = null;

        if (Auth::user()->Rol != 1)
            $item = $item->where('id', '>', 1);

        $objeto = $item->orderBy('Num', 'asc')->whereNull('deleted_at')->get();

        $data = array(
            'success' => true,
            'data' => $objeto,
            'msg' => trans('messages.listed')
        );

        return response()->json($data);
    }

        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Arma  $arma
     * @return \Illuminate\Http\Response
     */
    public function show(Arma $arma)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Arma  $arma
     * @return \Illuminate\Http\Response
     */
    public function edit(Arma $arma)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Arma  $arma
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Arma $arma)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Arma  $arma
     * @return \Illuminate\Http\Response
     */
    public function destroy(Arma $arma)
    {
        //
    }
}
