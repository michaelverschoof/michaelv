<template>
    <nav class="navigation">
        <div class="container">
        <router-link :to="{ name: Routes.HOME }" class="logo">
            <span class="level-off">Michael<span class="highlight">V</span></span>
        </router-link>

        <ul class="menu">
            <li class="">
                <router-link :to="{ name: Routes.ABOUT }">
                    <span class="level-off">{{ translate('navigation.menu.about') }}</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{ name: Routes.PORTFOLIO }">
                    <span class="level-off">{{ translate('navigation.menu.portfolio') }}</span>
                </router-link>
            </li>
            <li class="">
                <router-link :to="{ name: Routes.BLOG }">
                    <span class="level-off">{{ translate('navigation.menu.blog') }}</span>
                </router-link>
            </li>
        </ul>

        <div class="repositories">
            <a href="https://github.com/michaelverschoof" target="_blank" title="GitHub">
                <img class="level-off" src="@/assets/images/repositories/github.png" alt="GitHub">
            </a>
            <a href="https://www.npmjs.com/~michaelverschoof" target="_blank" title="NPM">
                <img class="level-off" src="@/assets/images/repositories/npm.svg" alt="NPM">
            </a>
        </div>
        </div>
    </nav>
</template>

<script lang="ts" src="./navigation.ts" />

<style lang="scss" src="./navigation.scss" scoped />
