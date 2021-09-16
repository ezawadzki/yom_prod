<template>
    <b-container>
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
            <b-col md="3" sm="12" offset-md="3">
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

            <b-col md="2" sm="12" offset-md="1"
                ><b-img
                    class="speaker"
                    :src="require('@/assets/navigation/ampli/ampli.gif')"
                    fluid
            /></b-col>
        </b-row>
        <audio id="myAudio" controls autoplay>
            <source
                :src="require('@/assets/audio/PageAccueil.mp3')"
                type="audio/mpeg"
            />
        </audio>
    </b-container>
</template>
<script>
export default {
    name: 'home',
    components: {},

    created: function () {
        // reset all state
        this.$store.dispatch('resetAll');
    },

    methods: {
        setLanguage(language) {
            this.$store.dispatch('setUserLanguage', language);
        },
    },
};
</script>

<style lang="scss">
audio {
    display: none;
}
.header {
    margin-top: 36vh;

    @include media-breakpoint-down(sm) {
        margin-top: 16vh;
    }

    h1 {
        text-align: center;
    }
    img {
        // width: 47vw;
        // @include media-breakpoint-up(sm) {
        //     width: 100vw;
        // }
        width: 100%;
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
    background-size: 80%;

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

.speaker {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 5vw;

    @include media-breakpoint-down(sm) {
        margin-top: 5vh;
        width: 10vw;
    }
}

.button_participate:hover {
    cursor: url('~@/assets/navigation/curseur/main_curseur.png'), pointer;
}
</style>

