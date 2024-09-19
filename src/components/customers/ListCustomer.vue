<template>
  <div class="container">
    <h2 class="mt-3">List of Customers</h2>
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="showAddModal">Add New Customer</button>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td class="text-center">
    <button class="btn btn-link p-0" @click="showCustomerDetails(customer)" title="Details">
      <i class="fas fa-eye mx-2" style="color: #17a2b8;"></i>
    </button>
    <button class="btn btn-link p-0" @click="editCustomerModal(customer)" title="Edit">
      <i class="fas fa-edit mx-2" style="color: #ffc107;"></i>
    </button>
    <button class="btn btn-link p-0" @click="deleteCustomer(customer)" title="Delete">
      <i class="fas fa-trash mx-2s" style="color: #dc3545;"></i>
    </button>
  </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Components -->
    <AjouterCustomer v-if="showAddCustomerModal" @close="showAddCustomerModal = false" @add="addCustomer" />
    <DetailCustomer v-if="isDetailModalOpen" :customer="selectedCustomer" @close="isDetailModalOpen = false" />
    <ModifierCustomer 
      v-if="editCustomerData" 
      :customer="editCustomerData" 
      @close="editCustomerData = null" 
      @modify="editCustomer" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailCustomer from './DetailCustomer.vue'; 
import AjouterCustomer from './AjouterCustomer.vue'; 
import ModifierCustomer from './ModifierCustomer.vue'; 

// List of customers
const customers = ref([
  { name: 'John Doe', address: '123 Main St, New York, NY', email: 'johndoe@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', address: '456 Oak St, Los Angeles, CA', email: 'janesmith@example.com', phone: '098-765-4321' },
  { name: 'Alice Martin', address: '789 Pine St, Chicago, IL', email: 'alicemartin@example.com', phone: '234-567-8901' },
  { name: 'David Brown', address: '101 Maple Ave, Houston, TX', email: 'davidbrown@example.com', phone: '345-678-9012' },
  { name: 'Michael Johnson', address: '202 Elm St, Phoenix, AZ', email: 'michaeljohnson@example.com', phone: '456-789-0123' },
  { name: 'Emily Clark', address: '303 Cedar St, Philadelphia, PA', email: 'emilyclark@example.com', phone: '567-890-1234' },
  { name: 'Robert White', address: '404 Birch St, San Antonio, TX', email: 'robertwhite@example.com', phone: '678-901-2345' },
  { name: 'Sarah Green', address: '505 Walnut St, San Diego, CA', email: 'sarahgreen@example.com', phone: '789-012-3456' },
  { name: 'Chris Blue', address: '606 Spruce St, Dallas, TX', email: 'chrisblue@example.com', phone: '890-123-4567' },
  { name: 'Rachel Black', address: '707 Chestnut St, San Jose, CA', email: 'rachelblack@example.com', phone: '901-234-5678' }
]);


// State for modals
const showAddCustomerModal = ref(false); 
const selectedCustomer = ref(null); 
const isDetailModalOpen = ref(false); 
const editCustomerData = ref(null); 

// Function to show customer details
const showCustomerDetails = (customer) => {
  selectedCustomer.value = customer; 
  isDetailModalOpen.value = true; 
};

// Function to show add modal
const showAddModal = () => {
  showAddCustomerModal.value = true;
};

// Function to add a customer
const addCustomer = (newCustomer) => {
  customers.value.push(newCustomer);
  showAddCustomerModal.value = false;
};

// Function to edit a customer
const editCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex(c => c.email === updatedCustomer.email);
  if (index !== -1) {
    customers.value[index] = updatedCustomer;
  }
  editCustomerData.value = null;
};

// Function to delete a customer
const deleteCustomer = (customer) => {
  const confirmation = confirm(`Are you sure you want to delete this customer?`);
  if (confirmation) {
    customers.value = customers.value.filter(c => c !== customer);
    alert(`${customer.name} has been successfully deleted.`);
  }
};

// Function to open the edit modal
const editCustomerModal = (customer) => {
  editCustomerData.value = { ...customer }; 
};
</script>

<style scoped>
.fas {
  margin-right: 10px;
  cursor: pointer;
}

.fas:hover {
  color: #007bff;
}

.btn-info {
  margin-right: 10px;
}
</style>
