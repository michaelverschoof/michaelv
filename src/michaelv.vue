<template>
    <header ref="hero">
        <hero :class="page" />
    </header>

    <navigation :class="[ page, { sticking: sticking } ]" />

    <router-view v-slot="{ Component }">
        <transition :name="pageTransition" mode="out-in">
            <component :is="Component" :class="page"></component>
        </transition>
    </router-view>
</template>

<script lang="ts" src="./michaelv.ts" />

<style lang="scss" src="./michaelv.scss" />
<style lang="scss" src="./assets/scss/transitions.scss" />
