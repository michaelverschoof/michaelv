<template>
    <hero-content :title="translate('home.title')" :subtitle="translate('home.subtitle')">
        <template #image>
            <img src="@/assets/images/chilling.svg" alt="Hanging out" />
        </template>
    </hero-content>

    <section class="dark-background">
        <article>
            <h2>Why not so typical?<br>I'll tell ya!</h2>
            <div class="content">
                <p class="text">
                    The quick version is that I’m a frontend developer who used to be a backender. I know. Weird, right?
                    <br>
                    I worked as a Java developer for about eight years after which I decided that I wanted to do something more UX-driven.
                    Want to know more? Follow the link and I’ll talk more about myself, where I came from and where I’m going.
                </p>
                <div class="image">
                    <img src="@/assets/images/programming.svg" alt="Programming">
                </div>
            </div>
        </article>

        <article>
            <h3 class="right">What did it lead to...</h3>
            <div class="content">
                <p class="text">
                    Having worked as a backender and frontender has left me with a “specific set of skills”.
                    Ranging from Java backend application development to frontend UI’s with HTML, CSS and JavaScript.
                    <br><br>
                    Curious about the languages I have at my disposal? Check out the skill matrix.
                </p>
                <div class="image">
                    <img src="@/assets/images/code-master.svg" alt="Programming">
                </div>
            </div>

        </article>
    </section>

<!--    <section>-->
<!--        <article>-->
<!--            <h2>The fruits of my labor</h2>-->
<!--            <p>-->
<!--                Using the skills I’ve acquired over the years I’ve created a lot of web-based software and websites.-->
<!--                <br><br>-->
<!--                These are created keeping user experience in mind whilst not losing the goal of the website.-->
<!--                <br><br>-->
<!--                Want to see what I’ve built?-->
<!--            </p>-->
<!--        </article>-->

<!--        <article>-->
<!--            <h3>Giving back to the community</h3>-->
<!--            <p>-->
<!--                In the little free time I have left I create JavaScript packages that can be used by anyone, free of charge.-->
<!--                <br><br>-->
<!--                These packages provide encapsulated functionality to make life easier for other developers so they don’t have to reinvent the wheel every time.-->
<!--                <br><br>-->
<!--                Want to see what I’ve created so far? Follow the link and find out!-->
<!--            </p>-->
<!--        </article>-->
<!--    </section>-->

<!--    <section>-->
<!--        <article>-->
<!--            <h2>My experiences</h2>-->
<!--            <p>-->
<!--                When building new things (at least new to me) I’ve started writing down my experiences with it.-->
<!--                Most of these will be how-to’s on building specific functionalities or website parts ranging from Divi components to HTML, CSS or JavaScript challenges.-->
<!--                <br><br>-->
<!--                Want to know more? Check out my blog and see!-->
<!--            </p>-->
<!--        </article>-->
<!--    </section>-->
</template>

<script lang="ts" src="./home.ts" />

<style lang="scss" src="./home.scss" scoped />
