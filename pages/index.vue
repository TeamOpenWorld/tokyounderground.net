<template>
    <div>
        <section id="top" class=" h-screen flex justify-start items-center">
            <div class="ml-5 md:ml-48">
                <p class=" text-4xl">Welcome to Tokyo Underground</p>
                <p class=" mt-4 text-xl mb-6">Internet Music Community.</p>
                <h1 class="text-3xl mb-4">Releases</h1>
                <nuxt-link class="text-blue-700" to="/release/musicvket1">MusicVket1</nuxt-link>
                <a class="text-blue-700" href="/release/musicvket2">MusicVket2</a>
                <nuxt-link class="text-blue-700" to="/release/musicvket3">MusicVket3</nuxt-link>
                <h1 class="text-3xl mb-4 mt-6">Social</h1>
                <a class="text-blue-700" href="https://twitter.com/undergrounet" target="_blank">Twitter</a>
                <a class="text-blue-700" href="https://www.youtube.com/channel/UCyy_OdxrRcFu23gurBmgk1Q" target="_blank">YouTube</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    layout: "main",

    asyncData() {},

    head() {
        return {
            title: "Top",
        };
    },
};
</script>
