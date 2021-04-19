<template>
    <div class="hero" id="hero" :class="$route.name"></div>

    <navigation :class="$route.name" />

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts" />

<!-- Generic styling, maybe find a way to include this all in one file (importing in app.scss gives errors because of @use) -->
<style lang="scss" src="./assets/scss/app.scss" />
<style lang="scss" src="./assets/scss/transitions.scss" />
