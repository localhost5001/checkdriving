<template>
<nav class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href="/" class="text-blue-500 font-medium mx-1 normal-case text-base">
            Home
          </a>
        </li>
        <li>
          <a href="/about" class="text-blue-500 font-medium mx-1 normal-case text-base">
            About
          </a>
        </li>
        <li>
          <a href="/contact" class="text-blue-500 font-medium mx-1 normal-case text-base">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Check Driving School</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a href="/" class="text-blue-500 font-medium mx-1 normal-case text-base">
          Home
        </a>
      </li>
      <li>
        <a href="/about" class="text-blue-500 font-medium mx-1 normal-case text-base">
          About
        </a>
      </li>
      <li>
        <a href="/contact" class="text-blue-500 font-medium mx-1 normal-case text-base">
          Contact
        </a>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
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
    name: 'Contact',
    href: '/contact',
  },
]
</script>
