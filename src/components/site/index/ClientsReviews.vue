<template>
    <div class="w-full flex justify-center mt-6 mb-3"><h1>What our customers say and how they rate us</h1></div>
    <div class="custom-grid-cols-2">
        <div v-for="data in clientData.clients">
            <div class="flex-1 darck-card p-4 gap-4 rounded-md">
                <div class="w-full flex justify-center mb-3"> <img class="" :src="data.image" alt=""></div>
                <div class="w-full flex justify-center mb-3">
                    <div class="w-md font-semibold border-2 border-green-700 px-4 py-2 rounded-md">{{ data.title }}</div>
                </div>
                <p :class="clientData.textColor">{{ data.content }}</p>
                <div class="flex w-full justify-between mt-4">
                    <div class="flex items-center text-2xl gap-2">
                        <span class="iconify mdi--rate-review"></span> 
                        {{  data.review }}
                    </div>
                    <button v-if="clientData.btncontent" type="button" class="btn-primary">{{clientData.btncontent}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { IClientData } from '../../../types/cards';

    export default defineComponent({
        name: "Clients reviews",
        props: {
            clientData: {
                required: true,
                type: Object as PropType<IClientData>
            }
        }
    })  
</script>