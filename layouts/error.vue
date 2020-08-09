<template>
    <div class="flex content-center flex-wrap h-screen">
        <div class="w-full text-center">
            <p class="text-3xl" v-if="error.statusCode === 404">{{ pageNotFound }}</p>
            <p class="text-3xl" v-else>{{ otherError }}</p>         
            <p class="text-2xl">ぴえん🥺</p>
            <nuxt-link to="" class="text-blue-500"
                >MusicVket1特設ページはこちら</nuxt-link
            >
        </div>
    </div>
</template>

<script>
    export default {
        layout: "empty",
        props: {
            error: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {
                pageNotFound: "404 Not Found",
                otherError: "An error occurred",
            };
        },
        head() {
            const title =
                this.error.statusCode === 404
                    ? this.pageNotFound
                    : this.otherError;
            return {
                title,
            };
        },
    };
</script>
