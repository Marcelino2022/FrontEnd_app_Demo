<template>
    <div class="custom-container">
        <div class="px-10">
            <div class="centralizer-flex-row text-primary">
                <h1>
                    <slot name="title"></slot>
                </h1>
            </div>
            <p class="">
                <slot name="content"></slot>
            </p>
        </div>
        <div class="flex-1">
            <slot name="image"></slot>       
        </div>
    </div>
</template>
