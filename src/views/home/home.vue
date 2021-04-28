<template>
    <div class="overview">

        <hero-content :title="translate('home.title')" :subtitle="translate('home.subtitle')">
            <template #image>
                <img src="@/assets/images/chilling.svg" alt="Hanging out" />
            </template>
        </hero-content>

        <div class="">
            <h2 class="">Home</h2>
        </div>
    </div>
</template>

<script lang="ts" src="./home.ts" />
