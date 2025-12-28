<!-- ResultList.vue -->

<template>
    <Transition name="fade">
        <div class="result-item">
            <!-- Iterating over the modelValue which is an array of search results -->
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

// modelValue is the array of searchresults , passed to this component by Main.vue
const props = defineProps<{
    modelValue: Doc[]
}>()

// This is an emit definition
const emit = defineEmits<{
    (e: 'toggleResult', id: number): void
}>()

// In ResultItem , when it is clicked , "toggle" emit gets triggered which now makes this component to trigger "toggleResult" emit
// The basic idea is , ResultItem informs it's own id if clicked to ResultList (Parent of ResultItem) and now ResultItem is informing that ResultItem is clicked with that particulat id to Main.vue (Parent of ResultList)
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