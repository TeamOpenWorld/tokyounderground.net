<template>
    <div>
        <div class="w-full h-screen text-white bg-gray-900 overflow-hidden">
            <img
                src="~/assets/initialized_logo.svg"
                class="h-full w-full transform -translate-x-96 fill-current text-blue-200 absolute"
            />
            <div class="flex content-center flex-wrap h-screen transform translate-x-84">
                <div class="w-full text-center ">
                    <p class="text-2xl">始めよう、最初から。</p>
                </div>
            </div>
        </div>
        <div>
            <p>hello</p>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData() {},

        head() {
            return {
                title: "MusicVket1",
            };
        },
    };
</script>
