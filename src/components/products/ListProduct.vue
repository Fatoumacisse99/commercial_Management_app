<!-- ListProduct.vue -->
<template>
  <div class="container">
    <h2 class="mt-3">List of Products</h2>
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="showAddProductModal">Add New Product</button>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Product Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Barcode</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td class="text-center">
            <button class="btn btn-link p-0" @click="showProductDetails(product)" title="Details">
              <i class="fas fa-eye mx-2" style="color: #17a2b8;"></i>
            </button>
            <button class="btn btn-link p-0" @click="editProductModal(product)" title="Edit">
              <i class="fas fa-edit mx-2" style="color: #ffc107;"></i>
            </button>
            <button class="btn btn-link p-0" @click="deleteProduct(product)" title="Delete">
              <i class="fas fa-trash mx-2" style="color: #dc3545;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Components -->
    <AjouterProduct v-if="isAddProductModalOpen" @close="isAddProductModalOpen = false" @add="addProduct" />
    <DetailProduct v-if="isDetailModalOpen" :product="selectedProduct" @close="isDetailModalOpen = false" />
    <ModifierProduct 
      v-if="editProductData" 
      :product="editProductData" 
      @close="editProductData = null" 
      @modify="editProduct" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailProduct from './DetailProduct.vue'; 
import AjouterProduct from './AjouterProduct.vue'; 
import ModifierProduct from './ModifierProduct.vue'; 

// List of products
const products = ref([
  { name: 'Product 002', description: 'Affordable product.', price: 50, stock: 100, category: 'Home Appliances', barcode: '987654321098', status: 'Inactive' },
  { name: 'Product 003', description: 'Durable product.', price: 75, stock: 75, category: 'Sports', barcode: '234567890123', status: 'Active' }
]);

// State for modals
const isAddProductModalOpen = ref(false);  // Renommé pour éviter le conflit
const selectedProduct = ref(null); 
const isDetailModalOpen = ref(false); 
const editProductData = ref(null); 

// Function to show product details
const showProductDetails = (product) => {
  selectedProduct.value = product; 
  isDetailModalOpen.value = true; 
};

// Function to show add modal
const showAddProductModal = () => {
  isAddProductModalOpen.value = true;
};

// Function to add a product
const addProduct = (newProduct) => {
  products.value.push(newProduct);
  isAddProductModalOpen.value = false;
};

// Function to edit a product
const editProduct = (updatedProduct) => {
  const index = products.value.findIndex(p => p.barcode === updatedProduct.barcode);
  if (index !== -1) {
    products.value[index] = updatedProduct;
  }
  editProductData.value = null;
};

// Function to delete a product
const deleteProduct = (product) => {
  const confirmation = confirm(`Are you sure you want to delete this product?`);
  if (confirmation) {
    products.value = products.value.filter(p => p !== product);
    alert(`${product.name} has been successfully deleted.`);
  }
};

// Function to open the edit modal
const editProductModal = (product) => {
  editProductData.value = { ...product }; 
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
