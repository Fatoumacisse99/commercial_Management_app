<template>
    <div class="container">
        <h5 class="mt-3">View Order</h5>
      <div class="mt-3 d-flex justify-content-end mb-4">
        <router-link to="/orders" class="btn btn-secondary me-3">Return to Orders</router-link>
      </div>
      <form class="row g-3" @submit.prevent="submitOrder">
        <div class="col-md-6">
          <label for="inputDate4" class="form-label">Date</label>
          <input type="date" class="form-control" v-model="order.date" disabled/>
        </div>
        <div class="col-md-6">
          <label for="inputName4" class="form-label">Customer Name</label>
          <input type="text" class="form-control" v-model="order.customer" disabled />
        </div>
        <div class="col-md-6">
          <label for="inputAddress4" class="form-label">Delivery Address</label>
          <input type="text" class="form-control" v-model="order.deliveryAddress" disabled />
        </div>
        <div class="col-md-6">
          <label for="inputNumber4" class="form-label">Track Number</label>
          <input type="text" class="form-control" v-model="order.trackNumber" disabled/>
        </div>
        <div class="col-md-6 offset-6">
          <label for="inputOrder4" class="form-label">Order Status</label>
          <select class="form-select" v-model="order.status" disabled>
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <select class="form-select" v-model="detail.product" disabled>
                  <option value="ProductA">Product A</option>
                  <option value="ProductB">Product B</option>
                  <option value="ProductC">Product C</option>
                </select>
              </td>
              <td>
                <input type="number" min="1" class="form-control" v-model="detail.quantity" placeholder="Quantity" disabled />
              </td>
              <td>
                <input type="number" min="0" class="form-control" v-model="detail.price" placeholder="Price" disabled />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Replace with actual order data retrieval logic
  const order = ref({
    date: '2024-07-25',
    customer: 'John Doe',
    deliveryAddress: '123 Main St, New York, NY',
    trackNumber: 'TN001',
    status: 'Shipped',
  });
  
  const orderDetails = ref([
    { product: 'ProductA', quantity: 2, price: 20 },
    { product: 'ProductB', quantity: 1, price: 30 },
  ]);
  
  // Function to submit the order
  const submitOrder = () => {
    // Logic to handle order submission
    alert('Order submitted!');
  };
  
  // Function to remove order detail
  const removeDetail = (index) => {
    orderDetails.value.splice(index, 1);
  };
  
  // Function to add new order detail
  const addDetail = () => {
    orderDetails.value.push({ product: '', quantity: 1, price: 0 });
  };
  </script>
  
  <style scoped>

  </style>
  