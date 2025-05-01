<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
  messages: {
    type: Array<string>,
    required: true,
  },
})
const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];
const greeting = ref(randomMessage());

function setGreeting () {
  greeting.value = randomMessage()
}

</script>

<template>
  <div>
      <h3>{{ greeting }}! Thank you for visiting!</h3>
      <button @click="() => setGreeting()">
        New Greeting
      </button>
    </div>
</template>

