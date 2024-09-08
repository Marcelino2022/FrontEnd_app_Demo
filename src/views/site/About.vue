<script setup lang="ts">
    import SiteCoversComponent from '../../components/covers/SiteCoversComponent.vue';
    import FlexBoxComponent from '../../components/FlexBoxComponent.vue';
    import TextBoxComponent from '../../components/TextBoxComponent.vue';
    import TableRowLinkComponents from '../../components/TableRowComponents.vue';
    import PartnersComponent from '../../components/site/index/PartnersComponent.vue';

</script>

<template>
    <SiteCoversComponent :coverData="coverData" />
    <TextBoxComponent>
        <template v-slot:title>{{ about.aboutUs.title }}</template>
        <template v-slot:content>{{ about.aboutUs.content }}</template>
    </TextBoxComponent>

    <div class="about">
        <FlexBoxComponent :boxData="missionData"/>
        <div class="custom-container">
            <FlexBoxComponent :boxData="ourVision"/>
            <TableRowLinkComponents :item="rowLink"/>
            <FlexBoxComponent :boxData="whereWeAre"/>
        </div>
    </div>
    <PartnersComponent />
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { IboxType } from '../../types/boxes';
    import CoverData from '../../types/cover';
    import { aboutData, TableRowsLink } from '../../types/Data/aboutData';
    import { ITableRowLink } from '../../types/tables';

    const about = aboutData();
    const tableData = TableRowsLink();

    export default defineComponent({
        name: 'About',
        components:{
            SiteCoversComponent,
            FlexBoxComponent,
            TextBoxComponent,
            TableRowLinkComponents,
            PartnersComponent
        },
        data(){
            return {
                coverData: ref<CoverData>({
                    page: 'About',
                    title: 'MFINTU KIA NDONA YETO', 
                    content: '', 
                    showButton: false, 
                    linkButton: '#', 
                    pathImage: new URL('../../assets/images/coverLogo.png', import.meta.url).href
                }),
                about: about,
                missionData: ref<IboxType>({
                    class: "custom-flex-reverse mt-16",
                    title: about.ourMissions.title,
                    titleColor: 'text-primary',
                    textColor: 'text-white text-medium',
                    content: about.ourMissions.content,
                    imageOnbotton: new URL(about.ourMissions.image, import.meta.url).href
                }),
                ourVision: ref<IboxType>({
                    class: "px-16 mt-4",
                    title: about.ourVision.title,
                    titleColor: 'w-full flex justify-center text-primary',
                    textColor: 'text-white text-medium lg:px-96',
                    content: about.ourVision.content
                }),
                rowLink: ref<ITableRowLink>({
                    classTable: "darck-table type-link-rows",
                    title: 'The Company value',
                    titleColor: 'text-white',
                    table: "darck-table",
                    icon: "iconify mdi--arrow-right-thin items-center",
                    rows: tableData
                }),
                whereWeAre: ref<IboxType>({
                    class: "py-16 flex flex-col-reverse md:flex-row",
                    title: about.whereWeAre.title,
                    titleColor: 'text-primary',
                    textColor: 'text-white text-medium',
                    content: about.whereWeAre.content,
                    imageOnbotton: new URL(about.whereWeAre.image, import.meta.url).href
                }),
            }
        }
    })
</script>