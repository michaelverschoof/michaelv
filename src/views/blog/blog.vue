<template>
    <div class="overview">

        <hero-content :title="translate('blog.title')">
            <template #image>
                <img src="@/assets/img/computer-punch.svg" alt="Blog" />
            </template>
        </hero-content>

        <div class="bg-blue-grey-1 p-4">
            <h2 class="mt-3">{{ translate('blog.title') }}</h2>

            <div class="bg-dark" style="min-height: 50vh">
                Portfolio
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./blog.ts" />
