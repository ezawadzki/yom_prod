<template>
    <!-- <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans> -->
    <b-container>
        <div v-if="loadingPercent < 100">
            <div class="progress-bar">
                <div class="fill" :style="{ width: loaded }">{{ loaded }}</div>
            </div>
        </div>
        <div v-else>Page Loaded</div>
        <b-row align-h="center" class="header">
            <b-col md="8" sm="12">
                <h1>
                    <b-img
                        :src="require('@/assets/navigation/logo/logo_YOM.png')"
                        fluid
                    />
                </h1>
            </b-col>
        </b-row>
        <b-row align-h="center" class="content">
            <b-col md="3" sm="12">
                <router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="setLanguage('fr')"
                    >
                        <div
                            class="button_participate button_participate_fr"
                            fluid
                        ></div>
                    </v-toolbar-title>
                </router-link>
            </b-col>
            <b-col md="3" sm="12"
                ><router-link to="/all-sections">
                    <v-toolbar-title
                        data-cy="titleBtn"
                        @click="setLanguage('en')"
                    >
                        <div
                            class="button_participate button_participate_en"
                            fluid
                        ></div>
                    </v-toolbar-title> </router-link
            ></b-col>
        </b-row>
    </b-container>
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
    data() {
        return {
            loadingPercent: 0,
            loadTime: 0,
            interval: null,
        };
    },
    created: function () {
        // reset all state
        this.$store.dispatch('resetAll');

        // loader
        let perfData = window.performance.timing;
        let estimatedTime = Math.abs(
            perfData.loadEventEnd - perfData.navigationStart
        );
        this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
        this.doProgress();
    },
    computed: {
        loaded() {
            return this.loadingPercent + '%';
        },
    },
    watch: {
        loadingPercent(val) {
            if (val >= 100) {
                console.log('complete');
                clearInterval(this.interval);
            }
        },
    },
    methods: {
        setLanguage(language) {
            this.$store.dispatch('setUserLanguage', language);
        },
        doProgress() {
            let step = this.loadTime / 100;
            this.interval = setInterval(() => {
                this.loadingPercent++;
            }, step);
        },
    },
};
</script>


<style lang="scss">
.header {
    margin-top: 32vh;
    img {
        // width: 47vw;
        // @include media-breakpoint-up(sm) {
        //     width: 100vw;
        // }
    }
}

.content {
    margin-top: 15vh;
}
.button_participate {
    height: 11vh;
    transition: all 0.1s ease-out;
    background-repeat: no-repeat;
    background-position: center;
    @include media-breakpoint-down(sm) {
        margin-top: 5vh;
    }
}

.button_participate:hover {
    cursor: pointer;
}

.button_participate_fr {
    background-image: url('~@/assets/navigation/bouton_particpe/fr_participe_off.gif');
}
.button_participate_fr:hover {
    background-image: url('~@/assets/navigation/bouton_particpe/fr_participe_on.gif');
}

.button_participate_en {
    background-image: url('~@/assets/navigation/bouton_particpe/en_participe_off.gif');
}
.button_participate_en:hover {
    background-image: url('~@/assets/navigation/bouton_particpe/en_participe_on.gif');
}
</style>

