<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="container collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto me-3">
        <li
          class="nav-item active"
          :class="{ active: $route.name === 'ListCustomer' }"
        >
          <router-link
            class="nav-link"
            to="/"
            :class="{ 'text-primary': $route.name === 'ListCustomer' }"
            ><i class="fa-solid fa-users mx-2"></i>Customers</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name === 'ListProduct' }">
          <router-link
            class="nav-link"
            to="/list-product"
            :class="{ 'text-primary': $route.name === 'ListProduct' }"
          >
            <i class="fa-solid fa-box-open mx-2"></i> Products
          </router-link>
        </li>
        <li
          class="nav-item"
          :class="{
            active:
              $route.name === 'ListOrder' ||
              $route.name === 'AjouterOrder' ||
              $route.name === 'ModifierOrder'||
              $route.name === 'DetailOrder',
          }"
        >
          <router-link
            class="nav-link"
            to="/orders"
            :class="{
              'text-primary':
                $route.name === 'ListOrder' || $route.name === 'AjouterOrder'||
                $route.name === 'DetailOrder'|| $route.name === 'ModifierOrder',
            }"
            ><i class="fa-solid fa-cart-shopping mx-2"></i> Orders
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>


<script setup></script>
<style scoped>
/* a:hover {
  color: rgb(42, 85, 240);
} */
</style>
