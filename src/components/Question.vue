<template>
    <div class="question">
        <b-row class="question-wrapper" align-v="center">
            <span class="bg_text"></span>

            <b-col>
                <span class="text">{{ text }}</span>
            </b-col>
        </b-row>
        <b-row class="answers">
            <b-col>
                <audio
                    ref="audioElm1"
                    :src="require(`@/assets/audio2/AUDIO-FICHIERS-${language}/04-${language}-Clic/${language}-clic${rnd(1,6)}.mp3`)"
                ></audio>
                
                <div v-if="type === 'binaire'">
                    <Binary
                        v-bind:type="answer"
                        @click.native="
                            goToStep();
                            play1();
                        "
                    ></Binary>
                </div>
                <div v-else-if="type === 'remplissage'">
                    <Filling
                        v-bind:type="answer"
                        @click.native="goToStep()"
                    ></Filling>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Binary from '@/components/Binary';
import Filling from '@/components/Filling';

export default {
    name: 'Question',
    components: {
        Binary,
        Filling,
    },
    props: {
        text: {
            default: null,
        },
        type: {
            default: null,
        },
        answer: {
            default: null,
        },
    },
    data() {
        return {
            currentStep: 0,
        };
    },
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },

    },
    methods: {
        goToStep: function () {
            // this.$store.dispatch('setUserStep', step);
            this.$emit('clicked');
        },
        play1: function (event) {
            this.$refs.audioElm1.play();
        },
        rnd(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;;
        },
    },
};
</script>

<style lang="scss">
.question {
    .question-wrapper {
        height: 35vh;
    }

    .text {
        font-size: 2.9vw;
        @include media-breakpoint-down(sm) {
            font-size: 7vw;
        }
    }

    .bg_text {
        height: 35vh;
        top: 0;
        opacity: 0.9;
    }

    .answers {
        margin-top: 2vh;
    }
}
</style>
