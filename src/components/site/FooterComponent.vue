<script setup lang="ts"></script>

<template>
    <footer class="bg-black py-4 px-6">
        <section class="">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="basis-1/4 flex justify-start items-start sm:h-44 h-4">
                    <img src="../../assets/images/footerLogo.png" alt=""><span class="ml-1"></span>
                </div>
                
                <div class="footer-menu duration-300">
                    <ul class="flex flex-col sm:flex-row sm:justify-center w-full h-full gap-4 my-4">
                        <li>
                            <router-link :to="{ path: '/', hash: '' }">Home</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/', hash: '#ourSolutions' }">Service</router-link>
                        </li>
                        <li><a href="/marketplace" rel="noopener noreferrer">Marketplace</a></li>
                        <li><a href="/about" rel="noopener noreferrer">about</a></li>
                    </ul>
                </div>
                
                <div class="basis-1/4 gap-4 flex justify-end items-start sm:h-44 h-4">
                    <a href="#" type="button" class="btn-white-outline">
                        <div class="w-full flex item">
                            <span>Go to top</span>
                            <span class="iconify mdi--arrow-expand-up ml-4"></span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex flex-col mt-4">
                <ul class="flex flex-col md:flex-row gap-x-16 text-sm text-gray-400">
                    <li><a class="hover:text-gray-200" href="#" rel="noopener noreferrer">Policy and Privacy</a></li>
                    <li><a class="hover:text-gray-200"href="#" rel="noopener noreferrer">Carreer</a></li>
                    <li><a href="#" rel="noopener noreferrer">@2024 all rights reserved</a></li>
                </ul>
            </div>
        </section>
    </footer>
</template>
