<template >
    <b-container class="end-category">
        <v-style>
            .end-category { background-image: url({{ img_background }}) }
            .continue { background-image: url({{ img_continue_off }}); }
            .continue:hover { background-image: url({{ img_continue_on }}); }
        </v-style>

        <audio id="myAudio" controls autoplay>
            <source
                :src="require(`@/assets/audio/Bravo/${nbSectionsDone}.mp3`)"
                type="audio/mpeg"
            />
        </audio>
        <div class="grad">
            <img
                v-if="nbSectionsDone > 0"
                :src="
                    require(`@/assets/navigation/grade/${language}_${nbSectionsDone}.png`)
                "
            />
        </div>
        <b-row>
            <b-col>
                <div class="logo">
                    <router-link to="/">
                        <img
                            :src="
                                require(`@/assets/navigation/logo/logo_YOM.png`)
                            "
                        />
                    </router-link>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="end">
            <b-col md="3">
                <div class="points">
                    <img :src="img_points" />
                </div>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col md="3">
                <div class="continue">
                    <router-link to="/all-sections">
                        <div class="continue"></div>
                    </router-link>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="center"> </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'EndCategory',

    components: {
        'v-style': {
            render: function (createElement) {
                return createElement('style', this.$slots.default);
            },
        },
    },
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
        currentSection() {
            return this.$store.getters.currentSection;
        },
        nbSectionsDone() {
            return this.$store.getters.sectionsDone.length;
        },
        img_background: function () {
            return require(`@/assets/navigation/cartel/${this.nbSectionsDone}.gif`);
        },
        img_points: function () {
            return require(`@/assets/navigation/point/${this.nbSectionsDone}.gif`);
        },
        img_continue_off: function () {
            return require(`@/assets/navigation/bouton_continue/${this.language}_continue_off.gif`);
        },
        img_continue_on: function () {
            return require(`@/assets/navigation/bouton_continue/${this.language}_continue_on.gif`);
        },
    },
    watch: {},
    props: [],

    data() {
        return {
            // nbSectionsDone: 1,
        };
    },
    methods: {},
};
</script>

<style lang="scss">
.end-category {
    height: 100%;
    background-size: 100%;
    background-position: center center;
    @include media-breakpoint-down(sm) {
        background-size: 165%;
        background-position: center 14vh;
    }
    .points {
        margin-top: 26vh;
        margin-left: 2vw;
        img {
            width: 14vw;
            @include media-breakpoint-down(sm) {
                width: 32vw;
                float: right;
            }
        }
    }
    .win-image {
        width: 70vw;
    }
    .continue {
        height: 13vh;
        background-position: center center;
        background-size: 100%;
        @include media-breakpoint-down(sm) {
            margin-top: 8vh;
            background-size: 70%;
        }
    }
}
</style>
