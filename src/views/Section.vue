<template>
    <b-container>
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
        <b-row>
            <b-col v-if="this.sections.length">
                <Question
                    class="questions"
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
        currentStep: function (val) {
            console.log('currentStep', val);
            // this.currentStep = this.$store.getters.currentStep;
            // check end of section

            // store which category done

            // compare length of catergory done to < 4
        },
    },
    props: ['section_id'],

    data() {
        return {
            sections: [],
            currentStep: 0,
            type: null,
        };
    },
    async mounted() {
        this.$store.dispatch('setUserSection', this.$route.params.section_id);
        this.sections =
            await require(`../data/${this.$route.params.section_id}.json`);
        // this.$store.dispatch('setUserCurrSectionLength', this.sections.length);
    },
    created: function () {},
    methods: {
        async onClickChild() {
            if (this.currentStep < this.sections.length - 1) {
                this.currentStep += 1;
            } else {
                // save which section has been done
                console.log(
                    'this.$store.getters.currentSection',
                    this.$store.getters.currentSection
                );
                await this.$store.dispatch(
                    'setUserSectionsDone',
                    this.$store.getters.currentSection
                );

                await console.log(
                    'sectionsDone',
                    this.$store.getters.sectionsDone
                );
                // redirect
                if (this.$store.getters.sectionsDone.length < 4) {
                    this.$router.push('/end-category');
                } else {
                    this.$router.push('/end');
                }
            }
            // this.$forceUpdate();
        },
    },
};
</script>

<style  lang="scss">
.questions {
    text-align: center;
}
</style>
