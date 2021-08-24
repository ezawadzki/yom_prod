<template>
    <div>
        <div>
            {{ text }}
            {{ type }}
            {{ answer }}
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
            <br />
            <!-- <button type="button" @click.prevent="goToStep()">continue</button> -->
        </div>
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

<style scoped>
</style>
