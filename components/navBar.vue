<template>
<nav class="navbar flex flex-col md:flex-row">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl">Check Driving School</a>
  </div>
  <div class="navbar-center ">
    <ul class="menu menu-horizontal px-1">
      <li v-for="link in links">
        <a :href=link.href class="text-blue-500 font-medium mx-1 normal-case text-base">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
  <div class="navbar-end hidden lg:flex">
    <span class="font-bold text-lg">Contact:</span>
    <a href="tel:+16047254935" class="text-blue-500 font-medium mx-1 normal-case text-base">
      604 725 4935
    </a>
  </div>
</nav>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Program Outline',
    href: '/program',
  },
]
</script>
