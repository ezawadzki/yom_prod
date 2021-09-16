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
                    <span class="job">De et Avec : </span>
                    <span class="name">Magali Desbazeille</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span class="job">Développment web : </span>
                    <span class="name">Emilie Zawadzki</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span class="job">Graphisme : </span>
                    <span class="name">Gabin Traverse</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span class="job">Production : </span>
                    <span class="name">Le jeu de Paume</span>
                </b-col>
            </b-row>
            <b-row class="people">
                <b-col>
                    <span class="job">Production déléguée : </span>
                    <span class="name">Cie ASAP</span>
                </b-col>
            </b-row>
            <br />
            <br />

            <b-row class="no_data">
                <b-col>Aucune donnée sur ce site n'est sauvegardé ! </b-col>
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
        margin-top: 10vh;
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
            font-size: 1.5vw;
            text-align: center;
        }
    }
}
</style>

