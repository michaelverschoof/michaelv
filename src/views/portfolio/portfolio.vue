<template>
    <hero-content :title="translate('portfolio.title')">
        <template #image>
            <img src="@/assets/images/astounding-products.svg" alt="Portfolio" />
        </template>
    </hero-content>

    <div class="bg-blue-grey-1 p-4">
        <h2 class="mt-3">{{ translate('portfolio.title') }}</h2>

        <div class="bg-dark" style="min-height: 50vh">
            Portfolio
        </div>
    </div>
</template>

<script lang="ts" src="./portfolio.ts" />
