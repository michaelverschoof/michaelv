<template>
    <div ref="target">
        <transition :name="transition">
            <div v-appear="animate" class="appear">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" src="./revealer.ts" />
