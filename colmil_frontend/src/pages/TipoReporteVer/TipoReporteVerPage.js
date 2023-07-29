import MainService from "@/services/MainService.js";

export default {
    name: "TipoReporteVerPage",
    data() {
        let ss = new MainService();
        return {
            msg: "TipoReporteVerPage",
            ss: ss,
            tipoReportes: {},
            reporte: {},
            personas: {},
            unidadAcademicas: {},
            enable: {
                UnidadAcademica:false,
                Persona:false,
                Desde:false,
                Hasta:false,

            },
            errorBag: {}
        };
    },
    methods: {
        verFormato() {
            this.getTipoReportes();
        },
        verParametros() {
            //console.log(event);
            //console.log(this.reporte);
            this.ss.showTipoReporte(this.reporte.TipoReporte).then(
                (result) => {
                    //console.log(result);

                    var parametros = result.data.data.Parametros;
                    console.log(parametros);
                    if (parametros.includes(':idUnidadAcademica'))
                        this.enable.UnidadAcademica = true;
                    else
                        this.enable.UnidadAcademica = false;

                    if (parametros.includes(':idPersona'))
                        this.enable.Persona = true;
                    else
                        this.enable.Persona = false;

                    if (parametros.includes(':desde'))
                        this.enable.Desde = true;
                    else
                        this.enable.Desde = false;

                    if (parametros.includes(':hasta'))
                        this.enable.Hasta = true;
                    else
                        this.enable.Hasta = false;
                }
            );
        },
        setReset() {
            this.reporte = {};
        },
        getTipoReportes() {
            this.ss.listTipoReporte().then(
                result => this.tipoReportes = result.data.data
            ).catch(
                error => console.log(error)
            );
        },
        getUnidadAcademicas() {
            this.ss.listUnidadAcademica().then(
                result => this.unidadAcademicas = result.data.data
            ).catch(
                error => console.log(error)
            );
        },
        getPersonas() {

            this.ss.listPersona().then(
                result => {
                    let response = result.data;
                    this.personas = response.data;
                    //toastr.success('Usuarios Cargados', 'Correcto!');
                })
                .catch(error => {
                    console.log(error);
                    //toastr.error('Error de Carga', 'Error!');

                });
        },
        generaReporte() {
            this.isLoading = true;
            //console.log(this.reporte);

            this.ss.generateTipoReporte(this.reporte).then(
                result => {
                    console.log(result);
                    this.isLoading = false;
                    let response = result.data;
                    if (response.success) {
                        this.setReset();

                        this.$bvToast.toast(
                            response.msg,
                            {
                                title: 'Correcto',
                                variant: 'success',
                                autoHideDelay: 5000
                            }
                        )
                        var a = document.createElement("a");
                        a.href = response.data.url;
                        a.target = '_blank';
                        a.click();
                    } else {
                        this.$bvToast.toast(
                            response.msg,
                            {
                                title: 'Error',
                                variant: 'danger',
                                autoHideDelay: 5000
                            }
                        )
                    }
                    this.errorBag = {};
                })
                .catch(error => {
                    this.isLoading = false;
                    console.log(error);
                    this.$bvToast.toast(
                        'Error al generar el reporte',
                        {
                            title: 'Error',
                            variant: 'danger',
                            autoHideDelay: 5000
                        }
                    )
                    this.errorBag = error.data.errors;
                })
        }
    },
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
            this.$router.push('/Login');
        } else {

            this.getUnidadAcademicas();
            this.getPersonas();
            this.getTipoReportes();
        }
    }
};
