var axios = require('axios');

export default class MainService {

    constructor() {
        var token = JSON.parse(localStorage.getItem('token'));
        axios.defaults.baseURL = process.env.VUE_APP_MAIN_SERVICE;
        if (token) {
            axios.defaults.headers.common = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }else{
            axios.defaults.headers.common = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    //Configuration
    getToken() {
        return axios.defaults.headers.common;
    }

    login(item) {
        return axios.post('api/login', item);
    }

    uploadFile(item) {
        return axios.post('api/uploadFile', item);
    }

    loginToken365(item) {
        return axios.post('api/loginToken365', item);
    }
    //persona
    indexPersona() {
        return axios.defaults.baseURL + 'api/Persona/index';
    }

    showPersona(id) {
        return axios.get('api/Persona/show?id=' + id);
    }

    listPersona() {
        return axios.get('api/Persona/list');
    }

    storePersona(item) {
        return axios.post('api/Persona/store', item);
    }

    destroyPersona(item) {
        return axios.post('api/Persona/destroy', item);
    }
    //curso
    indexCurso() {
        return axios.defaults.baseURL + 'api/Persona/index';
    }

    showCurso(id) {
        return axios.get('api/Curso/show?id=' + id);
    }

    listCurso() {
        return axios.get('api/Curso/list');
    }

    storeCurso(item) {
        return axios.post('api/Curso/store', item);
    }

    destroyCurso(item) {
        return axios.post('api/Curso/destroy', item);
    }
    //Grado
    getGrado() {
        return axios.get('api/Persona/grado');
    }
    //Arma
    getArma() {
        return axios.get('api/Persona/arma');
    }
    //Docente
    getGradoDocente() {
        return axios.get('api/Docente/grado');
    }

    getArmaDocente() {
        return axios.get('api/Docente/arma');
    }

    indexDocente() {
        return axios.defaults.baseURL + 'api/Docente/index';
    }

    showDocente(id) {
        return axios.get('api/Docente/show?id=' + id);
    }

    listDocente() {
        return axios.get('api/Docente/list');
    }

    storeDocente(item) {
        return axios.post('api/Docente/store', item);
    }

    destroyDocente(item) {
        return axios.post('api/Docente/destroy', item);
    }
    //Materia
    indexMateria() {
        return axios.defaults.baseURL + 'api/Materia/index';
    }

    showMateria(id) {
        return axios.get('api/Materia/show?id=' + id);
    }

    listMateria() {
        return axios.get('api/Materia/list');
    }

    storeMateria(item) {
        return axios.post('api/Materia/store', item);
    }

    destroyMateria(item) {
        return axios.post('api/Materia/destroy', item);
    }
    //Paralelo
    indexParalelo() {
        return axios.defaults.baseURL + 'api/Paralelo/index';
    }

    showParalelo(id) {
        return axios.get('api/Paralelo/show?id=' + id);
    }

    listParalelo() {
        return axios.get('api/Paralelo/list');
    }

    storeParalelo(item) {
        return axios.post('api/Paralelo/store', item);
    }

    destroyParalelo(item) {
        return axios.post('api/Paralelo/destroy', item);
    }
    //Asignar
    indexAsignar() {
        return axios.defaults.baseURL + 'api/Asignar/index';
    }

    showAsignar(id) {
        return axios.get('api/Asignar/show?id=' + id);
    }

    listAsignar() {
        return axios.get('api/Asignar/list');
    }

    contarAsignacion() {
        return axios.get('api/Asignar/contarAsignacion');
    }
    
    storeAsignar(item) {
        return axios.post('api/Asignar/store', item);
    }
   
    destroyAsignar(item) {
        return axios.post('api/Asignar/destroy', item);
    }
    seleccionarCadetes(item) {
        return axios.get('api/Asignar/seleccionarCadetes?curso=' + item);
    }
    
    //Others
    changePassword(item) {
        return axios.post('api/Persona/changePassword', item);
    }

    showRol(id) {
        return axios.get('api/Rol/show?id=' + id);
    }

    indexRol() {
        return axios.defaults.baseURL + 'api/Rol/index';
    }

    listRol() {
        return axios.get('api/Rol/list');
    }

    storeRol(item) {
        return axios.post('api/Rol/store', item);
    }

    destroyRol(item) {
        return axios.post('api/Rol/destroy', item);
    }

    //TipoReporte
    showTipoReporte(id) {
        return axios.get('api/TipoReporte/show?id=' + id);
    }

    indexTipoReporte() {
        return axios.defaults.baseURL + 'api/TipoReporte/index';
    }

    listTipoReporte() {
        return axios.get('api/TipoReporte/list');
    }

    storeTipoReporte(item) {
        return axios.post('api/TipoReporte/store', item);
    }

    destroyTipoReporte(item) {
        return axios.post('api/TipoReporte/destroy', item);
    }

    generateTipoReporte(item) {
        return axios.post('api/TipoReporte/generate', item);
    }
}