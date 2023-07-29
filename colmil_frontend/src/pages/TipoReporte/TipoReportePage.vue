<template>
    <div class="content">
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.TipoReporte") }}</h4>
        </div>
        <div class="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title text-dark m-0">
                                    Detalle de Registros
                                    <div class="float-right">
                                        <a
                                            href="#"
                                            @click.prevent="newTipoReporte"
                                            class="
                                                btn btn-sm btn-success
                                                waves-effect waves-light
                                                m-l-10
                                            "
                                        >
                                            <i class="fa fa-plus"></i>
                                            {{ $t("actions.new") }}
                                        </a>
                                    </div>
                                </h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <data-table
                                        :columns="columns"
                                        :ajax="ajax"
                                        width="100%"
                                        @draw="draw"
                                        ref="datatable-tipoReporte"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-tipoReporte" size="lg" title="Tipo Reporte">
            <div class="row">
                <div class="col-lg-4">
                    <h5 class="font-weight-bold">Numero:</h5>
                    <p class="text-muted">{{ tipoReporte.Num }}</p>
                </div>
                <div class="col-lg-4">
                    <h5 class="font-weight-bold">
                        {{ $t("nav.TipoReporte") }}
                    </h5>
                    <p class="text-muted">{{ tipoReporte.TipoReporte }}</p>
                </div>
                <div class="col-lg-4">
                    <h5 class="font-weight-bold">Módulo:</h5>
                    <p class="text-muted">{{ tipoReporte.Modulo }}</p>
                </div>
                <div class="col-lg-8">
                    <b class="font-weight-bold">Título: </b>
                    <p class="text-muted">{{ tipoReporte.Titulo }}</p>
                </div>
                <div class="col-lg-4">
                    <b class="font-weight-bold">Nombre de Archivo: </b>
                    <p class="text-muted">{{ tipoReporte.NombreArchivo }}</p>
                </div>
                <div class="col-lg-12">
                    <b class="font-weight-bold">Parámetros: </b>
                    <p class="text-muted">{{ tipoReporte.Parametros }}</p>
                </div>
                <div class="col-lg-12">
                    <b class="font-weight-bold">Definición: </b>
                    <p class="text-muted">{{ tipoReporte.Definicion }}</p>
                </div>
                <div class="col-lg-4">
                    <b class="font-weight-bold">Origen: </b>
                    <p class="text-muted">{{ tipoReporte.Origen }}</p>
                </div>
                <div class="col-lg-4">
                    <b class="font-weight-bold">Activo: </b>
                    <p class="text-muted">
                        {{ tipoReporte.Activo ? "SI" : "NO" }}
                    </p>
                </div>
            </div>
            <template #modal-footer>
                <a @click.prevent="editTipoReporte" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deleteTipoReporte" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-tipoReporte" size="lg" title="tipoReporte">
            <form role="form">
                <div class="row">
                    <div class="form-group col-md-2">
                        <label for="Num">No.</label>
                        <input
                            type="number"
                            class="form-control"
                            name="Num"
                            v-model="tipoReporte.Num"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Num"
                        >
                            <li class="parsley-required">{{ errorBag.Num }}</li>
                        </ul>
                    </div>

                    <div class="form-group col-md-10">
                        <label for="tipoReporte">Tipo de Reporte</label>
                        <input
                            type="text"
                            class="form-control"
                            name="tipoReporte"
                            v-model="tipoReporte.TipoReporte"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.TipoReporte"
                        >
                            <li class="parsley-required">
                                {{ errorBag.TipoReporte }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Modulo">Módulo</label>
                        <input
                            type="text"
                            class="form-control"
                            name="Modulo"
                            v-model="tipoReporte.Modulo"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Modulo"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Modulo }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Titulo">Título</label>
                        <input
                            type="text"
                            class="form-control"
                            name="Titulo"
                            v-model="tipoReporte.Titulo"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Titulo"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Titulo }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="NombreArchivo">Nombre de Archivo</label>
                        <input
                            type="text"
                            class="form-control"
                            name="NombreArchivo"
                            v-model="tipoReporte.NombreArchivo"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.NombreArchivo"
                        >
                            <li class="parsley-required">
                                {{ errorBag.NombreArchivo }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-7">
                        <label for="Parametros">Parámetros</label>
                        <input
                            type="text"
                            class="form-control"
                            name="Parametros"
                            v-model="tipoReporte.Parametros"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Parametros"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Parametros }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="Definicion">Definición</label>
                        <textarea
                            name="Definicion"
                            class="form-control"
                            cols="10"
                            v-model="tipoReporte.Definicion"
                        ></textarea>
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Definicion"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Definicion }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-8">
                        <label for="Parametros">Origen</label>
                        <input
                            type="text"
                            class="form-control"
                            name="Origen"
                            v-model="tipoReporte.Origen"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Origen"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Origen }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Activo">Estado</label>
                        <div class="checkbox checkbox-success check-activo">
                            <input
                                id="Activo"
                                type="checkbox"
                                name="Activo"
                                v-model="tipoReporte.Activo"
                            />
                            <label for="Activo">Activo</label>
                        </div>
                    </div>
                </div>
            </form>
            <template #modal-footer>
                <a @click.prevent="saveTipoReporte()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelTipoReporte()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./TipoReportePage.js"></script>
