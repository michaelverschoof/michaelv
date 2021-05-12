<template>
    <main>
        <hero-content :title="translate('about.title')">
            <template #image>
                <img src="@/assets/images/programming.svg" alt="Programmer" />
            </template>
        </hero-content>

        <div style="min-height: 150vh">
            <h2 class="">About</h2>
        </div>
    </main>
</template>

<script lang="ts" src="./about.ts" />
