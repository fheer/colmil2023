import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "DocentePage",
    data() {
        let ss = new MainService();
        return {
            msg: "DocentePage",
            ss: ss,
            ajax: {
                "url": ss.indexDocente(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Grado', name: 'Grado', title: 'Grado' },
                { data: 'Arma', name: 'Arma', title: 'Arma' },
                { data: 'Persona', name: 'Persona', title: 'Docente' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            unidadAcademicas: [],
            rols: [],
            personas: [],
            persona: {},
            isLoading: false,
            isLoadingFile: false,
            errorBag: {},
            password: {},
            grado: [],
            armas: [],
        };
    },
    methods: {
        loadFile(input) {
            this.isLoadingFile = true;
            input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                var data = new FormData();
                data.append('File', input.files[0]);
                this.ss.uploadFile(data)
                    .then(result => {
                        if (result.data.success) {
                            this.$bvToast.toast(
                                result.data.msg,
                                {
                                    title: 'Correcto',
                                    variant: 'info',
                                    autoHideDelay: 5000
                                }
                            )
                            this.persona.Foto = result.data.data;
                        } else {
                            this.$bvToast.toast(
                                result.data.msg,
                                {
                                    title: 'Oops!',
                                    variant: 'danger',
                                    autoHideDelay: 5000
                                }
                            )
                        }
                        this.isLoadingFile = false;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$bvToast.toast(
                            'Error subiendo archivo',
                            {
                                title: 'Oops!',
                                variant: 'danger',
                                autoHideDelay: 5000
                            }
                        )
                        this.isLoadingFile = false;
                    });
            }
        },
        
        getRol() {
            this.ss.listRol().then(
                (result) => {
                    let response = result.data;
                    this.rols = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getGrado() {
            this.ss.getGradoDocente().then(
                (result) => {
                    let response = result.data;
                    this.grado = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
        },
        getArma() {
            this.ss.getArmaDocente().then(
                (result) => {
                    let response = result.data;
                    this.armas = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
        },
        newPersona() {
            this.persona = {};
            this.$refs['frm-persona'].show();
        },
        showPersona(id) {
            this.isLoading=true;
            this.ss.showDocente(id).then(
                (result) => {
                    let response = result.data;
                    this.persona = response.data;
                    this.$refs['view-persona'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editPersona() {
            this.$refs['frm-persona'].show();
            this.$refs['view-persona'].hide();
        },
        cancelPersona() {
            if (this.persona.id) {
                this.$refs['view-persona'].show();
            }
            this.$refs['frm-persona'].hide();
        },
        savePersona() {
            this.ss.storeDocente(this.persona).then(
                (result) => {
                    console.log(result);
                    let response = result.data;
                    this.$bvToast.toast(
                        response.msg,
                        {
                            title: 'Correcto',
                            variant: 'success',
                            autoHideDelay: 5000
                        }
                    )
                    console.log(response);
                    //this.$refs['view-consulta'].show(); //para volver al modal
                    console.log(response);
                    this.$refs['frm-persona'].hide();
                    this.$refs['datatable-persona'].reload();
                })
                .catch((error) => {
                    this.errorBag = error.response.data.errors;
                    this.$bvToast.toast(
                        'Problema al Guardar el Registro, favor verificar los Datos',
                        {
                            title: 'Error',
                            variant: 'danger',
                            autoHideDelay: 5000
                        }
                    )
                });
        },
        deletePersona() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyDocente(this.persona)
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
                                this.$refs['view-persona'].hide();
                                this.$refs['datatable-persona'].reload();
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });
        },
        cambiopassword() {
            this.$refs['view-persona'].hide();
            this.$refs['view-password'].show();
        },
        cancelPassword() {
            this.$refs['view-password'].hide();
            this.$refs['view-persona'].show();
        },
        changePassword() {
            this.password.Persona = this.persona.id;
            this.ss.changePassword(this.password)
                .then( result => {
                    let response = result.data;
                    if ( response.success ) {
                        this.$bvToast.toast(
                            response.msg,
                            {
                                title: 'Correcto',
                                variant: 'success',
                                autoHideDelay: 5000
                            }
                        )
                        this.$refs['view-password'].hide();
                        this.$refs['view-persona'].show();
                    } else {
                        this.$bvToast.toast(
                            response.msg,
                            {
                                title: 'Oops',
                                variant: 'danger',
                                autoHideDelay: 5000
                            }
                        )
                    }
                })
                .catch( error => {
                    console.log( error );
                    this.$bvToast.toast(
                        'Error al guardar el registro',
                        {
                            title: 'Oops',
                            variant: 'danger',
                            autoHideDelay: 5000
                        }
                    )
                    this.errorBag = error.data.errors;
                })
        },
        draw() {
            window.$('.btn-datatable-Persona').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showPersona(data);
            });
        }
    },
    components: {
        dataTable,
        Loader
    },
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
            this.$router.push('/Login');
        } else {
            this.getRol();
            this.getGrado();
            this.getArma();
        }
    }
};
