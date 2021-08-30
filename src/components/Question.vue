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
                <div v-if="type === 'binaire'">
                    <Binary
                        v-bind:type="answer"
                        @click.native="goToStep()"
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
    computed: {},
    methods: {
        goToStep: function () {
            // this.$store.dispatch('setUserStep', step);
            this.$emit('clicked');
        },
    },
};
</script>

<style lang="scss">
.question {
    .question-wrapper {
        height: 40vh;
    }

    .text {
        font-size: 2.9vw;
    }

    .bg_text {
        height: 40vh;
        top: 0;
        opacity: 0.9;
    }

    .answers {
        margin-top: 2vh;
    }
}
</style>
