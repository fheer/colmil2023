import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "RolPage",
    data() {
        let ss = new MainService();
        return {
            msg: "RolPage",
            ss: ss,
            ajax: {
                "url": ss.indexRol(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Rol', name: 'Rol', title: 'Rol' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            rols: [],
            rol: {},
            isLoading: false,
            errorBag: {}
        };
    },
    methods: {
        newRol() {
            this.rol = {};
            this.$refs['frm-rol'].show();
        },
        showRol(id) {
            this.isLoading=true;
            this.ss.showRol(id).then(
                (result) => {
                    let response = result.data;
                    this.rol = response.data;
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
            if (this.rol.id) {
                this.$refs['view-rol'].show();
            }
            this.$refs['frm-rol'].hide();
        },
        saveRol() {
            this.ss.storeRol(this.rol).then(
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
                    this.$refs['frm-rol'].hide();
                    this.$refs['datatable-rol'].reload();
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
                        this.ss.destroyRol(this.rol)
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
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
            this.$router.push('/Login');
        }
    }
};
