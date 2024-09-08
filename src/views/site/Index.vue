<script setup lang="ts">
    import SiteCoversComponent from '../../components/covers/SiteCoversComponent.vue';
    import FlexBoxComponent from '../../components/FlexBoxComponent.vue';
    import CardsGridComponent from '../../components/CardsGridComponent.vue';
    import TableRowComponents from '../../components/TableRowComponents.vue';
    import ClientsReviews from '../../components/site/index/ClientsReviews.vue';
    import PartnersComponent from '../../components/site/index/PartnersComponent.vue';
</script>

<template>

    <SiteCoversComponent :coverData="coverData"/>
    <FlexBoxComponent :boxData="stockManagement"/>
    <FlexBoxComponent :boxData="orderManagement"/>
    <FlexBoxComponent :boxData="marketPlace"/>
    <FlexBoxComponent :boxData="integrations"/>
    <FlexBoxComponent :boxData="operationReporting"/>

    <section id="ourSolutions">
        <div class="custom-container custom-green-darg-bg">
            <div class="w-full flex justify-center"><h1>Our solutions</h1></div>
            <CardsGridComponent :cardData="histories"/>
            <TableRowComponents :item="rowLink"/>
            <ClientsReviews :clientData="clientsData" />
        </div>
    </section>
    
    <section id="partners">
        <PartnersComponent />
    </section>

</template>
  
<script lang="ts">
    import { defineComponent, ref } from 'vue';
import CoverData from '../../types/cover';
import { servicesData, solutionData, advantages } from '../../types/Data/servicesData';
import { IboxType } from '../../types/boxes';
import { ICardsGridType, IClientData } from '../../types/cards';
import { ITableRowLink } from '../../types/tables';
import { clientData } from '../../types/Data/ClientsData';

    const services = servicesData();
    const solution = solutionData();
    const advantageData = advantages();
    const clients = clientData()
    
    export default defineComponent({
        name: "Index",
        components: { 
            SiteCoversComponent,
            FlexBoxComponent 
        },
        data(){
            return{
                coverData: ref<CoverData>({
                    page: 'Index',
                    title: 'lant with us and reap', 
                    content: 'We have the best solutions to conecting you witth your Clinets or Costmers', 
                    showButton: true, 
                    linkButton: '#', 
                    pathImage: new URL('../../assets/images/coverLogo.png', import.meta.url).href
                }),

                stockManagement: ref<IboxType>({
                    container: "custom-container",
                    class: "inner custom-flex-reverse mt-16",
                    title: services.stockManagement.title,
                    titleColor: "text-primary",
                    content: services.stockManagement.content,
                    imageOnbotton: new URL(services.stockManagement.image, import.meta.url).href,
                    classButton: "btn-primary",
                    buttonDescription: "Learn more",
                }),
                orderManagement: ref<IboxType>({
                    container: "custom-container bg-inclined-background bg-no-repeat bg-cover",
                    class: "inner flex-col md:flex-row",
                    title: services.orderManagement.title,
                    titleColor: "text-primary",
                    content: services.orderManagement.content,
                    imageOnTop: new URL(services.orderManagement.image, import.meta.url).href,
                    classButton: "btn-primary",
                    buttonDescription: "Learn more",
                }),
                marketPlace: ref<IboxType>({
                    container: "custom-container",
                    class: "inner flex-col md:flex-row",
                    title: services.marketPlace.title,
                    titleColor: "text-primary",
                    content: services.marketPlace.content,
                    imagesOnGrid: services.marketPlace.images.map(image => new URL(image, import.meta.url).href),
                    classButton: "btn-primary",
                    buttonDescription: "Learn more",
                }),
                integrations: ref<IboxType>({
                    container: "custom-container custom-bg-green",
                    class: "inner flex-col md:flex-row",
                    title: services.integrations.title,
                    complemetTitle: services.integrations.complemetTitle,
                    titleColor: "text-primary",
                    secondaryColorTitle: "text-green-950",
                    content: services.integrations.content,
                    imageOnTop: new URL(services.integrations.image, import.meta.url).href,
                    classButton: "btn-primary",
                    buttonDescription: "Learn more",
                }),
                operationReporting: ref<IboxType>({
                    container: "custom-container",
                    class: "inner custom-flex-reverse mt-16",
                    title: services.operationReporting.title,
                    titleColor: "text-primary",
                    content: services.operationReporting.content,
                    imageOnbotton: new URL(services.operationReporting.image, import.meta.url).href,
                    classButton: "btn-primary",
                    buttonDescription: "Learn more",
                }),
                histories: ref<ICardsGridType>({
                    class: "darck-card",
                    titleColor: 'text-primary',
                    textColor: 'text-white',
                    icon: 'iconify mdi--arrow-right-thin items-center',
                    contents: solution
                }),
                rowLink: ref<ITableRowLink>({
                    classTable: "darck-table type-link-rows",
                    title: 'Witch is the advantages?',
                    titleColor: 'text-white',
                    table: "darck-table",
                    icon: "iconify mdi--arrow-right-thin items-center",
                    rows: advantageData
                }),
                clientsData: ref<IClientData>({
                    class: "",
                    titleColor: 'text-white',
                    clients: clients
                }),
            }
        }
    })
</script>