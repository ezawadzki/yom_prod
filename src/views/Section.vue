<template>
    <b-container fluid="sm">
        <b-row>
            currentStep {{ currentStep }} <br />
            <b-col>
                <Question
                    v-bind:text="this.sections[currentStep][language]"
                    v-bind:type="this.sections[currentStep]['type']"
                    v-bind:answer="this.sections[currentStep]['answer']"
                    @clicked="onClickChild"
                ></Question>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Question from '@/components/Question';

export default {
    name: 'AllSections',

    components: {
        Question,
    },
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
        currentSection() {
            return this.$store.getters.currentSection;
        },
        // currentStep() {
        //     return this.$store.getters.currentStep;
        // },
    },
    watch: {
        // currentStep: function (val) {
        //     console.log('val', val);
        //     this.currentStep = this.$store.getters.currentStep;
        // },
    },
    props: ['section_id'],

    data() {
        return {
            sections: [],
            currentStep: 0,
        };
    },
    mounted() {
        this.$store.dispatch('setUserSection', this.$route.params.section_id);
        this.sections = require(`../data/${this.$route.params.section_id}.json`);
    },
    created: function () {
        // `this` est une référence à l'instance de vm
        // sections.map((item) => {
        //     console.log(item[this.language]);
        // });
    },
    methods: {
        onClickChild() {
            if (this.currentStep < this.sections.length - 1) {
                this.currentStep += 1;
            } else {
                // save which section has been done
                // redirect
            }
            // this.$forceUpdate();
        },
    },
};
</script>

<style scoped>
</style>
