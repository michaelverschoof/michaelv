<template>
    <hero-content :title="translate('blog.title')">
        <template #image>
            <img class="round" src="@/assets/images/story-master.svg" alt="Blog" />
        </template>
    </hero-content>

    <ul class="bg-blue-grey-1 p-4">
        <li v-for="story in stories" :ref="story.guid">
            {{ story.title }}
        </li>
    </ul>
</template>

<script lang="ts" src="./blog.ts" />
