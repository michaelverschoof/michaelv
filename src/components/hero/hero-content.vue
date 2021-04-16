<template>
    <teleport to="#hero">
        <div class="content" :class="{ image: $slots.image }">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <transition name="slide-fade">
                <slot name="image" />
            </transition>
        </div>
    </teleport>
</template>

<script lang="ts" src="./hero-content.ts" />

<style lang="scss" src="./hero-content.scss" scoped />
