<template>
    <v-container fill-height>
        <v-layout align-center justify-center> coucou {{ language }}</v-layout>
    </v-container>
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
    methods: {},
};
</script>

<style scoped></style>
