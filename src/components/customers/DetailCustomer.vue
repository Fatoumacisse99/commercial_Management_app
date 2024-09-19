<template>
    <div>
      <div class="modal fade show" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="customerDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="customerDetailModalLabel">Customer Details</h5>
              <button type="button" class="close" @click="closeModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="customer-name" class="col-form-label">Customer Name:</label>
                  <input type="text" class="form-control" v-model="customer.name" id="customer-name" disabled />
                </div>
                <div class="form-group">
                  <label for="customer-address" class="col-form-label">Address:</label>
                  <textarea class="form-control" v-model="customer.address" id="customer-address" disabled></textarea>
                </div>
                <div class="form-group">
                  <label for="customer-email" class="col-form-label">Email:</label>
                  <input type="email" class="form-control" v-model="customer.email" id="customer-email" disabled />
                </div>
                <div class="form-group">
                  <label for="customer-phone" class="col-form-label">Phone:</label>
                  <input type="tel" class="form-control" v-model="customer.phone" id="customer-phone" disabled />
                </div>
              </form>
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
  import { defineProps, defineEmits } from 'vue';
  
  // Recevoir les détails du client via les props
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
  </script>
  
  <style scoped>
  .close {
    margin-right: 20px;
  }
  </style>
  