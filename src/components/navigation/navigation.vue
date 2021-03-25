<template>
    <nav class="navigation navbar navbar-expand sticky-top">
        <div class="container-xl">
            <router-link :to="{ name: Routes.HOME }" class="navbar-brand">
                MichaelV
            </router-link>

            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item flex-grow-1 text-center">
                    <router-link :to="{ name: Routes.ABOUT }" class="nav-link">
                        {{ translate('navigation.menu.about') }}
                    </router-link>
                </li>
                <li class="nav-item flex-grow-1 text-center">
                    <router-link :to="{ name: Routes.PORTFOLIO }" class="nav-link">
                        {{ translate('navigation.menu.portfolio') }}
                    </router-link>
                </li>
                <li class="nav-item flex-grow-1 text-center">
                    <router-link :to="{ name: Routes.BLOG }" class="nav-link">
                        {{ translate('navigation.menu.blog') }}
                    </router-link>
                </li>
            </ul>

            <language-select class="user-lang" />
        </div>
    </nav>
</template>

<script lang="ts" src="./navigation.ts" />

<style lang="scss" src="./navigation.scss" scoped />
