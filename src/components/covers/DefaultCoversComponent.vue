
<template>
    <main class=".default-cover pt-10 sm:pt-10">
        <div v-if="coverData.page == 'Marketplace'">
            <div class="centralizer-flex-row">
                <img :src="coverData?.pathImage" :alt="coverData?.title">
            </div>
            <div class="w-full flex justify-center">
                <div class="flex flex-col text-white">
                    <h1 class="font-bold text-3xl sm:text-4xl">{{ coverData?.title }}</h1>
                    <p class="max-sm mb-4">{{ coverData?.content }}</p>
                </div>
            </div>
        </div>
    </main>    
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue';
import CoverData from '../../types/cover';

    export default defineComponent({
        name: 'DefaultCoversCoverComponent',
        data(){
            return {
                imagePath: ""
            }
        },
        props: {
            coverData: {
                required: true,
                type: Object as PropType<CoverData>

            }
        },
      
        setup(props) {
            const resolvedImagePath = computed(() => {
                return new URL(props.coverData.pathImage, import.meta.url).href;
            })

            return {
                resolvedImagePath
            }
        }
    })
</script>