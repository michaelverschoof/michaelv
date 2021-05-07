<template>
    <hero-content :title="translate('blog.title')">
        <template #image>
            <img class="round" src="@/assets/images/story-master.svg" alt="Blog" />
        </template>
    </hero-content>

    <section class="stories">

        <transition-group name="fade-left-staggered" tag="ul">

            <template v-if="show">
                <li v-for="(story, index) in stories" :key="index" :style="[{ '--item-delay': index}, delay ? '--total-delay: 500ms' : null ]">
                    <a :href="story.link" target="_blank">
                        <div class="image" :style="{ backgroundImage: `url(${story.thumbnail})` }"></div>
                        <div class="title">
                            {{ story.title }}
                        </div>
                    </a>
                </li>
            </template>

        </transition-group>

    </section>
</template>

<script lang="ts" src="./blog.ts" />

<style lang="scss" src="./blog.scss" scoped />
