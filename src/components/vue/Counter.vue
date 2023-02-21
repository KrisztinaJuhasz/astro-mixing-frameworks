<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import type { Ref } from 'vue'
import { countStore, countStoreInitialValue } from '../../store/count'

const count: Readonly<Ref<number>> = useStore(countStore)
</script>

<template>
    <div className="mx-auto bg-secondary-vue px-2 py-4 rounded-lg mb-2 w-full">
        <div class="flex flex-row justify-center">
            <button @click="countStore.set(count + 1)" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Count++</button>
            <button @click="countStore.set(count - 1)" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Count--</button>
            <button @click="countStore.set(countStoreInitialValue)" class='py-2 px-4 m-1 text-neutral-50 bg-primary-vue rounded-lg'>Reset</button>
        </div>
        <h2 class="text-center my-0">Vue counter: {{ count }}</h2>
    </div>
</template>
