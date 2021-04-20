<template>
    <div class="overview">

        <hero-content :title="translate('about.title')">
            <template #image>
                <img src="@/assets/images/programming.svg" alt="Programmer" />
            </template>
        </hero-content>

        <div class="bg-blue-grey-1 p-4">
            <h2 class="mt-3">{{ translate('about.title') }}</h2>

            <div class="bg-dark" style="min-height: 50vh">
                About
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./about.ts" />
