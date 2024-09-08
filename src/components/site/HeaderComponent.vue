<script setup lang="ts">
    import HamburgerManuComponent from './HamburgerManuComponent.vue';
</script>

<template>
    <header class="header">
        <div class="flex flex-row items-center justify-between">
            <div class="header-logo basis-1/4">
                <img src="../../assets/images/headerLogo.png" alt=""><span class="ml-1"></span>
            </div>
            <div class="menu">
                <ul class="flex items-center gap-4">
                    <li><router-link to="/" exact>Home</router-link></li>
                    <li><router-link to="/marketplace">Marketplace</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </div>
            <div class="hidden basis-1/4 md:flex justify-end gap-4">
                <button type="button" class="btn-darck">Register</button>
                <button type="button" class="btn-primary">Login</button>
            </div>
            <div class="basis-1/4 flex md:hidden justify-end gap-4 text-green-500">
                <span v-if="showUserICon" class="iconify mdi--user-outline" id="sm-menu" @click="handleUserAccountHumbergerMenu">Menu</span>
                <span v-if="showCloseMenuIcon" class="iconify mdi--close" id="sm-menu" @click="handleUserAccountHumbergerMenu"></span>
                <span v-if="showMenuIcon" class="iconify mdi--hamburger-menu" id="sm-menu" @click="handleHumbergerMenu">User</span>
            </div>
        </div>
    </header>
    <HamburgerManuComponent :hiddenHamburger="hiddenHamburger"/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Header',
        components: {HamburgerManuComponent},
        data() {
            return{
                hiddenHamburger: false,
                showMenuIcon: true,
                showUserICon: true,
                showCloseMenuIcon: false,
            }
        },
        methods:{
            handleHumbergerMenu(){
                this.hiddenHamburger = !this.hiddenHamburger
            },

            handleUserAccountHumbergerMenu(){
                this.hiddenHamburger = false
            },
        },
        watch: {
            hiddenHamburger(){
                this.showMenuIcon = !this.showMenuIcon
                this.showUserICon = !this.showUserICon
                this.showCloseMenuIcon = !this.showCloseMenuIcon
            }
        }
    })
</script>


