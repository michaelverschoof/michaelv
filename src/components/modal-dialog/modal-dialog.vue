<template>
    <div class="modal-dialog-backdrop"
        :class="[ display, { 'displaying': displaying }]"
        @click.self="close"
    >
        <div class="modal-dialog bg-white text-dark">

            <slot name="header"></slot>

            <slot></slot>

            <slot name="footer"></slot>

        </div>
    </div>
</template>

<script lang="ts" src="./modal-dialog.ts"></script>