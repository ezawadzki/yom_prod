<template>
    <b-container class="end">
        <v-style>
            .end { background-image: url({{ img_background }}) }
        </v-style>
        <audio id="myAudio" controls autoplay>
            <source
                :src="require(`@/assets/audio2/AUDIO-FICHIERS-${language}/05-${language}-BravoX4/${language}-4.mp3`)"
                type="audio/mpeg"
            />
        </audio>
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
        <div class="grad">
            <img
                v-if="nbSectionsDone > 0"
                :src="
                    require(`@/assets/navigation/grade/${language}_${nbSectionsDone}.png`)
                "
            />
        </div>
        <b-row class="social">
            <b-col md="3">
                <div class="fb-share-button" data-href="https://yom.desbazeille.fr/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyom.desbazeille.fr%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"></a></div>
            </b-col>
            <b-col md="3" > 
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" target="_blank" data-text="Your Opinion Matters 2 ! Votre avis nous intéresse !" data-url="https://yom.desbazeille.fr/" data-show-count="false"></a>
            </b-col>

        
        </b-row>
        
    </b-container>

</template>

<script>
export default {
    name: 'End',

    components: {
        'v-style': {
            render: function (createElement) {
                return createElement('style', this.$slots.default);
            },
        },
    },
    computed: {
        language() {
            return this.$store.getters.userLanguage;
        },
        currentSection() {
            return this.$store.getters.currentSection;
        },
        img_background: function () {
            return require(`@/assets/navigation/cartel/ambassadrice/${this.language}_ambassador.gif`);
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

<style lang="scss">
.end {
    height: 100%;
    background-size: 100%;

    @include media-breakpoint-down(sm) {
        background-size: 125%;
        background-position: center;
    }

    .social {
        width: 50%;
        position: absolute;
        top: 32vw;
        left: 38vw;

        .fb-share-button {
            background-image: url('~@/assets/navigation/logo_reseau/facebook/facebook_off.gif');
            background-size: 23%;
            height: 25vh;
            width: 25vw;
            .fb-xfbml-parse-ignore {
                height: 11vh;
                    width: 6vw;
            }


            a {
                    height: 11vh;
                    width: 40vw;
            }
            &:hover {
                background-image: url('~@/assets/navigation/logo_reseau/facebook/facebook_on.gif');
            }
        }


        .twitter-share-button {

            background-image: url('~@/assets/navigation/logo_reseau/twitter/twitter_off.gif') !important;
            background-size: 100%;
             
            height: 12vh;
            width: 6vw;
        
            &:hover {
                background-image: url('~@/assets/navigation/logo_reseau/twitter/twitter_on.gif')  !important;
                
            }
            .btn {
                display: none !important;
            }
        }

        
    }

    
}
</style>
