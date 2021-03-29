<template>
    <div class="overview">

        <teleport to="#hero">
            <div class="content">
                <h1>{{ translate('about.title') }}</h1>
            </div>
        </teleport>

        <div class="bg-blue-grey-1 p-4">
            <h2 class="mt-3">{{ translate('about.title') }}</h2>

            <div class="bg-dark" style="min-height: 50vh">
                About
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./about.ts" />
