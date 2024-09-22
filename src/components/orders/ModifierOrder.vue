<template>
    <div class="container">
        <h2 class="mt-3">Edit Order</h2>
      <div class="mt-3 d-flex justify-content-end mb-4">
        <router-link to="/orders" class="btn btn-secondary me-3">Return to Orders</router-link>
        <button  @click="submitOrder" class="btn btn-primary">Submit</button>
      </div>
      <form class="row g-3" @submit.prevent="submitOrder">
        <div class="col-md-6">
          <label for="inputDate4" class="form-label">Date</label>
          <input type="date" class="form-control" v-model="order.date" required />
        </div>
        <div class="col-md-6">
          <label for="inputName4" class="form-label">Customer Name</label>
          <input type="text" class="form-control" v-model="order.customer" required />
        </div>
        <div class="col-md-6">
          <label for="inputAddress4" class="form-label">Delivery Address</label>
          <input type="text" class="form-control" v-model="order.deliveryAddress" required />
        </div>
        <div class="col-md-6">
          <label for="inputNumber4" class="form-label">Track Number</label>
          <input type="text" class="form-control" v-model="order.trackNumber" disabled />
        </div>
        <div class="col-md-6 offset-6">
          <label for="inputOrder4" class="form-label">Order Status</label>
          <select class="form-select" v-model="order.status">
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </form>
      
      <div class="row mt-5">
        <h3>Order Details</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <select class="form-select" v-model="detail.product">
                  <option value="ProductA">Product A</option>
                  <option value="ProductB">Product B</option>
                  <option value="ProductC">Product C</option>
                </select>
              </td>
              <td>
                <input type="number" min="1" class="form-control" v-model="detail.quantity" placeholder="Quantity" required />
              </td>
              <td>
                <input type="number" min="0" class="form-control" v-model="detail.price" placeholder="Price" required />
              </td>
              <td>
                <button class="btn btn-danger" @click="removeDetail(index)">Remove</button>
              </td>
            </tr>
            
            <tr>
              <td colspan="4">
                <button class="btn btn-success mt-3" @click="addDetail">Edit Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  // Données simulées pour les commandes
  const orders = [
    { date: '2024-07-25', customer: 'John Doe', deliveryAddress: '123 Main St', trackNumber: 'TN001', status: 'Shipped', details: [{ product: 'ProductA', quantity: 1, price: 100 }] },
    { date: '2024-07-26', customer: 'Jane Smith', deliveryAddress: '456 Oak St', trackNumber: 'TN002', status: 'Delivered', details: [{ product: 'ProductB', quantity: 2, price: 200 }] }
  ];
  
  // Initialisation des variables Vue Router
  const router = useRouter();
  const route = useRoute();
  
  // Objet pour stocker les informations de la commande
  const order = ref({
    date: '',
    customer: '',
    deliveryAddress: '',
    trackNumber: '',
    status: '',
  });
  
  // Liste des détails de la commande
  const orderDetails = ref([]);
  
  // Chargement des données de la commande existante en utilisant le trackNumber
  onMounted(() => {
    const trackNumber = route.params.trackNumber; // Récupérer le numéro de suivi depuis la route
    const existingOrder = orders.find(o => o.trackNumber === trackNumber);  
    if (existingOrder) {
      order.value = { ...existingOrder };
      orderDetails.value = [...existingOrder.details];
    }
  });
  
  // Fonction pour ajouter un nouveau détail de commande
  const addDetail = () => {
    orderDetails.value.push({ product: '', quantity: 1, price: 0 });
  };
// Fonction pour supprimer un détail
const removeDetail = (index) => {
  if (orderDetails.value.length === 1) {
    alert("You can't delete the last remanaining detail.");
  } else {
    orderDetails.value.splice(index, 1);
  }
};
  </script>
  
  <style scoped>
  .container {
    padding-top: 30px;
  }
  </style>
ss