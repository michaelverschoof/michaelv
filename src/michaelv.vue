<template>
    <header ref="hero">
        <hero :class="page" />
    </header>

    <navigation :class="[ page, { sticking : sticking} ]" />

    <main :class="page">
        <router-view />
    </main>
</template>

<script lang="ts" src="./michaelv.ts" />

<style lang="scss" src="./michaelv.scss" />
<style lang="scss" src="./assets/scss/transitions.scss" />
