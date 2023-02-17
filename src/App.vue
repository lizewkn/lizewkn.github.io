<script setup>


import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>

      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-lg">
              <RouterLink class="navbar-brand" to="/"><img width="60" height="40" src="./assets/PortfolioLogo2022.svg">
              </RouterLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/" active-class="_active">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/about">About</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/skills">Skills</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/portfolio">Portfolio</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="default">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </div>
      </div>

</header>
</template>

