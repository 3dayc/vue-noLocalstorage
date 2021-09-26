<template>
  <v-container class="grey lighten-4" fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <Home/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Home from "./components/Home.vue"

export default {
  components: {
    Home
  }
}
</script>
