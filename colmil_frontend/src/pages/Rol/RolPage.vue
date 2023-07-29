<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Rol") }}</h4>
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
                                            @click.prevent="newRol"
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
                                        ref="datatable-rol"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-rol" size="lg" title="Rol">
            <h4>Numero</h4>
            <p class="text-muted">{{ rol.Num }}</p>
            <h4>{{ $t("nav.Rol") }}</h4>
            <p class="text-muted">{{ rol.Rol }}</p>
            <template #modal-footer>
                <a @click.prevent="editRol" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deleteRol" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-rol" size="lg" title="Rol">
            <form role="form">
                <div class="form-group">
                    <label for="Num">Numero</label>
                    <input
                        type="number"
                        class="form-control"
                        name="Num"
                        v-model="rol.Num"
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
                    <label for="Rol"> {{ $t("nav.Rol") }} </label>
                    <input
                        type="text"
                        class="form-control"
                        name="Rol"
                        v-model="rol.Rol"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Rol"
                    >
                        <li class="parsley-required">
                            {{ errorBag.Rol }}
                        </li>
                    </ul>
                </div>
            </form>
            <template #modal-footer>
                <a @click.prevent="saveRol()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelRol()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./RolPage.js"></script>