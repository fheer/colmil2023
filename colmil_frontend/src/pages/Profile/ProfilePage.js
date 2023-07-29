import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "ProfilePage",
    data() {
        let ss = new MainService();
        return {
            msg: "ProfilePage",
            ss: ss,
            ajax: {
                "url": ss.indexPersona(),
                headers: ss.getToken(),
            },
            auth:{},
            persona: {},
            unidadAcademicas: [],
            rols: [],
            isLoading: false,
            isLoadingFile:false,
            errorBag: {},
            password: {}
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
                            );
                            this.persona.Foto = result.data.data;
                            this.savePersona();
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
        getUnidadAcademica() {
            this.ss.listUnidadAcademica().then(
                (result) => {
                    let response = result.data;
                    this.unidadAcademicas = response.data;
                }
            ).catch(error => {
                console.log(error);
            });
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
        showPersona() {
            this.ss.showPersona(this.auth.id)
                .then(result => {
                    let response = result.data;
                    this.persona = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        editPersona() {
            this.$refs['frm-persona'].show();
        },
        cambiopassword() {
            this.$refs['view-password'].show();
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
        savePersona() {
            this.ss.storePersona(this.persona)
                .then(result => {
                    let response = result.data;
                    this.persona = response.data;

                    this.$bvToast.toast(
                        response.msg,
                        {
                            title: 'Correcto',
                            variant: 'success',
                            autoHideDelay: 5000
                        }
                    )
                })
                .catch(error => {
                    console.log(error);
                    this.$bvToast.toast(
                        'Error al guardar el registro',
                        {
                            title: 'Oops!',
                            variant: 'success',
                            autoHideDelay: 5000
                        }
                    )
                    this.errorBag = error.data.errors;
                });
        },
        cancelPersona() {
            this.$refs['frm-persona'].hide();
        },
        cancelPassword() {
            this.$refs['view-password'].hide();
        },
    },
    components: {
        dataTable,
        Loader
    },
    mounted() {
        this.auth = JSON.parse(localStorage.getItem('persona'));
        console.log(this.auth);
        if (!this.auth) {
            this.$router.push('/Login');
        } else {
            this.showPersona();
            this.getRol();
            this.getUnidadAcademica();
        }
    }
};
