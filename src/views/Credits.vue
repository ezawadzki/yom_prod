<template>
    <b-container class="credits-in">
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
        <div class="content">
            <b-row class="people">
                <b-col>
                    <span v-if="language == 'fr'" class="job">Conception artistique, dessin et voix : </span>
                    <span v-if="language == 'en'" class="job">Artistic design, drawing and voice off : </span>
                    <span class="name">Magali Desbazeille</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span v-if="language == 'fr'" class="job">Développment web : </span>
                    <span v-if="language == 'en'" class="job">Programming : </span>
                    <span class="name">Emilie Zawadzki</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span v-if="language == 'fr'" class="job">Graphisme : </span>
                    <span v-if="language == 'en'" class="job">Graphic design : </span>
                    <span class="name">Gabin Traverse</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span  class="job">Production : </span>
                    <span class="name">Le jeu de Paume, Cie ASAP</span>
                </b-col>
            </b-row>
            
            <br />
            <br />

            <b-row class="no_data">
                <b-col v-if="language == 'fr'">Aucune donnée sur ce site n'est sauvegardé ! </b-col>
                <b-col v-if="language == 'en'">No data collected ! </b-col>
            </b-row>
            <span class="bg_text" style="background-position: left 40%"></span>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'credits',
    components: {},

    created: function () {},
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
    },
    methods: {
        setLanguage(language) {
            this.$store.dispatch('setUserLanguage', language);
        },
    },
};
</script>


<style lang="scss">
.credits-in {
    .content {
        margin-top: 15vh;
        position: relative;
        .people {
            font-size: 3vw;
            text-align: center;

            .job {
                color: #f5e107;
            }
        }

        .bg_text {
            top: 0;
            height: 100%;
        }

        .no_data {
            margin-top: 2vw;
            font-size: 1.5vw;
            text-align: center;
        }
    }
}
</style>

