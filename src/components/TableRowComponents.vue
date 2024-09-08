<template>
    <div class="overflow-x-auto mt-16">
        <div class="w-full flex justify-center"><h1 :class="item.titleColor">{{ item.title }}</h1></div>
        <table :class="item.classTable">
            <tbody>
                <tr v-for="row in item.rows">
                    <td class="w-full flex justify-between items-center">
                        <span>{{ row.description }}</span>
                        <span :class="item.icon"></span>
                    </td>
                </tr>      
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { ITableRowLink } from '../types/tables';


    export default defineComponent({
        name: "ItemsRows",
        props:{
            item:{
                required: true,
                type: Object as PropType<ITableRowLink>
            }
        }
    })  
</script>