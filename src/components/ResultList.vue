<!-- ResultList.vue -->

<template>
    <Transition name="fade">
        <div class="result-item">
            <ResultItem 
                v-for="Result in modelValue" 
                :key="Result.id" 
                :result="Result" 
                @toggle="handleToggle" 
            />
        </div>
    </Transition>
</template>

<script setup lang="ts">

import type { Doc } from '../Data/Sampledata';
import ResultItem from './ResultItem.vue';

const props = defineProps<{
    modelValue: Doc[]
}>()

const emit = defineEmits<{
    (e: 'toggleResult', id: number): void
}>()


const handleToggle = (id: number) => {
    emit("toggleResult", id)
}

</script>

<style scoped>
    
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.result-item {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
}
</style>