<template>
    <div>
      <div class="modal fade show" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="addCustomerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addCustomerModalLabel">Create New Customer</h5>
              <button type="button" class="close" data-dismiss="modal" @click="closeModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addCustomer">
                <div class="form-group">
                  <label for="customer-name" class="col-form-label">Customer Name:</label>
                  <input type="text" class="form-control" v-model="newCustomer.name" id="customer-name" required />
                </div>
                <div class="form-group">
                  <label for="customer-address" class="col-form-label">Address:</label>
                  <textarea class="form-control" v-model="newCustomer.address" id="customer-address" required></textarea>
                </div>
                <div class="form-group">
                  <label for="customer-email" class="col-form-label">Email:</label>
                  <input type="email" class="form-control" v-model="newCustomer.email" id="customer-email" required />
                </div>
                <div class="form-group">
                  <label for="customer-phone" class="col-form-label">Phone:</label>
                  <input type="tel" class="form-control" v-model="newCustomer.phone" id="customer-phone" required />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
              <button type="submit" class="btn btn-primary" @click.prevent="addCustomer">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const newCustomer = ref({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  
  const emit = defineEmits();
  
  const closeModal = () => {
    emit('close');
  };
  
  const addCustomer = () => {
    emit('add', { ...newCustomer.value });
    closeModal();
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici si nécessaire */
  </style>
  