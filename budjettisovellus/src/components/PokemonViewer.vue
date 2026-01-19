<template>
  <div class="pokemon-viewer">
    <h2>Pokémon API Demo</h2>
    <button @click="fetchPokemon">Hae Pokémon</button>

    <div v-if="pokemon">
      <h3>{{ pokemon.name }}</h3>
      <!-- Näytetään kuva -->
      <img :src="pokemon.image" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pokemon = ref(null);

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();

  // Poimitaan nimi ja virallinen kuva
  pokemon.value = {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default
  };
}
</script>

<style scoped>
.pokemon-viewer {
  margin-top: 20px;
  text-align: center;
}
img {
  width: 200px;
  height: auto;
}
</style>
