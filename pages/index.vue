<template>
    <div id="bg" class="flex content-center flex-wrap h-screen">
        <div class="w-full text-center">
            <p>Hello, We are TokyoUnderground.</p>
            <p>TokyoUnderground is a music promotion network from Japan.</p>
            <br />
            <p>TokyoUndergroundのウェブサイトへようこそ！</p>
            <p>
                私達は音楽文化をもっと盛り上げるべく活動している、日本の楽曲プロモーションネットワークです。
            </p>
            <br />
            <NuxtLink class="link" to="/release/musicvket1"
                >MusicVket1 (Japanese page Only)</NuxtLink
            ><br />
            <NuxtLink class="link" to="/release/musicvket2"
                >＞ MusicVket2 (Japanese page Only) ＜</NuxtLink
            ><br />
            <a href="https://open-w.net">運営情報 / Organization</a>
        </div>
    </div>
</template>

<style scoped>
#bg {
    background-color: rgb(31, 31, 31);
}

p {
    color: white;
}

.link {
    text-decoration: underline;
    color: white;
}

a {
    text-decoration: underline;
    color: white;
}
</style>

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
