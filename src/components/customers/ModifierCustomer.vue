<template>
    <div>
      <div class="modal fade show mt-5" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="modifierCustomerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modifierCustomerModalLabel">Edit customer</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="modifyCustomer">
                <div class="form-group">
                  <label for="customer-name" col-form-label mb-2>Customer Name:</label>
                  <input type="text" class="form-control" v-model="customer.name" id="customer-name" required />
                </div>
                <div class="form-group">
                  <label for="customer-address">Adress:</label>
                  <textarea class="form-control mt-2" v-model="customer.address" id="customer-address" required></textarea>
                </div>
                <div class="form-group">
                  <label for="customer-email">Email:</label>
                  <input type="email" class="form-control mt-2" v-model="customer.email" id="customer-email" required />
                </div>
                <div class="form-group d-flex flex-column">
                  <label for="customer-phone">Phone:</label>
                  <input type="tel" class="form-control mt-2" v-model="customer.phone" id="customer-phone" required />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
              <button type="submit" class="btn btn-primary" @click.prevent="modifyCustomer">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    customer: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits();
  
  const closeModal = () => {
    emit('close');
  };
  
  const modifyCustomer = () => {
    emit('modify', { ...props.customer }); // Émettre l'événement avec les données modifiées
    closeModal();
  };
  </script>
  