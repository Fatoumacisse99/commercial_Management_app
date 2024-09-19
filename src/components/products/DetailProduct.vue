<template>
    <div>
      <div class="modal fade show" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="detailProductModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="detailProductModalLabel">View Product</h5>
              <button type="button" class="close offset-8" @click="closeModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row mb-3">
                <div class="col">
                  <label for="product-name" class="form-label">Product Name</label>
                  <input type="text" class="form-control" v-model="product.name" id="product-name" readonly />
                </div>
                <div class="col">
                  <label for="product-category" class="form-label">Category</label>
                  <input type="text" class="form-control" v-model="product.category" id="product-category" readonly />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="product-price" class="form-label">Price</label>
                  <input type="number" class="form-control" v-model="product.price" id="product-price" readonly />
                </div>
                <div class="col">
                  <label for="product-stock" class="form-label">Stock Quantity</label>
                  <input type="number" class="form-control" v-model="product.stock" id="product-stock" readonly />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="product-barcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" v-model="product.barcode" id="product-barcode" readonly />
                </div>
                <div class="col">
                  <label for="product-status" class="form-label">Status</label>
                  <input type="text" class="form-control" v-model="product.status" id="product-status" readonly />
                </div>
              </div>
              <div class="mb-3">
                <label for="product-description" class="form-label">Description</label>
                <textarea class="form-control" v-model="product.description" id="product-description" rows="3" readonly></textarea>
              </div>
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
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits();
  
  // Function to close the modal
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .close {
    margin-right: 20px;
  }
  </style>
  