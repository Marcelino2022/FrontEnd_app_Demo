<template>
    <div class="cards-grid">
        <div  v-for="(data, index) in cardData.contents" :key="index">
            <a class="" href="#">
                <div :class="cardData.class">
                    <div class="w-full">
                        <img class="w-full" :src="data.image" :alt="'data.image'+index">
                    </div>
                    <div class="w-full py-2 px-4">
                        <div class="cards-grid-title">
                            <h3 :class="cardData.titleColor">{{ data.title }}</h3>
                        </div>
                        <p :class="cardData.textColor">{{ data.content }}</p>
                    </div>
                    <div class="cards-grid-footer">
                        <span :class="cardData.icon"></span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { ICardsGridType } from '../types/cards';

    export default defineComponent({
        name: "Cards Grid",
        props: {
            cardData: {
                required: true,
                type: Object as PropType<ICardsGridType>
            }
        }
    })
</script>