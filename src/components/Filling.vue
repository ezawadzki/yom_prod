<template>
    <div>
        remplissage {{ type }}
        <v-style>
            .answer_1 { background-image: url({{ img_off }}); } .answer_1:hover
            { background-image: url({{ img_on }}); } .answer_1:hover ~ .answer_1
            { background-image: url({{ img_on }});}
        </v-style>
        <div class="answer answer_1"></div>
        <div class="answer answer_1"></div>
        <div class="answer answer_1"></div>
        <div class="answer answer_1"></div>
        <div class="answer answer_1"></div>
    </div>
</template>

<script>
export default {
    name: 'Filling',
    props: ['type'],
    computed: {
        img_off: function () {
            return require(`@/assets/remplissage/${this.type}/${this.type}_off.gif`);
        },
        img_on: function () {
            return require(`@/assets/remplissage/${this.type}/${this.type}_on.gif`);
        },
    },
    components: {
        'v-style': {
            render: function (createElement) {
                return createElement('style', this.$slots.default);
            },
        },
    },
    data() {
        return {};
    },

    methods: {},
};
</script>

<style scoped>
.answer {
    transition: all 0.1s ease-out;
}
.answer:hover {
    cursor: pointer;
}
.answer_1 {
    width: 170px;
    height: 170px;
}
</style>
