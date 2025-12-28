<!-- Main.vue -->

<template>
    <Searchbar v-model="query" />

    <div v-if="query">
        <Transition name="fade">
            <div v-if="loading">
                <LoadingComponent />
            </div>

            <div v-else-if="Results.length">
                <ResultList v-model="Results" @toggleResult="handleToggle" />
            </div>

            <div v-else>
                <NoResults />
            </div>
        </Transition>
    
    </div>


</template>

<script setup lang="ts">

import { ref, watch } from 'vue';

import type { Doc } from '../Data/Sampledata';
import { data } from '../Data/Sampledata'
import Searchbar from './Searchbar.vue';
import LoadingComponent from './LoadingComponent.vue';
import ResultList from './ResultList.vue';
import NoResults from './NoResults.vue';



const query = ref('');
const loading = ref(false)
const Results = ref<Doc[]>([]);
let debounceTimer: number | undefined




const findAllMatches = (array: Doc[], keyword: string): Doc[] => {
    const word = keyword
    return array.filter(doc => doc.title.toLowerCase().includes(word.toLowerCase())
    ) || [];
}


const fetchDocument = async (query: string) => {
    // Simulate an API call delay
    return new Promise<Doc[]>((resolve) => {
        setTimeout(() => {
            resolve((findAllMatches(data.value, query)))
            // console.log(findAllMatches(data.value, query))
        }, 1800)
    })
}

watch(query, (newQuery) => {
    if (!newQuery) {
        Results.value = []
        loading.value = false
        return
    }
    loading.value = true
    if (debounceTimer) clearTimeout(debounceTimer)

    debounceTimer = window.setTimeout(async () => {
        loading.value = true
        const result = await fetchDocument(newQuery)

        if (newQuery === query.value) {
            Results.value = result
        }
        loading.value = false
    }, 600
    )
}
)

const handleToggle = (id: number) => {
    const result = Results.value.find(f => f.id === id);
    if (result) {
        result.expanded = !result.expanded;
    }
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
</style>