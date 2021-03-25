<template>
    <div class="hero" :class="$route.name">
        <div class="content">
            <h1>Hi, I'm Michael</h1>
            <h2>A not so typical developer</h2>
        </div>
    </div>

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
