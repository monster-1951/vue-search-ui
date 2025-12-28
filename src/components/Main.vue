<!-- Main.vue -->

<template>

    <!-- Passing the query as prop to Searchbar -->
    <Searchbar v-model="query" /> 

    <!-- If there is something in search bar -->
    <div v-if="query">
        <Transition name="fade">
            <!-- If loading state is true -->
            <div v-if="loading">
                <LoadingComponent />
            </div>
            <!-- If time delay has passed and Result is fetched -->
            <div v-else-if="Results.length">
                <ResultList v-model="Results" @toggleResult="handleToggle" />
            </div>
            <!-- If user's query didn't match any item  -->
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


// These values get watched
const query = ref('');
const loading = ref(false)
const Results = ref<Doc[]>([]);

// Variable timer
let debounceTimer: number | undefined


// Function to find all the items in the data which match the entered keyword
const findAllMatches = (array: Doc[], keyword: string): Doc[] => {
    const word = keyword
    return array.filter(doc => doc.title.toLowerCase().includes(word.toLowerCase())
    ) || [];
}

// Simulation of API Call
const fetchDocument = async (query: string) => {
    // Simulate an API call delay
    // The matches will be found by the "findAllMatches" function but after a delay of 1.8 Seconds
    return new Promise<Doc[]>((resolve) => {
        setTimeout(() => {
            resolve((findAllMatches(data.value, query)))
        }, 1800)
    })
}

// The core debounce logic . Whenever user is typing a query , the query variable is changing and the following code gets executed
watch(query, (newQuery) => {

    if (!newQuery) {
        Results.value = []
        loading.value = false
        return
    }

    loading.value = true // Loading state is set to true so that the loader can be rendered in UI

    if (debounceTimer) clearTimeout(debounceTimer) // This line resets the timer to 0 if user has resumed typing within the gap of 600ms


    // Here we set the timer to 600ms and wait untill it becomes 0
    debounceTimer = window.setTimeout(async () => {
        // If user hasn't typed anyting till 600ms , we hit the api with the existing input
        // After 600ms are passed , the following code executes
        loading.value = true // Loading state is set to true so that the loader can be rendered in UI
        const result = await fetchDocument(newQuery) // API Call with latest user input 

        if (newQuery === query.value) {
            // This conditional check ensures proper result display . 
            // Absence of this condition will lead to race condition . The Result.value could be assigned with the api call result which was initiated few moments ago but was dismissed due to change in query
            Results.value = result
        }
        loading.value = false // Loading state is set to false so that the loader can be hidden in UI and results can be displayed
    }, 600
    )
}
)

// When ResultList emits the handleToggle , this function gets executed . ResultList emitting handleToggle implies a resultItem was clicked and Main.vue recieved it's id
const handleToggle = (id: number) => {
    const result = Results.value.find(f => f.id === id); // find the element based on its id
    if (result) {
        result.expanded = !result.expanded; // Toggle it's state . If opened , close it and if closed , open it
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