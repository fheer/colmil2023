import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
import Loader from "@/components/Loader";
window.$ = window.jQuery = require("jquery");

export default {
    name: "MateriaPage",
    data() {
        let ss = new MainService();
        return {
            msg: "MateriaPage",
            ss: ss,
            ajax: {
                "url": ss.indexMateria(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Codigo', name: 'Codigo', title: 'Codigo' },
                { data: 'Materia', name: 'Materia', title: 'Materia' },
                { data: 'Descripcion', name: 'Descripcion', title: 'Descripción' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            subjects: [],
            materias: {},
            isLoading: false,
            errorBag: {}
        };
    },
    methods: {
        newMateria() {
            this.materias = {};
            this.$refs['frm-materia'].show();
        },
        showMateria(id) {
            this.isLoading=true;
            this.ss.showMateria(id).then(
                (result) => {
                    let response = result.data;
                    this.materias = response.data;
                    this.$refs['view-materia'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editMateria() {
            this.$refs['frm-materia'].show();
            this.$refs['view-materia'].hide();
        },
        cancelMateria() {
            if (this.rol.id) {
                this.$refs['view-materia'].show();
            }
            this.$refs['frm-materia'].hide();
        },
        saveMateria() {
            
            this.subjects.Codigo = this.materias.Codigo;
            this.subjects.Materia = this.materias.Materia;
            this.subjects.Descripcion = this.materias.Descripcion;
            console.log(this.materias);
            this.ss.storeMateria(this.materias).then(
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
                    this.$refs['frm-materia'].hide();
                    this.$refs['datatable-Materia'].reload();
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
        deleteMateria() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyMateria(this.materias)
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
                                this.$refs['view-materia'].hide();
                                this.$refs['datatable-Materia'].reload();
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
            window.$('.btn-datatable-Materia').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showMateria(data);
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
