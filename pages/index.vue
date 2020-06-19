<template>
    <div>
        <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">ジョウタのファンサイト</h1>
                    <h4 class="subheading">JYOTA chang suki suki</h4>
                </v-col>
            </v-row>
        </v-parallax>
        <v-container class="py-16">
            <h1>ジョウタだよ～～～</h1>
        </v-container>
    </div>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import VuetifyLogo from "~/components/VuetifyLogo.vue";

    export default {
        components: {
            Logo,
            VuetifyLogo,
        },

        asyncData() {},

        head() {
            return {
                title: "Welcome",
            };
        },
    };
</script>
