<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.UnidadAcademica") }}</h4>
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
                                            @click.prevent="newUnidadAcademica"
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
                                        ref="datatable-unidadacademica"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-unidadacademica" size="lg" title="UnidadAcademica">
            <h4>Numero</h4>
            <p class="text-muted">{{ unidadacademica.Num }}</p>
            <h4>{{ $t("nav.UnidadAcademica") }}</h4>
            <p class="text-muted">{{ unidadacademica.UnidadAcademica }}</p>
            <h4>Sigla</h4>
            <p class="text-muted">{{ unidadacademica.Sigla }}</p>
            <template #modal-footer>
                <a @click.prevent="editUnidadAcademica" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a
                    @click.prevent="deleteUnidadAcademica"
                    class="btn btn-danger"
                >
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-unidadacademica" size="lg" title="UnidadAcademica">
            <form role="form">
                <div class="form-group">
                    <label for="Num">Numero</label>
                    <input
                        type="number"
                        class="form-control"
                        name="Num"
                        v-model="unidadacademica.Num"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Num"
                    >
                        <li class="parsley-required">{{ errorBag.Num }}</li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="UnidadAcademica">
                        {{ $t("nav.UnidadAcademica") }}
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        name="UnidadAcademica"
                        v-model="unidadacademica.UnidadAcademica"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.UnidadAcademica"
                    >
                        <li class="parsley-required">
                            {{ errorBag.UnidadAcademica }}
                        </li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="Sigla">Sigla</label>
                    <input
                        type="text"
                        class="form-control"
                        name="Sigla"
                        v-model="unidadacademica.Sigla"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Sigla"
                    >
                        <li class="parsley-required">{{ errorBag.Sigla }}</li>
                    </ul>
                </div>
            </form>
            <template #modal-footer>
                <a
                    @click.prevent="saveUnidadAcademica()"
                    class="btn btn-success"
                >
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelUnidadAcademica()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./UnidadAcademicaPage.js"></script>