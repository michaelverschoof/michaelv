<template>
    <div class="overview">

        <teleport to="#hero">
            <div class="content">
                <h1>Hi, I'm Michael</h1>
                <h2>A not so typical developer</h2>
            </div>
        </teleport>

        <div class="bg-blue-grey-1 p-4">
            <h2 class="mt-3">{{ translate('home.title') }}</h2>

            <div class="bg-dark" style="min-height: 50vh">
                Home
            </div>
        </div>

    </div>
</template>

<script lang="ts" src="./home.ts" />
