<script setup lang="ts">
    import Product from '../../components/Product/ViewProductComponent.vue'
    import MarkeyplaceHeaderComponent from '../../components/site/marketplace/MarkeyplaceHeaderComponent.vue';
</script>
<template>
    <header class="product-header mt-28">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-4">
                <router-link ><span>Store Page</span></router-link>
                <router-link ><span>More Supplier product</span></router-link>
                <router-link ><span>Reviews</span></router-link>
            </div>
        </div>
    </header>

    <MarkeyplaceHeaderComponent />
    <Product />
</template>