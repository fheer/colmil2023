import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "AsignarPage",
    data() {
        let ss = new MainService();
        return {
            msg: "AsignarPage",
            ss: ss,
            ajax: {
                "url": ss.indexAsignar(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Curso', name: 'Curso', title: 'Curso' },
                { data: 'Materia', name: 'Materia', title: 'Materia' },
                { data: 'Paralelo', name: 'Paralelo', title: 'Paralelo' },
                { data: 'Docente', name: 'Docente', title: 'Nombres y Apellidos' },
                { data: 'Cadete', name: 'Cadete', title: 'Nombres y Apellidos' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            rols: [],
            asignar: {},
            listaCursos: [],
            listaMaterias: [],
            listaDocentes: [],
            listaCadetes: [],
            listaParalelos:[],
            listaCadetesAsignados: {},
            selectedDocente:0,
            isLoading: false,
            errorBag: {},
            selectAll: false,
            countAsignar:0,
        };
    },
    methods: {
        toggleAllCheckboxes() {
            for (let checkbox of this.listaCadetesAsignados) {
                checkbox.checked = this.selectAll;
            }
        },
        showCheckedItems() {
            this.checkedItems = this.checkboxes.filter(checkbox => checkbox.checked);
        },
        getCurso() {
            this.ss.listCurso().then(
                (result) => {
                    let response = result.data;
                    this.listaCursos = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getMateria() {
            this.ss.listMateria().then(
                (result) => {
                    let response = result.data;
                    this.listaMaterias = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getParalelo() {
            this.ss.listParalelo().then(
                (result) => {
                    let response = result.data;
                    this.listaParalelos = response.data;
                    console.log(this.listaParalelos);
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getDocente() {
            this.ss.listDocente().then(
                (result) => {
                    let response = result.data;
                    this.listaDocentes = response.data;
                    console.log(this.listaDocentes);
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getCadete() {
            this.ss.listPersona().then(
                (result) => {
                    let response = result.data;
                    this.listaCadetes = response.data;
                    //console.log(this.listaDocentes);
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getAsignarCadetes() {
            ///*
            console.log('Curso get asi cates '+this.asignar.Curso);
            var curso = this.asignar.Curso;
            this.ss.seleccionarCadetes(curso).then(
                (result) => {
                    let response = result.data;
                    //console.log('response '+response);
                    this.listaCadetesAsignados = response.data;
                    this.listaCadetesAsignados.checked = false;
                    //console.log("activosAsignadosId id: " + this.listaCadetesAsignados);
                }
            ).catch(error => {
                console.log(error);
            });
            //*/
        },
        newRol() {
            this.asignar = {};
            this.$refs['frm-rol'].show();
        },
        showRol(id) {
            this.isLoading=true;
            this.ss.showAsignar(id).then(
                (result) => {
                    let response = result.data;
                    this.asignar = response.data;
                    this.$refs['view-rol'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editRol() {
            this.$refs['frm-rol'].show();
            this.$refs['view-rol'].hide();
        },
        cancelRol() {
            if (this.asignar.id) {
                this.$refs['view-rol'].show();
            }
            this.$refs['frm-rol'].hide();
        },
        saveRol() {
            this.ss.contarAsignacion().then(
                (result) => {
                    let response = result.data;
                    this.countAsignar = response;
                    console.log('response contar '+this.countAsignar);
                    this.listaCadetesAsignados.forEach(element => {                
                        //*
                        console.log('element '+element);
                        console.log('Checked '+element.checked);
                        element.Materia = this.asignar.Materia;
                        element.Curso = this.asignar.Curso;
                        element.Docente = this.asignar.Docente;
                        element.Paralelo = this.asignar.Paralelo;
                        //console.log('languages '+ $this.languages);
                        //console.log('codigo activo '+ element.CodigoActivo);
                        if (element.checked) {
                        ///*   
                        
                        //console.log('id del la tabla PersonaAsignacionActivo ', this.updateAnteriorPersona.id );
                        ///*
                        this.ss.storeAsignar(element).then(
                            (result) => {
                                console.log(result);
                                let response = result.data;
                                console.log(response);
                            });
                        //*/
                        }
                    //console.log(element.CodigoActivo);
                    });
                }
            ) 
        },
        deleteRol() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyRol(this.asignar)
                            .then((result) => {
                                let response = result.data;
                                console.log(response);
                                this.$bvToast.toast(
                                    response.msg,
                                    {
                                        title: 'Correcto',
                                        variant: 'success',
                                        autoHideDelay: 5000
                                    }
                                )
                                this.$refs['view-rol'].hide();
                                this.$refs['datatable-rol'].reload();
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });
        },
        draw() {
            window.$('.btn-datatable-Rol').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showRol(data);
            });
        }
    },
    components: {
        dataTable,
        Loader
    },
    watch: {
        selectedDocente(value) {
            
           this.asignar.Docente = value.Persona;       
            
           console.log("select docente value"+value.Persona);
           console.log("docente persona"+this.asignar.Docente);                   
        },

},
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
            this.$router.push('/Login');
        }
        this.getCurso();
        this.getMateria();
        this.getDocente();
        this.getCadete();
        this.getParalelo();
    }
};
