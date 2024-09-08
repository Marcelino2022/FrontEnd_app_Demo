
<template>
    <main class="index-cover">
        <div v-if="coverData.page == 'Index'" class="inner-cover">
            <div class="centralizer-flex-row">
                <img class="max-w-32" :src="coverData?.pathImage" :alt="coverData?.title">
            </div>
            <div class="max-w-md px-4">
                <div class="flex flex-col text-white">
                    <h1 class="font-bold text-3xl sm:text-4xl">{{ coverData?.title }}</h1>
                    <p class="max-sm mb-4">{{ coverData?.content }}</p>
                </div>
            </div>
            <div v-if="coverData?.showButton" class="centralizer-flex-row">
                <a type="button" :ref="coverData.linkButton" class="btn-darck">Learn More</a>
            </div>
        </div>

        <div v-if="coverData.page == 'About'" class="pt-24">
            <div class="centralizer-flex-row">
                <img class="max-w-44" :src="coverData?.pathImage" :alt="coverData?.title">
            </div>
            <div class="w-full flex justify-center py-16">
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
        name: 'SiteCoverComponent',
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