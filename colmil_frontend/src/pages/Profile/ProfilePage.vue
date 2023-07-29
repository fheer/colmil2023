<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Persona") }}</h4>
        </div>
        <div class="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title text-dark m-0">
                                    Información General
                                    <div class="float-right">
                                        <a
                                            @click.prevent="cambiopassword"
                                            class="btn btn-info btn-sm"
                                        >
                                            <i class="fas fa-lock"></i>
                                            {{ $t("actions.changepassword") }}
                                        </a>
                                        <a
                                            @click.prevent="editPersona"
                                            class="btn btn-warning btn-sm"
                                        >
                                            <i class="fa fa-edit"></i>
                                            {{ $t("actions.edit") }}
                                        </a>
                                    </div>
                                </h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-5">
                                        <img
                                            :src="persona.URLFoto"
                                            style="width: 100%"
                                        />
                                        <br />
                                        <br />
                                        <b-form-file
                                            @change="loadFile('Fotografia')"
                                            placeholder="Selecciona o suelta un Archivo..."
                                            drop-placeholder="Suelta el Archivo aqui..."
                                        ></b-form-file>
                                        <span
                                            v-show="isLoadingFile"
                                            class="text-success"
                                            ><i
                                                class="
                                                    fa
                                                    fa-spinner
                                                    fa-pulse
                                                    fa-3x
                                                    fa-fw
                                                "
                                            ></i>
                                            Cargando Archivo<span
                                                class="sr-only"
                                                >Cargando...</span
                                            ></span
                                        >
                                    </div>
                                    <div class="col-md-7">
                                        <h4>{{ $t("nav.Persona") }}</h4>
                                        <p class="text-muted">
                                            {{ persona.Persona }}
                                        </p>
                                        <h4>Unidad Academica</h4>
                                        <p class="text-muted">
                                            {{
                                                persona.unidad_academica
                                                    ? persona.unidad_academica
                                                          .UnidadAcademica
                                                    : ""
                                            }}
                                        </p>
                                        <h4>Rol</h4>
                                        <p class="text-muted">
                                            {{
                                                persona.rol
                                                    ? persona.rol.Rol
                                                    : ""
                                            }}
                                        </p>
                                        <h4>email</h4>
                                        <p class="text-muted">
                                            {{ persona.email }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                    @click.prevent="cancelPassword()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>

        <!-- vista de consulta-->
        <b-modal ref="frm-persona" size="md" title="Persona">
            <form role="form">
                <div class="form-group">
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
                <div class="form-group">
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
                <div class="form-group">
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
                <div class="form-group">
                    <label for="UnidadAcademica">Unidad Academica</label>
                    <select
                        type="text"
                        class="form-control"
                        name="UnidadAcademica"
                        v-model="persona.UnidadAcademica"
                    >
                        <option
                            :value="ua.id"
                            v-for="ua in unidadAcademicas"
                            v-bind:key="ua.id"
                        >
                            {{ ua.UnidadAcademica }}
                        </option>
                    </select>
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
                    <label for="UnidadAcademica">Rol</label>
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
    </div>
</template>

<script src="./ProfilePage.js"></script>