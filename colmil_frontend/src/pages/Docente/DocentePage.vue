<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Docente") }}</h4>
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
                                            @click.prevent="newPersona"
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
                                        ref="datatable-persona"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-persona" size="lg" title="Docente">
            <div class="row">
                <div class="col-md-6">
                    <img :src="persona.URLFoto" style="width: 100%" />
                </div>
                <div class="col-md-6">
                    <h4>{{ $t("nav.Docente") }}</h4>
                    <p class="text-muted">{{ persona.Grado + ' ' + persona.Arma + ' ' + persona.Persona }}</p>
                    <h4>Rol</h4>
                    <p class="text-muted">
                        {{ persona.rol ? persona.rol.Rol : "" }}
                    </p>
                    <h4>email</h4>
                    <p class="text-muted">{{ persona.email }}</p>
                </div>
            </div>
            <template #modal-footer>
                <a
                    @click.prevent="cambiopassword"
                    class="btn btn-success waves-effect waves-light"
                >
                    <i class="fab fa-expeditedssl"></i>
                    {{ $t("actions.changepassword") }}
                </a>
                <a @click.prevent="editPersona" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deletePersona" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-persona" size="xl" title="Docente">
            <form role="form">
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="ApellidoPaterno">Cédula de Identidad</label>
                        <input
                            type="text"
                            class="form-control"
                            name="CI"
                            v-model="persona.CI"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.CI"
                        >
                            <li class="parsley-required">
                                {{ errorBag.CI }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="grado">Grado</label>
                        <select
                            type="text"
                            class="form-control"
                            name="grado"
                            v-model="persona.Grado"
                        >
                            <option
                                :value="grados.Grado"
                                v-for="grados in grado"
                                v-bind:key="grados.Grado"
                            >
                                {{ grados.Grado }}
                            </option>
                        </select>
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Grado"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Grado }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="arma">Arma</label>
                        <select
                            type="text"
                            class="form-control"
                            name="arma"
                            v-model="persona.Arma"
                        >
                            <option
                                :value="arma.Arma"
                                v-for="arma in armas"
                                v-bind:key="arma.Arma"
                            >
                                {{ arma.Arma }}
                            </option>
                        </select>
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.Arma"
                        >
                            <li class="parsley-required">
                                {{ errorBag.Arma }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                            <label for="ApellidoPaterno">Apellido Paterno</label>
                            <input
                                type="text"
                                class="form-control"
                                name="ApellidoPaterno"
                                v-model="persona.ApellidoPaterno"
                            />
                            <ul
                                class="parsley-errors-list filled"
                                id="parsley-id-19"
                                v-if="errorBag.ApellidoPaterno"
                            >
                                <li class="parsley-required">
                                    {{ errorBag.ApellidoPaterno }}
                                </li>
                            </ul>
                            </div>
                            <div class="form-group col-md-4">
                        <label for="ApellidoMaterno"> Apellido Materno </label>
                        <input
                            type="text"
                            class="form-control"
                            name="ApellidoMaterno"
                            v-model="persona.ApellidoMaterno"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.ApellidoMaterno"
                        >
                            <li class="parsley-required">
                                {{ errorBag.ApellidoMaterno }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="Nombres"> Nombres </label>
                    <input
                        type="text"
                        class="form-control"
                        name="Nombres"
                        v-model="persona.Nombres"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Nombres"
                    >
                        <li class="parsley-required">
                            {{ errorBag.Nombres }}
                        </li>
                    </ul>
                </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email"> Email </label>
                        <input
                            type="text"
                            class="form-control"
                            name="email"
                            v-model="persona.email"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.email"
                        >
                            <li class="parsley-required">
                                {{ errorBag.email }}
                            </li>
                        </ul>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="password">Password </label>
                        <input
                            type="password"
                            class="form-control"
                            name="password"
                            v-model="persona.password"
                        />
                        <ul
                            class="parsley-errors-list filled"
                            id="parsley-id-19"
                            v-if="errorBag.password"
                        >
                            <li class="parsley-required">
                                {{ errorBag.password }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="rol">Rol</label>
                        <select
                            type="text"
                            class="form-control"
                            name="Rol"
                            v-model="persona.Rol"
                        >
                            <option
                                :value="r.id"
                                v-for="r in rols"
                                v-bind:key="r.id"
                            >
                                {{ r.Rol }}
                            </option>
                        </select>
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
                
                    <div class="form-group col-md-6">
                        <label for="email"> Fotografia </label>
                        <b-form-file
                            @change="loadFile('Fotografia')"
                            placeholder="Selecciona o suelta un Archivo..."
                            drop-placeholder="Suelta el Archivo aqui..."
                        ></b-form-file>
                        <span v-show="isLoadingFile" class="text-success"
                            ><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                            Cargando Archivo<span class="sr-only"
                                >Cargando...</span
                            ></span
                        >
                        <span
                            v-show="!isLoadingFile && persona.Fotografia"
                            class="text-info"
                            ><i class="fa fa-thumbs-o-up"></i> Archivo
                            Cargado!</span
                        >
                    </div>
                </div>
            </form>
            <template #modal-footer>
                <a @click.prevent="savePersona()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelPersona()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>

        <!-- formulario de vista cambiar password persona-->
        <b-modal ref="view-password" size="md" title="Persona">
            <div class="row">
                <div class="col-lg-12">
                    <label for="new">Nueva Contraseña:</label>
                    <input
                        type="password"
                        class="form-control"
                        name="new"
                        v-model="password.new"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-|id-19"
                        v-if="errorBag.new"
                    >
                        <li class="parsley-required">@{{ errorBag.new }}</li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <label for="confirm">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        class="form-control"
                        name="confirm"
                        v-model="password.confirm"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-|id-19"
                        v-if="errorBag.confirm"
                    >
                        <li class="parsley-required">
                            @{{ errorBag.confirm }}
                        </li>
                    </ul>
                </div>
            </div>
            <template #modal-footer>
                <a
                    @click.prevent="changePassword"
                    class="btn btn-success waves-effect waves-light"
                >
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelPassword"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./DocentePage.js"></script>