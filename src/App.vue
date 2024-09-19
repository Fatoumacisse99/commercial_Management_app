<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="container collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto  me-3">
        <li class="nav-item active">
          <router-link class="nav-link" to='/' ><i class="fa-solid fa-users icon-spacing"></i>Customers</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/products"> <i class="fa-solid fa-box-open"></i> Products </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/orders"> <i class="fa-solid fa-cart-shopping"></i> Orders </router-link>
        </li> -->
      </ul>
    </div>
  </nav>
<router-view />
</template>


<script setup></script>
