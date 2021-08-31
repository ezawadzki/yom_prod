<template>
    <b-container fluid="sm">
        <b-row> </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'EndCategory',

    components: {},
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
        currentSection() {
            return this.$store.getters.currentSection;
        },
    },
    watch: {},
    props: [],

    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped>
</style>
