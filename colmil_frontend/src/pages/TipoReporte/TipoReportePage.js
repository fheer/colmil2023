import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
window.$ = window.jQuery = require("jquery");

export default {
    name: "TipoReportePage",
    data() {
        let ss = new MainService();
        return {
            msg: "TipoReportePage",
            ss: ss,
            ajax: {
                "url": ss.indexTipoReporte(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', searchable: false, visible: false },
                { data: 'Num', name: 'Num', title: 'No.' },
                { data: 'TipoReporte', name: 'TipoReporte', title: 'Tipo de Reporte' },
                { data: 'Modulo', name: 'Modulo', title: 'Módulo' },
                { data: 'NombreArchivo', name: 'NombreArchivo', title: 'Nombre de Archivo' },
                { data: 'Origen', name: 'Origen', title: 'Origen' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            tipoReportes: [],
            tipoReporte: {},
            errorBag: {}
        };
    },
    methods: {
        newTipoReporte() {
            this.tipoReporte = {};
            this.$refs['frm-tipoReporte'].show();
        },
        showTipoReporte(id) {
            this.ss.showTipoReporte(id).then(
                (result) => {
                    let response = result.data;
                    this.tipoReporte = response.data;
                    this.$refs['view-tipoReporte'].show();
                }
            ).catch(error => {
                console.log(error);
            });
        },
        editTipoReporte() {
            this.$refs['frm-tipoReporte'].show();
            this.$refs['view-tipoReporte'].hide();
        },
        cancelTipoReporte() {
            if (this.tipoReporte.id) {
                this.$refs['view-tipoReporte'].show();
            }
            this.$refs['frm-tipoReporte'].hide();
        },
        saveTipoReporte() {
            this.ss.storeTipoReporte(this.tipoReporte).then(
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
                    this.$refs['frm-tipoReporte'].hide();
                    this.$refs['datatable-tipoReporte'].reload();
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
        deleteTipoReporte() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyTipoReporte(this.tipoReporte)
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
                                this.$refs['view-tipoReporte'].hide();
                                this.$refs['datatable-tipoReporte'].reload();
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
            window.$('.btn-datatable-TipoReporte').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showTipoReporte(data);
            });
        }
    },
    components: {
        dataTable
    },
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
            this.$router.push('/Login');
        }
    }
};
