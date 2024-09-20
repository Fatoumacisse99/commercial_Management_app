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
            <router-link :to="`/detail-order/${order.trackNumber}`" class="btn btn-link p-0" title="View Details">
  <i class="fas fa-eye mx-2" style="color: #17a2b8;"></i>
</router-link>
            <router-link :to="`/Modifier-Order/${order.trackNumber}`" class="btn btn-link p-0" title="Edit">
  <i class="fas fa-edit mx-2" style="color: #ffc107;"></i>
</router-link>
            <button class="btn btn-link p-0" @click="deleteOrder(order)" title="Delete">
              <i class="fas fa-trash mx-2" style="color: #dc3545;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
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

// Function to delete an order
const deleteOrder = (order) => {
  const confirmation = confirm(`Are you sure you want to delete this order?`);
  if (confirmation) {
    orders.value = orders.value.filter(o => o !== order);
    alert(`Order ${order.trackNumber} has been successfully deleted.`);
  }
};

</script>

<style scoped>
.table th, .table td {
  vertical-align: middle;
  text-align: center;
}
</style>
