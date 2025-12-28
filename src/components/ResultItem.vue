<!-- ResultItem.vue -->

<template>

    <div class="result-item" @click="Toggle">

        <div style="padding: 20px;">
            <h3>
                {{ result.title }}
            </h3>
            <p style="font-weight: 500; ">
                {{ result.snippet }}
            </p>
            <Transition name="fade">
                <div v-if="result.expanded">
                    <p>Date Modified: {{ result.date_modified }} </p>
                    <p> File Size : {{ result.size }} </p>
                    <p> File Type : {{ result.type }} </p>
                </div>
            </Transition>
        </div>


    </div>

</template>

<script setup lang="ts">
import type { Doc } from '../Data/Sampledata';

const props = defineProps<{
    result: Doc
}>()

const emit = defineEmits<{
    (e: 'toggle', id: number): void
}>()

const Toggle = () => {
    emit('toggle', props.result.id)
}

</script>

<style scoped>
.result-item {
    border: 2px solid black;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 25px;
    width: 85%;
    margin: auto;
}

@media (min-width: 1024px) {
    .result-item {
        max-width: 700px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
