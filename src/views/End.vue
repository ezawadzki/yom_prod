<template>
    <b-container class="end">
        <v-style>
            .end { background-image: url({{ img_background }}) }
        </v-style>
        <b-row>
            <b-col>
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://bootstrap-vue.org/docs/components/layout"
                    >facebook</a
                >
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
}
</style>
