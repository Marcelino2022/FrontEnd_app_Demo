<script setup lang="ts">
import MarkeyplaceHeaderComponent from '../../components/site/marketplace/MarkeyplaceHeaderComponent.vue';
import DefaultCoversComponent from '../../components/covers/DefaultCoversComponent.vue';
import OverviewComponent from '../../components/site/marketplace/OverviewComponent.vue';
import CategoryComponent from '../../components/site/marketplace/CategoryComponent.vue';
import ProductListComponents from '../../components/site/marketplace/ProductListComponents.vue';
import SidebarComponent from '../../components/site/marketplace/SidebarComponent.vue';

    
</script>
<template>
    <MarkeyplaceHeaderComponent />
    <DefaultCoversComponent :coverData="coverData" />
    <OverviewComponent :items="overviewData" />
    <CategoryComponent :categoryData="categoryData" />
    <ProductListComponents :listData="productList"/>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import ICoverData from '../../types/cover';
    import * as IMarketplace from '../../types/marketplace';
    import OverviewData from '../../types/Data/marketplace/overviewData';
    import * as CategoryData from '../../types/Data/marketplace/categoryData';
    import { ProductData } from '../../types/Data/marketplace/productData';
    
    const overview = OverviewData();
    const category = CategoryData.CategoryData()
    const products = ProductData()
 
    export default defineComponent({
        name: 'Marketplace',
        components:{
            SidebarComponent,
            MarkeyplaceHeaderComponent,
            DefaultCoversComponent,
            OverviewComponent,
            CategoryComponent,
            ProductListComponents
        },
        data(){
            return {
                showSidebar: ref(false),
                coverData: ref<ICoverData>({
                    page: 'Marketplace',
                    title: '', 
                    content: '', 
                    showButton: false, 
                    linkButton: '#', 
                    pathImage: new URL('../../assets/images/marketplace/Marketplace.png', import.meta.url).href
                }),
                overviewData: ref<IMarketplace.IItemOverview>({
                    data: overview
                }),
                categoryData: ref<IMarketplace.ICategory>({
                    class: "categories mb-12",
                    data: category
                }),
                productList: ref<IMarketplace.IProductList>({
                    background: "custom-green-darg-bg",
                    data: products,
                }),
            }
        },
    })
</script>
