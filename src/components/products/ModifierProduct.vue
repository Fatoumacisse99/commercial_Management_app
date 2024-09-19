<template>
    <div class="modal fade show mt-5" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close offset-8" @click="closeModal" aria-label="Close">
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editProduct">
              <div class="row mb-3">
                <div class="col">
                  <label for="product-name" class="form-label">Product Name</label>
                  <input type="text" class="form-control" v-model="product.name" id="product-name" disabled />
                </div>
                <div class="col">
                  <label for="product-category" class="form-label">Category</label>
                  <input type="text" class="form-control" v-model="product.category" id="product-category" required />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="product-price" class="form-label">Price</label>
                  <input type="number" class="form-control" v-model="product.price" id="product-price" required />
                </div>
                <div class="col">
                  <label for="product-stock" class="form-label">Stock Quantity</label>
                  <input type="number" class="form-control" v-model="product.stock" id="product-stock" required />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="product-barcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" v-model="product.barcode" id="product-barcode" required />
                </div>
                <div class="col">
                  <label for="product-status" class="form-label">Status</label>
                  <select class="form-select" v-model="product.status" id="product-status">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="product-description" class="form-label">Description</label>
                <textarea class="form-control" v-model="product.description" id="product-description" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="submit" class="btn btn-primary" @click.prevent="editProduct">Confirm</button>
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
  
  // Function to edit the product
  const editProduct = () => {
    emit('modify', { ...product });
    closeModal();
  };
  </script>
  
  <style scoped>
  .close {
    margin-right: 20px;
  }
  </style>
  