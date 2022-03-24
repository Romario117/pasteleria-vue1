import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PastelesView from '../views/PastelesView.vue'
import GalletasView from '../views/GalletasView.vue'
import EspecialidadesView from '../views/EspecialidadesView.vue'
import RegistroView from '../views/RegistroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: HomeView
  },
  {
    path:'/pasteles',
    name: 'pasteles',
    component: PastelesView
  },
  {
    path:'/galletas',
    name: 'galletas',
    component: GalletasView
  },
  {
    path:'/especialidades',
    name: 'especialidad',
    component: EspecialidadesView
  },
  {
    path:'/registro',
    name: 'registro',
    component: RegistroView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
