<template>
        <label class="radio-input d-flex">
            <input type="radio" autocomplete="off"
                :id="identifier"
                :name="name"
                :value="value"
                :checked="checked"
                @change="onChange"
            />
            <span class="check radios"></span>

            <span class="d-inline-block px-2">
                <slot></slot>
            </span>
        </label>
</template>

<script src="./radio-input.ts" lang="ts"></script>