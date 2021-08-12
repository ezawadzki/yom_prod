<template>
    <b-container fluid="sm">
        <b-row>
            <b-col md="3" sm="12">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="selectSection(1)"
                    >
                        Being evaluated my love
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="selectSection(2)"
                    >
                        Evaluation forever
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="selectSection(3)"
                    >
                        Assignements for the best
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="selectSection(4)"
                    >
                        Evaluation forever
                    </v-toolbar-title>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// import sections from '../data/1.json';

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
            let sections = require(`../data/${s}.json`);
            sections.map((item) => {
                console.log(item[this.language]);
            });
        },
    },
};
</script>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 {
    grid-area: 3 / 2 / 4 / 3;
}
.div2 {
    grid-area: 3 / 3 / 4 / 4;
}
.div3 {
    grid-area: 3 / 4 / 4 / 5;
}
.div4 {
    grid-area: 3 / 5 / 4 / 6;
}
</style>
