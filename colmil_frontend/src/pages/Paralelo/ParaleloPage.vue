<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Paralelo") }}</h4>
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
                                            @click.prevent="newParalelo"
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
                                        ref="datatable-paralelo"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-paralelo" size="lg" title="Datos Paralelo">
            <h4>Paralelo</h4>
            <p class="text-muted">{{ paralelo.Paralelo }}</p>
            <h4>Descripción</h4>
            <p class="text-muted">{{paralelo.Descripcion}}</p>
            <template #modal-footer>
                <a @click.prevent="editParalelo" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deleteParalelo" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-paralelo" size="lg" title="Paralelo">
            <form role="form">
                <div class="form-group">
                    <label for="Paralelo">Paralelo</label>
                    <input
                        type="text"
                        class="form-control"
                        name="Paralelo"
                        v-model="paralelo.Paralelo"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Paralelo"
                    >
                        <li class="parsley-required">{{ errorBag.Paralelo }}</li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="Descripcion"> Descripción </label>
                    <input
                        type="text"
                        class="form-control"
                        name="Descripcion"
                        v-model="paralelo.Descripcion"
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
                <a @click.prevent="saveParalelo()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelParalelo()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./ParaleloPage.js"></script>