<script setup lang="ts">
import SidebarComponent from './SidebarComponent.vue';
</script>

<template>
    <header class="marketplace-header text-white mt-16">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
                <span @click="handleShowSidebar" class="iconify mdi--hamburger-menu" id="sm-menu"></span>
                <span class="mx-1">Products</span>
            </div>
            <div class="flex flex-row items-center">
                <span class="iconify mdi--search" id="sm-menu"></span>
            </div>
        </div>
    </header>
    <SidebarComponent :showSidebar="showSidebar" :sideItems="sideItmes"/>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue'
    import { ISideItems } from '../../../types/marketplace';
    import SideItemsData from '../../../types/Data/marketplace/sideBar';
    
    const sideItemsData = SideItemsData()
    export default defineComponent({
        name: 'Marketplace',
        components:{},
        data(){
            return {
                showSidebar: ref(false),
                sideItmes: ref<ISideItems>({
                    items: sideItemsData
                })
            }
        },
        methods: {
            handleShowSidebar(){
                this.showSidebar = !this.showSidebar
            }
        }
    })
</script>