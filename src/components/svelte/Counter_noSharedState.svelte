<script lang="ts">
    let count: number = 0
</script>

<div class="mx-auto bg-secondary-svelte px-2 py-4 rounded-lg mb-2 w-full">
    <div class="flex flex-row justify-center">
        <button on:click={() => ++count} class='py-2 px-4 m-1 text-neutral-50 bg-primary-svelte rounded-lg'>Count++</button>
        <button on:click={() => --count} class='py-2 px-4 m-1 text-neutral-50 bg-primary-svelte rounded-lg'>Count--</button>
        <button on:click={() => count = 0} class='py-2 px-4 m-1 text-neutral-50 bg-primary-svelte rounded-lg'>Reset</button>
    </div>
    <h2 class="text-center my-0">Svelte counter: { count }</h2>
</div>
