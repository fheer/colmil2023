import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "UnidadAcademicaPage",
    data() {
        let ss = new MainService();
        return {
            msg: "UnidadAcademicaPage",
            ss: ss,
            ajax: {
                "url": ss.indexUnidadAcademica(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'UnidadAcademica', name: 'UnidadAcademica', title: 'Unidad Académica' },
                { data: 'Sigla', name: 'Sigla', title: 'Sigla' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            unidadAcademicas: [],
            unidadacademica: {},
            isLoading: false,
            errorBag: {}
        };
    },
    methods: {
        newUnidadAcademica() {
            this.unidadacademica = {};
            this.$refs['frm-unidadacademica'].show();
        },
        showUnidadAcademica(id) {
            this.isLoading=true;
            this.ss.showUnidadAcademica(id).then(
                (result) => {
                    let response = result.data;
                    this.unidadacademica = response.data;
                    this.$refs['view-unidadacademica'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editUnidadAcademica() {
            this.$refs['frm-unidadacademica'].show();
            this.$refs['view-unidadacademica'].hide();
        },
        cancelUnidadAcademica() {
            if (this.unidadacademica.id) {
                this.$refs['view-unidadacademica'].show();
            }
            this.$refs['frm-unidadacademica'].hide();
        },
        saveUnidadAcademica() {
            this.ss.storeUnidadAcademica(this.unidadacademica).then(
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
                    //this.$refs['view-consulta'].show(); //para volver al modal
                    console.log(response);
                    this.$refs['frm-unidadacademica'].hide();
                    this.$refs['datatable-unidadacademica'].reload();
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
        deleteUnidadAcademica() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyUnidadAcademica(this.unidadacademica)
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
                                this.$refs['view-unidadacademica'].hide();
                                this.$refs['datatable-unidadacademica'].reload();
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
            window.$('.btn-datatable-UnidadAcademica').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showUnidadAcademica(data);
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
        }
    }
};
