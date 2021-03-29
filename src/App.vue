<template>
    <div class="hero" id="hero" :class="$route.name"></div>

    <navigation></navigation>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss" src="./assets/scss/app.scss" />
