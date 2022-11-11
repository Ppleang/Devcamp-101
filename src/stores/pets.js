// usePetsStores => useProfileStores
import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"
export const usePetsStore = defineStore('pets',{
    state: () => ({
        pets: [1,2,3]
    }),
    getters: {
        getPets: (state) => {return state.pets},
    },
    actions: {
        async fetchData() {
            const queryData = await getDocs(collection(db,"pets"));
            this.pets = queryData.docs.map((doc) => doc.data());
            // queryData.forEach((doc) => {
            // console.log(doc.data());
            // })
        }
    },
}); 
