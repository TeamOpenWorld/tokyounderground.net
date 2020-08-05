<template>
    <div class="flex content-center flex-wrap h-screen">
        <div class="w-full text-center">
            <p class="text-3xl">工事中 / Under construction</p>
            <p class="text-2xl">ぴえん🥺</p>
            <nuxt-link to="" class="text-blue-500">MusicVket1特設ページはこちら</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        layout: "main",

        asyncData() {},

        head() {
            return {
                title: "Welcome",
            };
        },
    };
</script>
