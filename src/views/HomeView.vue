<template>
    <div>
        <div v-for="pet in pets" :key="pet.id">
            <div>
                name: {{pet.name}}
            </div>
            <div>
                type: {{pet.type}}
            </div>
            <div>
                age: {{pet.age}}
            </div>
            <div v-if="pet.isVaccinated">
                Hello
            </div>
        </div>
    </div>
</template>

<script>
import { usePetsStore } from '../stores/pets';
export default {
    name: "HomeView",
    counted() {
        console.log(usePetsStore().getPets);
    },
    data() {
        return {
            pets: [],
        };
    },
    async mounted() {
        await usePetsStore().fetchData();
        this.pets = usePetsStore().getPets;
        // console.log(this.pets);
    },
};
</script>

<style>

</style>