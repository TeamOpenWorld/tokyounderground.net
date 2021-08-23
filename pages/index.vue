<template>
    <div>
        <section id="top" class=" h-screen flex justify-start items-center">
            <div class="ml-48">
                <p class=" text-4xl">Welcome to Tokyo Underground</p>
                <p class=" mt-4 text-xl">個人クリエイターのための音楽コミュニティ</p>
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
