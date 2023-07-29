import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "ParaleloPage",
    data() {
        let ss = new MainService();
        return {
            msg: "ParaleloPage",
            ss: ss,
            ajax: {
                "url": ss.indexParalelo(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Paralelo', name: 'Paralelo', title: 'Paralelo' },
                { data: 'Descripcion', name: 'Descripcion', title: 'Descripcion' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            paraleloShow: [],
            paralelo: {},
            isLoading: false,
            errorBag: {}
        };
    },
    methods: {
        listParalelo() {
            this.ss.listParalelo().then(
                (result) => {
                    let response = result.data;
                    //this.paralelo = response.data;
                    console.log("List "+response.data);
                    /*
                    this.$refs['view-paralelo'].show();
                    this.isLoading=false;
                    */
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },

        newParalelo() {
            this.paralelo = {};
            this.$refs['frm-paralelo'].show();
        },
        showParalelo(id) {
            this.isLoading=true;
            this.ss.showParalelo(id).then(
                (result) => {
                    let response = result.data;
                    this.paralelo = response.data;
                    //console.log(this.rol);
                    this.$refs['view-paralelo'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editParalelo() {
            this.$refs['frm-paralelo'].show();
            this.$refs['view-paralelo'].hide();
        },
        cancelParalelo() {
            if (this.paralelo.id) {
                this.$refs['view-paralelo'].show();
            }
            this.$refs['frm-paralelo'].hide();
        },
        saveParalelo() {
            this.ss.storeParalelo(this.paralelo).then(
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
                    this.$refs['frm-paralelo'].hide();
                    this.$refs['datatable-paralelo'].reload();
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
        deleteParalelo() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyParalelo(this.paralelo)
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
                                this.$refs['view-paralelo'].hide();
                                this.$refs['datatable-paralelo'].reload();
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
            window.$('.btn-datatable-paralelo').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showParalelo(data);
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

        this.listParalelo();
    }
};
