<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header class="h-100">

      <div class="container-fluid h-100">
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-dark navbar-expand-lg">
              <RouterLink class="navbar-brand" to="/"><img width="60" height="40" src="./assets/images/PortfolioLogo2022.svg">
              </RouterLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink class="nav-link"  :to="{ name: 'about' }" active-class="active">About</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link"  :to="{ name: 'skills' }" active-class="active">Skills</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link"  :to="{ name: 'portfolio' }" active-class="active">Portfolio</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link"  :to="{ name: 'contact' }" active-class="active">Contact</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col my-5">
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

