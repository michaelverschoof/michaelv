<template>
    <main>
        <hero-content :title="translate('home.title')" :subtitle="translate('home.subtitle')">
            <template #image>
                <img src="@/assets/images/chilling.svg" alt="Hanging out" />
            </template>
        </hero-content>

        <section class="dark-background">
            <article>
                <h2>
                    Why not so typical?
                    <br />
                    I'll tell ya!
                </h2>
                <revealer transition="fade-left">
                    <div class="content">
                        <p class="text">
                            The quick version is that I’m a frontend developer who used to be a backender. I know. Weird, right?
                            <br />
                            I worked as a Java developer for about eight years after which I decided that I wanted to do something more UX-driven.
                            <br />
                            <br />
                            Want to know more? Follow the link and I’ll talk more about myself, where I came from and where I’m going.
                        </p>
                        <div class="image">
                            <img src="@/assets/images/programming.svg" alt="Programming" />
                        </div>
                    </div>
                </revealer>
            </article>

            <article>
                <h3 class="right">What did it lead to...</h3>
                <revealer transition="fade-right">
                    <div class="content">
                        <p class="text">
                            Having worked as a backender and frontender has left me with a “specific set of skills”. Ranging from Java backend
                            application development to frontend UI’s with HTML, CSS and JavaScript.
                            <br />
                            <br />
                            Curious about the languages and frameworks I have at my disposal? Check out the skill graphs.
                        </p>
                        <div class="image">
                            <img class="round" src="@/assets/images/code-master.svg" alt="Programming" />
                        </div>
                    </div>
                </revealer>
            </article>
        </section>

        <section>
            <article>
                <revealer transition="fade-zoom">
                    <h2>The fruits of my labor</h2>
                    <div class="content">
                        <p class="text">
                            Using the skills I’ve acquired over the years I’ve created a lot of software and web-applications. In these products my
                            focus is mainly on user-experience, reusability and future-proofing.
                            <br />
                            <br />
                            Want to see what I’ve built?
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/images/astounding-products.svg" alt="Astounding products" />
                    </div>
                </revealer>
            </article>

            <article>
                <revealer transition="fade-zoom">
                    <h3>Giving back</h3>
                    <div class="content">
                        <p class="text">
                            In the little free time I have left I create JavaScript packages that can be used by anyone, free of charge. These
                            packages provide encapsulated functionality to make life easier for other developers.
                            <br />
                            <br />
                            Want to see what I’ve created so far? Follow the link and find out!
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/images/coffee-iv.svg" alt="Coding in free time" />
                    </div>
                </revealer>
            </article>
        </section>

        <section class="dark-background">
            <article>
                <h2>Helping others</h2>
                <revealer transition="fade-up">
                    <div class="content">
                        <p class="text">
                            During my exploits as a developer I often come across new technologies, frameworks and techniques. Often I find the amount
                            of information available on these subjects unclear or lacking.
                            <br />
                            <br />
                            Because of this I've started writing down my experiences in stories on<a href="https://michael-verschoof.medium.com/" target="_blank">Medium</a>.
                            Here I provide tutorials with example code to help others create awesome functionality without having to figure out everything from scratch.
                            <br />
                            <br />
                            Want to know more? Check out my posts!
                        </p>
                        <div class="image">
                            <img class="round" src="@/assets/images/story-master.svg" alt="Coding in free time" />
                        </div>
                    </div>
                </revealer>
            </article>
        </section>
    </main>
</template>

<script lang="ts" src="./home.ts" />

<style lang="scss" src="./home.scss" scoped />
