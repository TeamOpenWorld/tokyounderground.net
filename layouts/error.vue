<template>
    <div class="flex items-center justify-center h-screen">
        <div class="text-center">
            <p class="text-3xl" v-if="error.statusCode === 404">{{ pageNotFound }}</p>
            <p class="text-3xl" v-else>{{ otherError }}</p>         
            <img class="my-5" width="340px" src="~/assets/mmimage0.png" alt="">
            <nuxt-link to="/" class="text-blue-500"
                >トップページに戻る</nuxt-link
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
