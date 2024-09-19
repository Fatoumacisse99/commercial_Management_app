<!-- ListOrder.vue -->
<template>
  <div class="container">
    <h2 class="mt-3">List of Orders</h2>
    <div class="d-flex justify-content-end mb-4">
      <router-link to="/add-order" class="btn btn-primary">Add New Order</router-link>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Delivery Address</th>
          <th scope="col">Track Number</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.deliveryAddress }}</td>
          <td>{{ order.trackNumber }}</td>
          <td>{{ order.status }}</td>
          <td class="text-center">
            <button class="btn btn-link p-0" @click="showOrderDetails(order)" title="Details">
              <i class="fas fa-eye mx-2" style="color: #17a2b8;"></i>
            </button>
            <button class="btn btn-link p-0" @click="editOrderModal(order)" title="Edit">
              <i class="fas fa-edit mx-2" style="color: #ffc107;"></i>
            </button>
            <button class="btn btn-link p-0" @click="deleteOrder(order)" title="Delete">
              <i class="fas fa-trash mx-2" style="color: #dc3545;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for order details (or you can use another method like router navigation) -->
    <div v-if="selectedOrder" class="modal" tabindex="-1" style="display:block; background:rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Details</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p><strong>Date:</strong> {{ selectedOrder.date }}</p>
            <p><strong>Customer:</strong> {{ selectedOrder.customer }}</p>
            <p><strong>Delivery Address:</strong> {{ selectedOrder.deliveryAddress }}</p>
            <p><strong>Track Number:</strong> {{ selectedOrder.trackNumber }}</p>
            <p><strong>Status:</strong> {{ selectedOrder.status }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// List of orders
const orders = ref([
  { date: '25/07/2024', customer: 'John Doe', deliveryAddress: '123 Main St, New York, NY', trackNumber: 'TN001', status: 'Shipped' },
  { date: '26/07/2024', customer: 'Jane Smith', deliveryAddress: '456 Oak St, Los Angeles, CA', trackNumber: 'TN002', status: 'Delivered' },
  { date: '27/07/2024', customer: 'Alice Martin', deliveryAddress: '789 Pine St, Chicago, IL', trackNumber: 'TN003', status: 'Processing' },
]);

// Selected order for details or editing
const selectedOrder = ref(null);

// Function to show order details
const showOrderDetails = (order) => {
  selectedOrder.value = order;
};

// // Function to edit an order 
// const editOrderModal = (order) => {
//   console.log("Editing order:", order);
//   selectedOrder.value = order;
// };

// Function to delete an order
const deleteOrder = (order) => {
  const confirmation = confirm(`Are you sure you want to delete this order?`);
  if (confirmation) {
    orders.value = orders.value.filter(o => o !== order);
    alert(`Order ${order.trackNumber} has been successfully deleted.`);
  }
};

// Close modal
const closeModal = () => {
  selectedOrder.value = null;
};
</script>

<style scoped>
.table th, .table td {
  vertical-align: middle;
  text-align: center;
}
</style>
