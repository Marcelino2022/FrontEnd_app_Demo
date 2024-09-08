<script setup lang="ts"></script>
<template>
    <div class="custom-container">
        <div class="flex flex-col sm:flex-row gap-4">
            <div v-for="item in items.data ">
                <div class="text-center">
                    <span class=" text-4xl">
                        <span :class="item.icon"></span>
                    </span>
                    <p class="font-semibold">{{ item.title }}</p>
                    <div class="text-xs text-gray-400">
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent,PropType } from 'vue';
    import { IItemOverview } from '../../../types/marketplace';

    export default defineComponent({
        name: "OverviwComponent",
        props:{
            items: {
                required: true,
                type: Object as PropType<IItemOverview>
            }
        }
    })
</script>