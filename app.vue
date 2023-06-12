<template>
<v-app>
  <v-main>
    <v-container class="h-screen d-flex align-center" >
      <v-row>
        <v-col>
          <personal />
        </v-col>
        <v-col>
          <pricing />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script setup lang="ts">
import pricing from './components/pricing.vue'
import personal from './components/personal.vue'
</script>
