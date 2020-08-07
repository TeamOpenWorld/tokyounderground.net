<template>
    <div>
        <div class="w-full h-screen items-center bg-gray-900 lg:flex hidden">
            <div class="flex-1 h-full">
            <img
                src="~/assets/initialized_logo.svg"
                class="h-full w-full fill-current text-blue-200"
            />
            </div>

            <div class="flex-1 w-full text-center text-white main">
                <p class="text-2xl">始めよう、最初から。</p>
            </div>
        </div>
        <div>
            <p>hello</p>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "MusicVket1",
            };
        },
    };
</script>

<style scoped>
    .main {
        font-family: "M PLUS 1p", sans-serif;
        font-weight: 700;
    }
</style>
