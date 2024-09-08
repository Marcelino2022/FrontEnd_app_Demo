<script setup lang="ts">
    import ProductCardComponent from '../../Product/ProductCardComponent.vue';
</script>
<template>
    <section :class="listData.background">
        <div class="custom-container">
            <div v-for="data in listData.data">
                <div class="w-full flex justify-start mt-5"><h2>{{ data.category }}</h2></div>
                <div class="custom-grid-flex-cols">
                    <div v-for="(product, index) in data.products">
                        <ProductCardComponent :productData="product" :key="index"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
import { IProductList } from '../../../types/marketplace';

    export default defineComponent({
        name: "ProductListComponent",
        props: {
            listData: {
                required: true,
                type: Object as PropType<IProductList>
            }
        }
    })
</script>