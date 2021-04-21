<template>
    <header ref="hero">
        <hero :class="$route.name" />
    </header>

    <navigation :class="[ $route.name, { sticking : sticking} ]" />

    <div class="">
        <router-view />
    </div>
</template>

<script lang="ts" src="./App.ts" />

<!-- Generic styling, maybe find a way to include this all in one file (importing in app.scss gives errors because of @use) -->
<style lang="scss" src="./assets/scss/app.scss" />
<style lang="scss" src="./assets/scss/transitions.scss" />
