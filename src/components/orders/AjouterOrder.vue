<template>
  <div class="container">
    <h5 class="mt-3">Create New order</h5>
    <div class="mt-3 d-flex justify-content-end mb-4">
      <router-link to="/orders" class="btn btn-secondary me-3">Return to Orders</router-link>
      <a to="/add-order" class="btn btn-primary">Submit</a>
    </div>
    
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputDate4" class="form-label">Date</label>
        <input type="Date" class="form-control" id="inputDate4" required />
      </div>
      <div class="col-md-6">
        <label for="inputName4" class="form-label">Customer Name</label>
        <input type="text" class="form-control" id="inputName4" required />
      </div>
      <div class="col-md-6">
        <label for="inputAddress4" class="form-label">Delivery Address</label>
        <input type="text" class="form-control" id="inputAddress4" required />
      </div>
      <div class="col-md-6">
        <label for="inputNumber4" class="form-label">Track Number</label>
        <input type="text" class="form-control" id="inputNumber4" required />
      </div>
      <div class="col-md-6 offset-6">
        <label for="inputOrder4" class="form-label">Order Status</label>
        <select class="form-select">
          <option value="ProductA">Processing</option>
          <option value="ProductB">Shipped</option>
          <option value="ProductC">Delivered</option>
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
              <select class="form-select">
                <option value="ProductA">Product A</option>
                <option value="ProductB">Product B</option>
                <option value="ProductC">Product C</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="1"
                class="form-control"
                placeholder="Quantity"
                required
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Price"
                required
              />
            </td>
            <td>
              <button class="btn btn-danger" @click="removeDetail(index)">
                Remove
              </button>
            </td>
          </tr>
          
          <tr>
            <td colspan="4">
              <button class="btn btn-success mt-3" @click="addDetail">
                Add New Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Liste des détails de commande
const orderDetails = ref([
  { product: 'ProductA', quantity: 1, price: 0 },
]);

// Fonction pour ajouter un nouveau détail
const addDetail = () => {
  orderDetails.value.push({ product: 'ProductA', quantity: 1, price: 0 });
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
</style>
