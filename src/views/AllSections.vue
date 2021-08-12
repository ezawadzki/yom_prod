<template>
    <b-container fluid="sm">
        <b-row>
            <b-col md="3" sm="12">
                <router-link to="/section/1">
                    <v-toolbar-title data-cy="titleBtn">
                        Being evaluated my love
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/2">
                    <v-toolbar-title data-cy="titleBtn">
                        Evaluation forever
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/3">
                    <v-toolbar-title data-cy="titleBtn">
                        Assignements for the best
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/section/4">
                    <v-toolbar-title data-cy="titleBtn">
                        Evaluation forever
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

<style scoped>
</style>
