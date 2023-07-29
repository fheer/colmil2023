<template>
    <div>
        <Loader v-if="isLoading"></Loader>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Asignar") }}</h4>
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
        <b-modal ref="view-rol" size="lg" title="Datos Asignar">
            <h4>Curso</h4>
            <p class="text-muted">{{ asignar.Curso }}</p>
            <h4>Materia</h4>
            <p class="text-muted">{{ asignar.Materia }}</p>
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
        <b-modal ref="frm-rol" size="lg" title="Asignar Paralelo">
            <form role="form">
                <div class="form-group">
                    <label for="Curso">Curso</label>
                    <select type="text"
                        class="form-control"
                        name="UnidadAcademica"
                        v-model="asignar.Curso" @change="getAsignarCadetes">
                        <option :value="cursos.Curso"
                            v-for="cursos in listaCursos"
                            v-bind:key="cursos.Curso" >
                            {{ cursos.Curso }}
                        </option>
                    </select>
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Curso"
                    >
                        <li class="parsley-required">{{ errorBag.Curso }}</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-12">                        
                        <label for="Persona">Lista de Cadetes</label>
                        <v-simple-table fixed-header height="300px" class="centradito">
                            <template v-slot:default>
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col" style="width:60px;">Nro.</th>
                                        <th scope="col" style="width:90px;">Grado</th>
                                        <th scope="col">Arma</th>
                                        <th scope="col">Cadete</th>
                                        <th scope="col" style="width:150px;">Seleccionar &nbsp;&nbsp;&nbsp;&nbsp; <input type="checkbox" v-model="selectAll" @change="toggleAllCheckboxes"></th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(listaCadetes) in listaCadetesAsignados" v-bind:key="listaCadetes.Cadete">
                                        
                                        <td>{{ listaCadetes.id }} </td>
                                        <td>{{ listaCadetes.Grado }}</td>
                                        <td>{{ listaCadetes.Arma }}</td>
                                        <td>{{ listaCadetes.Persona }}</td>
                                        <td style="text-align: center;">
                                             <input type="checkbox" id="checkbox" :style="{ backgroundColor: 'blue' }" v-model="listaCadetes.checked">   
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        
                    </div>
                </div>
                <div class="form-group">
                    <label for="Rol"> Docente </label>
                    <vue-bootstrap-typeahead
                            :data="listaDocentes"
                            v-model="asignar.Docente"
                            :serializer="
                                (item) => item.Persona
                            "
                            @hit="selectedDocente = $event"                    
                        />
                </div>
                <div class="form-group">
                    <label for="Rol"> Materia </label>
                    <select type="text"
                        class="form-control"
                        name="UnidadAcademica"
                        v-model="asignar.Materia">
                        <option :value="materias.Materia"
                            v-for="materias in listaMaterias"
                            v-bind:key="materias.Materia" >
                            {{ materias.Materia }}
                        </option>
                    </select>
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
                    <label for="Paralelo"> Parelelo </label>
                    <select type="text"
                        class="form-control"
                        name="UnidadAcademica"
                        v-model="asignar.Paralelo">
                        <option :value="paralelo.Paralelo"
                            v-for="paralelo in listaParalelos"
                            v-bind:key="paralelo.Paralelo" >
                            {{ paralelo.Paralelo }}
                        </option>
                    </select>
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Paralelo"
                    >
                        <li class="parsley-required">
                            {{ errorBag.Paralelo }}
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

<script src="./AsignarPage.js"></script>