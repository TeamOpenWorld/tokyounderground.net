<template>
    <div>
        <section class="flex items-center justify-center h-screen">
            <div
                class="max-w-full md:max-w-6xl md:mx-auto flex items-center justify-between"
            >
                <img
                    src="~/assets/1024.png"
                    class="filter drop-shadow-2xl w-5/12"
                />
                <div class=" mr-24">
                    <p class="mb-2 text-xl subtitle">TUG-0003</p>
                    <h1 class="text-5xl">真夜中の精神独行</h1>
                    <p class="mt-2 text-3xl subtitle">
                        Midnight Spiritual Solitude
                    </p>
                    <div
                        class="tracks my-6 flex flex-col text-2xl text-blue-800"
                    >
                        <nuxt-link to="/">Saclagi - Miracle Oracle</nuxt-link>
                        <nuxt-link to="/">Liglica - Daimon</nuxt-link>
                        <nuxt-link to="/"
                            >Reku Mochizuki - Walled City's Routine</nuxt-link
                        >
                        <nuxt-link to="/">明晩あるむ - 鹿神</nuxt-link>
                        <nuxt-link to="/">ミツキ - Unrealism</nuxt-link>
                        <nuxt-link to="/">Todayday - Take You Higher</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class=" py-28 bg-gray-700 px-3">
            <div class="max-w-full md:max-w-6xl md:mx-auto text-white">
                <h1 class="text-4xl">詳細</h1>
                <table class="border-auto border w-full mt-7">
                    <tbody>
                        <tr>
                            <td class="border border-white p-2">
                              Model Number 
                            </td>
                            <td class="border border-white p-2">TUG-0003</td>
                        </tr>
                        <tr>
                            <td class="border border-white p-2">価格</td>
                            <td class="border border-white p-2">
                               1000円 
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-white p-2">販売場所</td>
                            <td class="border border-white p-2">
                               VketStore, Booth, BandCamp 
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-white p-2">
                               出展 
                            </td>
                            <td class="border border-white p-2">MusicVket3 Cr-12にて頒布予定 <a href="https://music.vket.com/v3/catalog/690" class="text-purple-300 hover:text-white" target="_blank">カタログを見る</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section class=" py-28 px-3">
            <div class="max-w-full md:max-w-6xl md:mx-auto text-white">
                <div class=" aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/hkGKqvrtu8U" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <section class=" py-28 bg-purple-300 px-3">
            <div class="max-w-full md:max-w-6xl md:mx-auto text-white">
                <h1 class="text-4xl">作曲者</h1>
               <div class="grid grid-cols-5 mt-7 gap-5">
                    <div class="text-center" v-for="member in members.composer" :key="member.name">
                        <a :href="member.url" target="_blank"><img class="rounded-full" :src="member.img" v-if="member.img" alt="" srcset=""><img v-else src="~/assets/mmimage0.png" class="rounded-full bg-white" alt="" srcset=""></a>
                        <p class="text-xl mt-5 tracks">{{member.name}}</p>
                    </div>
                </div>
                <h1 class="text-4xl mt-10">スタッフ</h1>
               <div class="grid grid-cols-5 mt-7 gap-5">
                    <div class="text-center" v-for="member in members.staff" :key="member.name">
                        <a :href="member.url" target="_blank"><img class="rounded-full" :src="member.img" v-if="member.img" alt="" srcset=""><img v-else src="~/assets/mmimage0.png" class="rounded-full bg-white" alt="" srcset=""></a>
                        <p class="text-xl mt-5 tracks">{{member.name}}</p>
                        <p class="text-lg tracks">{{member.description}}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: {
                composer: [
                    {
                        "name": "Liglica",
                        "img": "https://i.gyazo.com/716c626734f55f379320207339e5b135.jpg",
                        "url": "https://twitter.com/ruga_H"
                    },
                    {
                        "name": "ミツキ",
                        "img": "https://i.gyazo.com/2226b16a9ccc4858802d26fe5b6c02ab.jpg",
                        "url": "https://twitter.com/mitsuki_hotta"
                    },
                    {
                        "name": "Reku Mochizuki",
                        "img": "https://i.gyazo.com/2bd3d8c53efdaaa5fc04a1c299787172.jpg",
                        "url": "https://twitter.com/RekuMczk"
                    },
                    {
                        "name": "Saclagi",
                        "img": "https://i.gyazo.com/67b4b9d4bee1cf3816d129c24f5375f8.jpg",
                        "url": "https://twitter.com/AstroKirschbaum"
                    },
                    {
                        "name": "明晩あるむ",
                        "img": "https://i.gyazo.com/9343fbb3419abd964bbec5563988282d.jpg",
                        "url": "https://twitter.com/akekure_alum"
                    },
                    {
                        "name": "Todayday"
                    }
                ],
                staff: [
                    {
                        "name": "巳波みなと",
                        "img": "https://i.gyazo.com/286649c95b627ee6457072b8e90b28de.jpg",
                        "url": "https://twitter.com/minatoo86",
                        "description": "主催 / Webデザイン"
                    },
                    {
                        "name": "ハクアを博愛する人",
                        "img": "https://i.gyazo.com/fc4dd68b439c1a05ccfe65e58edf0c7c.jpg",
                        "url": "https://twitter.com/hakua_loveEQ",
                        "description": "運営"
                    },
                    {
                        "name": "高梨辣油",
                        "img": "https://i.gyazo.com/34bcb5614b22e997d3c20df880e286ec.jpg",
                        "url": "https://twitter.com/RaU_Takanashi",
                        "description": "企画立案 / 運営"
                    },
                    {
                        "name": "黒井くろ",
                        "img": "https://i.gyazo.com/ed5fef8af34e7422f7a9b0bd0466c571.jpg",
                        "url": "https://twitter.com/yuzuriha_1202",
                        "description": "ジャケット / 売り子パネルイラスト"
                    },
                    {
                        "name": "花椎ゆう",
                        "img": "https://i.gyazo.com/5c2b3e169312d5607234c8331767fb9c.jpg",
                        "url": "https://twitter.com/KashiiYuu",
                        "description": "ジャケットデザイン"
                    },
                    {
                        "name": "ひよこ",
                        "img": "https://i.gyazo.com/6e77051bd23cd799424662cc0f0f110e.jpg",
                        "url": "https://twitter.com/a2_hyk",
                        "description": "クロスフェード映像"
                    },
                    {
                        "name": "Mintoll",
                        "img": "https://i.gyazo.com/32a0511faf899b50c2320539e1ebfe46.jpg",
                        "url": "https://twitter.com/Mintoll_Mov",
                        "description": "お品書きデザイン"
                    }
                ]
            }
        }
    }    
}
</script>

<style>
h1 {
    font-family: "Zen Kurenaido", serif;
    font-weight: 700;
}

.subtitle {
    font-family: "Caveat", serif;
    font-weight: 100;
}

.tracks {
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 500;
}
</style>
