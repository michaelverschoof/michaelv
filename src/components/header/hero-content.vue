<template>
    <teleport to="#hero">
        <div class="content" :class="{ image: $slots.image, delay: delayHeroAnimation }">

            <div class="title">
                <transition name="fade">
                    <h1 v-if="animate">{{ title }}</h1>
                </transition>

                <transition name="fade-up">
                    <h2 v-if="animate && subtitle">{{ subtitle }}</h2>
                </transition>
            </div>

            <transition name="fade-left">
                <slot v-if="animate" name="image" />
            </transition>

        </div>
    </teleport>
</template>

<script lang="ts" src="./hero-content.ts" />

<style lang="scss" src="./hero-content.scss" scoped />
