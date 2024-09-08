<template>
      <div v-if="handleHamburgerOpenAndCloseMenu" class="hamburger-menu">
        <div class="custom-container">
            <div class="menu-option w-full mt-16">
                <ul class="gap-y-6">
                    <li><a href="#" rel="noopener noreferrer"><span class="iconify mdi--home-account"></span> Home</a></li>
                    <li><a href="#" rel="noopener noreferrer"><span class="iconify mdi--service-toolbox"></span> Service</a></li>
                    <li><a href="#" rel="noopener noreferrer"><span class="iconify mdi--marketplace-outline"></span> Marketplace</a></li>
                    <li><a href="#" rel="noopener noreferrer"><span class="iconify mdi--about"></span> about</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return {
                handleHamburgerOpenAndCloseMenu: false
            }
        },
        props: {
            hiddenHamburger : {
                required: false,
                type: Boolean
            }
        },
        methods: {
            hendleCloseHamburgrMenu(){
                this.handleHamburgerOpenAndCloseMenu = false                
            }
        },
        watch: {
            hiddenHamburger(val){
                this.handleHamburgerOpenAndCloseMenu = val                               
            }
        }
    })
</script>
