<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Materia") }}</h4>
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
                                            @click.prevent="newMateria"
                                            class="btn btn-sm btn-success waves-effect waves-light m-l-10"
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
                                        ref="datatable-Materia"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-materia" size="lg" title="Datos de la Materia">
            <h5>Código</h5>
            <p class="text-muted">{{ materias.Codigo }}</p>
            <h5>Materia</h5>
            <p class="text-muted">{{ materias.Materia }}</p>
            <h5>Descripción</h5>
            <p class="text-muted">{{ materias.Descripcion }}</p>
            <template #modal-footer>
                <a @click.prevent="editMateria" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deleteMateria" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-materia" size="lg" title="Materia">
            <form role="form">
                <div class="form-group">
                    <label for="Codigo">Código</label>
                    <input
                        type="text"
                        class="form-control"
                        name="Codigo"
                        v-model="materias.Codigo"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Codigo"
                    >
                        <li class="parsley-required">{{ errorBag.CodCodigoigo }}</li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="Materia"> Materia </label>
                    <input
                        type="text"
                        class="form-control"
                        name="Materia"
                        v-model="materias.Materia"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Materia"
                    >
                        <li class="parsley-required">
                            {{ errorBag.Materia }}
                        </li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="Descripcion"> Descripción </label>
                    <input
                        type="text"
                        class="form-control"
                        name="Descripcion"
                        v-model="materias.Descripcion"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Descripcion"
                    >
                        <li class="parsley-required">
                            {{ errorBag.Descripcion }}
                        </li>
                    </ul>
                </div>
            </form>
            <template #modal-footer>
                <a @click.prevent="saveMateria()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelMateria()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./MateriaPage.js"></script>