<template>
    <div :class="boxData.container">
        <div :class="boxData.class">
            <div v-if="boxData.imageOnTop" class="flex justify-center flex-1">
                <div><img :src="boxData.imageOnTop" alt=""></div>       
            </div>

            <div class="flex items-center flex-1">
                <div class="lg:px-16">
                    <h1 :class="boxData?.titleColor">{{ boxData.title }} 
                        <span :class="boxData.secondaryColorTitle"> {{boxData.complemetTitle}}</span>
                    </h1>

                    <p :class="boxData.textColor">{{ boxData?.content }}</p>

                    <span v-if="boxData.ShowAltLearnMore" class="md:hidden mx-1 flex-row items-center">
                        <a class="{{boxData?.colorTitle}} font-semibold flex-row" href="#">
                            Learn more <span class="iconify mdi--arrow-right-thin items-center"></span>                        
                        </a>    
                    </span>

                    <div class="custom-flex-row">
                        <button type="button" :class="boxData.classButton" title="">{{ boxData.buttonDescription }}</button>
                    </div>
                </div>
            </div>

            <div v-if="boxData.imageOnbotton" class="flex justify-center flex-1">
                <div><img :src="boxData.imageOnbotton" alt=""></div>       
            </div>

            <div v-if="boxData.imagesOnGrid" class="grid grid-cols-2 gapx-0">
                <div class="col-center" v-for="image in boxData.imagesOnGrid">
                    <img :src="image" alt="">
                </div>   
            </div>

        </div>
    </div>
</template>


<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { IboxType } from '../types/boxes';

    export default defineComponent({
        name:'FlexBoxComponent',
        props:{
            boxData: { 
                required: true, 
                type: Object as PropType<IboxType>  
            }
        }
    })
</script>