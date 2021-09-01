<template>
    <b-container id="all-sections">
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

        <b-row id="sections">
            <b-col md="3" sm="12" v-bind:class="{ done: isDone('1') }">
                <router-link to="/section/1">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section1">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Assignation<br />forever</span
                                >
                                <span class="sub-text" v-if="language == 'fr'"
                                    >Socio-politico</span
                                >
                                <span class="sub-text" v-if="language == 'en'"
                                    >Socio-political</span
                                >
                                <span
                                    class="bg_text"
                                    style="background-position: left 10%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12" v-bind:class="{ done: isDone('2') }">
                <router-link to="/section/2">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section2">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text" v-if="language == 'fr'"
                                    >Ultracrepidarianisme</span
                                >
                                <span class="text" v-if="language == 'en'"
                                    >Ultracrepidarianism</span
                                >
                                <span class="sub-text" v-if="language == 'fr'"
                                    >Je donne mon avis sur tout</span
                                >
                                <span class="sub-text" v-if="language == 'en'"
                                    >I give my opinion on everything</span
                                >
                                <span
                                    class="bg_text"
                                    style="background-position: left 20%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12" v-bind:class="{ done: isDone('3') }">
                <router-link to="/section/3">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section3">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text" v-if="language == 'fr'"
                                    >Evalué<br />mon amour</span
                                >
                                <span class="text" v-if="language == 'en'"
                                    >Evaluate me<br />my love</span
                                >
                                <span class="sub-text" v-if="language == 'fr'"
                                    >Moi, je</span
                                >
                                <span class="sub-text" v-if="language == 'en'"
                                    >Me, myself</span
                                >
                                <span
                                    class="bg_text"
                                    style="background-position: left 30%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12" v-bind:class="{ done: isDone('4') }">
                <router-link to="/section/4">
                    <v-toolbar-title data-cy="titleBtn">
                        <div class="section section4">
                            <div class="img"></div>
                            <div class="text_wrapper">
                                <span class="text"
                                    >Evaluation<br />for the best</span
                                >
                                <span class="sub-text" v-if="language == 'fr'"
                                    >Métaphysique
                                </span>
                                <span class="sub-text" v-if="language == 'en'"
                                    >Metaphysical
                                </span>
                                <span
                                    class="bg_text"
                                    style="background-position: left 40%"
                                ></span>
                            </div>
                        </div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
        </b-row>
        <!-- <b-row>
            <b-col> <router-link to="/section/3">Crédit</router-link></b-col>
        </b-row> -->
    </b-container>
</template>

<script>
export default {
    name: 'AllSections',
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
        nbSectionsDone() {
            return this.$store.getters.sectionsDone.length;
        },
    },
    data() {
        return {};
    },
    methods: {
        selectSection(s) {
            console.log('selectSection', s);
        },
        isDone(s) {
            return this.$store.getters.sectionsDone.includes(s);
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

        .bg_text {
            height: 44%;
            bottom: 0;
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

    .done {
        opacity: 0.4;
        pointer-events: none;
    }
}
</style>
