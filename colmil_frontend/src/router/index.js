import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login/LoginPage.vue'
//import UnidadAcademicaPage from '@/pages/UnidadAcademica/UnidadAcademicaPage.vue'
import RolPage from '@/pages/Rol/RolPage.vue'
import PersonaPage from '@/pages/Persona/PersonaPage.vue'
import PrincipalPage from '@/pages/Principal/PrincipalPage.vue'
import ProfilePage from '@/pages/Profile/ProfilePage.vue'
import TipoReportePage from '@/pages/TipoReporte/TipoReportePage.vue'
import TipoReporteVerPage from '@/pages/TipoReporteVer/TipoReporteVerPage.vue'
import DocentePage from '@/pages/Docente/DocentePage.vue'
import MateriaPage from '@/pages/Materia/MateriaPage.vue'
import ParaleloPage from '@/pages/Paralelo/ParaleloPage.vue'
import AsignarPage from '@/pages/Asignar/AsignarPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PrincipalPage',
      component: PrincipalPage
    },
    {
      path: '/Docente',
      name: 'Docente',
      component: DocentePage
    },
    {
      path: '/Materia',
      name: 'Materia',
      component: MateriaPage
    },
    {
      path: '/Paralelo',
      name: 'Paralelo',
      component: ParaleloPage
    },

    {
      path: '/Asignar',
      name: 'Asignar',
      component: AsignarPage
    },

    {
      path: '/Rol',
      name: 'Rol',
      component: RolPage
    },
    {
      path: '/Persona',
      name: 'Persona',
      component: PersonaPage
    },
    {
      path: '/Profile',
      name: 'Perfil',
      component: ProfilePage
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/TipoReporte',
      name: 'TipoReporte',
      component: TipoReportePage
    },
    {
      path: '/TipoReporteVer',
      name: 'TipoReporteVer',
      component: TipoReporteVerPage
    }
  ]
})