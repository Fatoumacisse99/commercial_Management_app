<template>
    <div>
      <div class="modal fade show mt-5" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductModalLabel">Create New Product</h5>
              <button type="button" class="btn-close offset-8" @click="closeModal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addProduct">
                <div class="row mb-3">
                  <div class="col">
                    <label for="product-name" class="form-label">Product Name</label>
                    <input type="text" class="form-control" v-model="newProduct.name" id="product-name" placeholder="Enter product name" required />
                  </div>
                  <div class="col">
                    <label for="product-category" class="form-label">Category</label>
                    <input type="text" class="form-control" v-model="newProduct.category" id="product-category" placeholder="Enter category" required />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="product-price" class="form-label">Price</label>
                    <input type="number" class="form-control" v-model="newProduct.price" id="product-price" placeholder="0" required />
                  </div>
                  <div class="col">
                    <label for="product-stock" class="form-label">Stock Quantity</label>
                    <input type="number" class="form-control" v-model="newProduct.stock" id="product-stock" placeholder="0" required />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="product-barcode" class="form-label">Barcode</label>
                    <input type="text" class="form-control" v-model="newProduct.barcode" id="product-barcode" placeholder="Enter barcode" required />
                  </div>
                  <div class="col">
                    <label for="product-status" class="form-label">Status</label>
                    <select class="form-select" v-model="newProduct.status" id="product-status">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="product-description" class="form-label">Description</label>
                  <textarea class="form-control" v-model="newProduct.description" id="product-description" rows="3" placeholder="Enter product description"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
              <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const newProduct = ref({
    name: '',
    category: '',
    price: 0,
    stock: 0,
    barcode: '',
    status: 'Active',
    description: ''
  });
  
  const emit = defineEmits();
  
  // Function to close the modal
  const closeModal = () => {
    emit('close');
  };
  
  // Function to add the product
  const addProduct = () => {
    emit('add', { ...newProduct.value });
    closeModal();
  };
  </script>
  
  <style scoped>
  .close {
    margin-right: 20px;
  }
  </style>
  