import { createRouter, createWebHistory } from 'vue-router';
import ListCustomer from '../components/customers/ListCustomer.vue';
import AjouterCustomer from '../components/customers/AjouterCustomer.vue';
import ModifieCustomer from '../components/customers/ModifierCustomer.vue';
import DetailCustomer from '../components/customers/DetailCustomer.vue';

const routes = [
  {
    path: '/',
    name: 'ListCustomer',
    component: ListCustomer,
  },
  {
    path: '/ajout-customer',
    name: 'AjouterCustomer',
    component: AjouterCustomer,
  },
  {
    path: '/modifie-customer/:id',
    name: 'ModifieCustomer',
    component: ModifieCustomer,
  },
  {
    path: '/detail-customer/:id',
    name: 'DetailCustomer',
    component: DetailCustomer,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
