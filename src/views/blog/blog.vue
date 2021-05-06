<template>
    <hero-content :title="translate('blog.title')">
        <template #image>
            <img class="round" src="@/assets/images/story-master.svg" alt="Blog" />
        </template>
    </hero-content>

    <section class="stories">
        <ul>
            <li v-for="story in stories" :ref="story.guid">
                <a :href="story.link" target="_blank">
                    <div class="image"
                         :style="{ backgroundImage: `url(${story.thumbnail})` }"
                    ></div>
                    <div class="title">
                        {{ story.title }}
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" src="./blog.ts" />

<style lang="scss" src="./blog.scss" scoped />
