<template>
    <button class="border-0 h-100 overflow-hidden px-4 rounded-0 text-start text-white save-button w-100"
        :class="[ saving ? 'py-2 working' : 'py-3', { 'saved': completed } ]"
        :disabled="saving"
        @click="$emit('clicked')"
    >
        <span v-if="!saving" class="d-block">
            <slot></slot>
        </span>
        <span v-if="saving" class="d-block loader text-center">
            <img src="@/assets/img/loader/loader.svg" alt="">
        </span>
    </button>
</template>

<script lang="ts" src="./save-button.ts"></script>