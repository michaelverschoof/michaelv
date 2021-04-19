<template>
    <nav class="navigation">
        <router-link :to="{ name: Routes.HOME }" class="logo">
            <span>Michael<span class="highlight">V</span></span>
        </router-link>

        <ul class="menu">
            <li class="">
                <router-link :to="{ name: Routes.ABOUT }">
                    <span>{{ translate('navigation.menu.about') }}</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{ name: Routes.PORTFOLIO }">
                    <span>{{ translate('navigation.menu.portfolio') }}</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{ name: Routes.BLOG }">
                    <span>{{ translate('navigation.menu.blog') }}</span>
                </router-link>
            </li>
        </ul>

        <div class="repositories">
            <span>Git</span>
            <span>npm</span>
        </div>
<!--        <language-select class="user-lang" />-->
    </nav>
</template>

<script lang="ts" src="./navigation.ts" />

<style lang="scss" src="./navigation.scss" scoped />
