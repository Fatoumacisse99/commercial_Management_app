import { createRouter, createWebHistory } from 'vue-router';
import ListCustomer from '../components/customers/ListCustomer.vue';
import AjouterCustomer from '../components/customers/AjouterCustomer.vue';
import ModifieCustomer from '../components/customers/ModifierCustomer.vue';
import DetailCustomer from '../components/customers/DetailCustomer.vue';
import ListProduct from '../components/products/ListProduct.vue';
import ListOrder from '../components/orders/ListOrder.vue';
import AjouterOrder from '../components/orders/AjouterOrder.vue';



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
  {
    path: '/list-product',
    name: 'ListProduct',
    component: ListProduct,
  },
  {
    path: '/orders',
    name: 'ListOrder',
    component: ListOrder,
  },
  {
    path: '/add-order',
    name: 'AjouterOrder',
    component: AjouterOrder,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
