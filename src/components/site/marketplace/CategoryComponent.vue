<template>
    <div :class="categoryData.class">
            <div class="p-2 hover:text-green-600 hover:opacity-75 duration-300" v-for="data in categoryData.data">
                <router-link to="#" class="flex flex-col justify-center items-center ">
                    <img class="rounded-full w-28 h-28" :src="data.image" alt="">
                    <p class="font-semibold sm:text-base">{{ data.designation }}</p>
                </router-link>
            </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent,PropType} from 'vue'
    import { ICategory } from '../../../types/marketplace';

    export default defineComponent({
        name: "CaretegoryComponent",
        props:{
            categoryData: {
                required: true,
                type: Object as PropType<ICategory>
            }
        }
    })

</script>