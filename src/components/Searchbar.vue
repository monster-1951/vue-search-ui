<!-- Searchbar.vue -->

<template>
    <div class="search-wrapper">
        <input placeholder="Search for your file" :value="modelValue" @input="onInput" class="search-input" />
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', (target.value));
}

</script>

<style scoped>
.search-wrapper {
    border: 2px solid red;
    border-radius: 25px;
    padding: 4px;
    width: 85%;
    /* width: 100vh;
    max-width: 500px; */
    margin: 20px auto;
}

.search-input {
    width: 100%;
    background-color: white;
    color: black;
    border: none;
    outline: none;
    font-size: large;
    border-radius: 25px;
    padding: 12px 20px;
    box-sizing: border-box;
}

@media (min-width: 1024px) {
  .search-wrapper {
    max-width: 700px;
  }

  .search-input {
    font-size: 1.75rem;
    padding: 16px 28px;
  }
}

</style>