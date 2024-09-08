<template>
    <div class="darck-card">
        <div class="w-full">
            <img class="w-full" :src="productData.image" alt="">
        </div>
        <div class="w-full py-2 px-4">
            <div class="sm:h-20 sm:max-h-20">
                <h3 class="font-medium"><span class="text-white">Price: </span><span>{{ productData.amount }}</span></h3>
                <h3 class="font-medium"><span class="text-white">{{ productData.designation }}</span></h3>
            </div>
            <p>Sold by: <a href="#" class="font-semibold" title="view Supplier">{{ productData.supplier }}</a></p>
            <p>Arrange with Supplier: <span class="text-primary font-semibold"> Free </span></p>
            <p class="text-sm mt-4">
                Reviews: 
                <span class="iconify mdi--star text-sm"></span>
                <span class="iconify mdi--star text-sm"></span>
                <span class="iconify mdi--star text-sm"></span>
                <span class="iconify mdi--star text-sm"></span>
                <span class="iconify mdi--star text-sm"></span>
                <span class="text-primary font-semibold"> {{ productData.review }} </span>
            </p>
        </div>
        <div class="w-full flex justify-between p-2 items-center px-4">
            <span class="iconify mdi--shopping-cart-add text-lg cursor-pointer"></span>
            <!-- <button class="btn-secondary rounded-full">Discover</button> -->
            <router-link to="/product" class="btn-secondary rounded-full">Discover</router-link>
            <span class="iconify mdi--heart text-lg cursor-pointer"></span>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
import { IProduct } from '../../types/marketplace';

    export default defineComponent({
        name: "ProductCardComponent",
        props:{
            productData: {
                required: true,
                type: Object as PropType<IProduct>
            }
        }
    })
</script>