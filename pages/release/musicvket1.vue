<template>
    <div>
        <div
            class="w-full h-screen items-center bg-gray-900 lg:flex xl:flex hidden main"
        >
            <div class="flex-1 h-full ml-6">
                <img
                    src="~/assets/initialized_logo.svg"
                    class="h-full w-full fill-current text-blue-200"
                />
            </div>
            <div class="flex-1 w-full text-white ml-6">
                <p class="text-2xl">
                    東京の地下で、新しい物語が始まろうとしている。<br />さぁ、始めよう。最初から。
                </p>
            </div>
        </div>
        <div class="bg-blue-900">
            <div class="container mx-auto py-24 px-3 text-white text-center">
                <h1 class="text-5xl">ABOUT</h1>
                <div class="text-lg sm:text-lg lg:text-2xl xl:text-2xl">
                    <p class=" main mt-6">
                        新たに発足した楽曲プロモーションレーベルのTokyoUndergroundから<br />初めてのコンピレーションアルバムがリリース。
                    </p>
                    <p class="main mt-6 mb-16">
                        初開催のバーチャル上の音楽即売会、MusicVket1にて頒布予定。
                    </p>
                </div>
                <a
                    href="https://music.v-market.work/"
                    target="_brank"
                    class="border rounded-lg text-2xl px-5 py-1 transition duration-500 ease-in-out hover:bg-white hover:text-gray-900 transform"
                    >MusicVket1</a
                >
            </div>
        </div>
        <div class="bg-gray-800">
            <div class="py-24 text-center text-white">
                <h1 class="text-5xl">TRACKS</h1>
                <div
                    class="lg:flex-wrap lg:flex container mx-auto mt-6"
                >
                    <div class="flex-1 m-2">
                        <img
                            src="~/assets/initialized_jacket.png"
                            class="w-full h-full shadow-xl"
                        />
                    </div>
                    <div class="flex-1 text-white text-left mx-5 lg:m-2 lg:ml-8">
                        <div class="lg:text-2xl py-12 main">
                            <ul>
                                <li type="1" class="list-inside my-1">
                                    p0m - bangin' time
                                </li>
                                <li type="1" class="list-inside my-1">
                                    Factory (JAPAN) - I'll Be There (p0m Remix)
                                </li>
                                <li type="1" class="list-inside my-1">
                                    Factory (JAPAN) - I'll Be There
                                </li>
                                <li type="1" class="list-inside my-1">
                                    ミツキ - Rise and Shine
                                </li>
                                <li type="1" class="list-inside my-1">
                                    橋本琉芽 - Dread
                                </li>
                                <li type="1" class="list-inside my-1">
                                    DJ Raisei - ✕✕✕∑ ⃠ ⅂◸⢸⦻⍂✕✕✕
                                </li>
                                <li type="1" class="list-inside my-1">
                                    S2i8 - Back2U
                                </li>
                                <li type="1" class="list-inside my-1">
                                    ClumsyHypnosis - Trip
                                </li>
                                <li type="1" class="list-inside my-1">
                                    hapi⇒ feat. DJ Raisei & p0m - Wind dancer (Wild Wind Mix)
                                </li>
                            </ul>
                            <p class="mt-8 text-2xl lg:text-3xl">計9曲 1000円</p>
                        </div>
                    </div>
                </div>
            </div>
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
        font-weight: 300;
    }
</style>
