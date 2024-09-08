<script setup lang="ts">
    import CategoryComponent from './CategoryComponent.vue';
</script>

<template>
    <div :class="{'bg-sidebar-open' : showSideMenu }" class=""></div>
    <div :class="{showSidebar: showSideMenu}" class="sidebar text-white">
        <header class="px-6 py-2">
            <div class="header-sidebar">
                <div>
                    <img src="../../../assets/images/headerLogo.png" alt="">
                </div>
                <span @click="hideSidebar" class="iconify mdi--close cursor-pointer"></span>
            </div>
        </header>
        <div class="header-green"> Products </div>
        <div class="text-green-950">
            <ul class="">
                <li @click="handleArtesanalOption(item.id)" v-for="item in sideItems.items" :key="item.id">
                    <span>{{ item.designation }}</span>
                    <span class="iconify mdi--chevron-right sidebar-arrow-right" ></span>
                </li>
            </ul>
        </div>
    </div>

    <div v-if="expandArtesanalOption" class="option-menu-expanded">
        <CategoryComponent :categoryData="categoryData"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, ref } from 'vue';
    import { CategoryOprions } from '../../../types/Data/marketplace/categoryData';
    import { ICategory } from '../../../types/marketplace';
    import { ISideItems } from '../../../types/marketplace';

    const categoryOptions = CategoryOprions();


    export default defineComponent({
        name: "Sidebar",
        data(){
            return {
                showSideMenu: false,
                expandArtesanalOption: false,
                optionID: 0,
                categoryData: ref<ICategory>({
                    class: "category-sidebar",
                    data: categoryOptions
                })
            }
        },
        props: {
            showSidebar: Boolean,
            sideItems: {
                required: true,
                type: Object as PropType<ISideItems>
            }
        },
        methods: {
            hideSidebar(){
                this.showSideMenu = !this.showSideMenu
                this.expandArtesanalOption = false                 
            },

            handleArtesanalOption(optionId: number){

                if(this.optionID == optionId){
                    this.expandArtesanalOption = !this.expandArtesanalOption 
                } else{
                    this.optionID = optionId;
                }
            }
        },
        watch:{
            showSidebar(){
                this.showSideMenu = true;
            }
        }
    })
</script>


