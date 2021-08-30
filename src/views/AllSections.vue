<template>
    <b-container id="all-sections">
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

        <b-row id="sections">
            <b-col md="3" sm="12">
                <router-link to="/section/1">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section1">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Being evaluated<br />my love</span
                                >
                                <span class="sub-text"
                                    >Likes, rewards, recognition and
                                    comments</span
                                >
                                <span
                                    class="bg"
                                    style="background-position: left 10%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/2">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section2">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Evaluation<br />forever</span
                                >
                                <span class="sub-text"
                                    >Feedback ail takeholders, 360°, You, We
                                    Them, and I</span
                                >
                                <span
                                    class="bg"
                                    style="background-position: left 20%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/3">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section3">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Assignements<br />for the best</span
                                >
                                <span class="sub-text"
                                    >Red, yellow, green and blue</span
                                >
                                <span
                                    class="bg"
                                    style="background-position: left 30%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/4">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section4">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Evaluation<br />forever</span
                                >
                                <span class="sub-text"
                                    >Likes, rewards, recognition and
                                    comments</span
                                >
                                <span
                                    class="bg"
                                    style="background-position: left 40%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'AllSections',
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
    },
    data() {
        return {};
    },
    methods: {
        selectSection(s) {
            console.log('selectSection', s);
        },
    },
};
</script>

<style lang="scss">
.v-toolbar__title {
    white-space: inherit !important;
    overflow: visible !important;
}
#all-sections #sections {
    margin-top: 18vh;
    @include media-breakpoint-down(sm) {
        margin-top: 2vh;
    }
    .section {
        text-align: center;

        .img {
            width: 10vw;
            height: 10vw;
            transition: all 0.1s ease-out;
            background-size: 10vw;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 1vh;
            @include media-breakpoint-down(sm) {
                width: 44vw;
                height: 44vw;
                background-size: 44vw;
            }
        }
    }
    .section1 {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile1_off.png') !important;
        }
    }

    .section1:hover {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile1_on.png') !important;
        }
    }

    .section2 {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile2_off.png') !important;
        }
    }

    .section2:hover {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile2_on.png') !important;
        }
    }

    .section3 {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile3_off.png') !important;
        }
    }

    .section3:hover {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile3_on.png') !important;
        }
    }

    .section4 {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile4_off.png') !important;
        }
    }

    .section4:hover {
        .img {
            background-image: url('~@/assets/navigation/bouton_rubrique/artcile4_on.png') !important;
        }
    }
    .text_wrapper {
        .text {
            font-size: 1.7vw;
            display: block;
            line-height: 2vw;
            min-height: 10vh;

            @include media-breakpoint-down(sm) {
                font-size: 8vw;
                line-height: 8vw;
            }
        }

        .bg {
            background-image: url('~@/assets/navigation/calque_deterioration/calque_deterioration.png');
            position: absolute;
            z-index: 10;

            display: block;
            width: 100%;
            height: 44%;
            bottom: 0;
            opacity: 0.8;
        }

        .sub-text {
            font-size: 1.1vw;
            display: block;
            @include media-breakpoint-down(sm) {
                font-size: 5vw;
                margin-bottom: 8vh;
            }
        }
    }
}
</style>
