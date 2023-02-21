<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>

<template>
    <div className="mx-auto bg-secondary-vue px-2 py-4 rounded-lg mb-2 w-full">
        <div class="flex flex-row justify-center">
            <button @click="++state.count" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Count++</button>
            <button @click="--state.count" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Count--</button>
            <button @click="state.count = 0" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Reset</button>
        </div>
        <h2 class="text-center my-0">Vue counter: {{ state.count }}</h2>
    </div>
</template>
