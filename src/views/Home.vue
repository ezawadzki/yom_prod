<template>
    <span>
        <!-- <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans> -->

        <div class="parent">
            <div class="div1"><h1>Your opinion matters #2</h1></div>
            <div class="div2"></div>
            <div class="div3">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="setLanguage('FR')"
                    >
                        Je Participe
                    </v-toolbar-title>
                </router-link>
            </div>
            <div class="div4">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="setLanguage('EN')"
                    >
                        I Participate
                    </v-toolbar-title>
                </router-link>
            </div>
        </div>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans,
    },
    methods: {
        setLanguage(language) {
            this.$store.dispatch('setUserLanguage', language);
        },
    },
};
</script>


<style>
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
.div1 {
    grid-area: 2 / 2 / 3 / 5;
}
.div2 {
    grid-area: 4 / 2 / 5 / 3;
}
.div3 {
    grid-area: 4 / 4 / 5 / 5;
}
.div4 {
    grid-area: 4 / 2 / 5 / 4;
}
</style>

