<template>
    <div>
        <v-style>
            .answer_1 { background-image: url({{ img1_off }}); } .answer_1:hover
            { background-image: url({{ img1_on }}); } .answer_2 {
            background-image: url({{ img2_off }}); } .answer_2:hover {
            background-image: url({{ img2_on }}); }
        </v-style>

        <b-row align-h="center">
            <b-col md="3">
                <div class="answer answer_1"></div>
            </b-col>
            <b-col md="3">
                <div class="answer answer_2"></div>
            </b-col>
        </b-row>
        <!-- <img :src="require(`@imgSrc/binaire/${type}/${type}vert_on.gif`)" /> -->
        <!-- <img :src="require(`@/assets/binaire/${type}/${type}rouge_off.gif`)" /> -->
    </div>
</template>

<script>
export default {
    name: 'Binary',
    props: ['type'],
    computed: {
        img1_off: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}rouge_off.gif`);
        },
        img1_on: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}rouge_on.gif`);
        },
        img2_off: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}vert_off.gif`);
        },
        img2_on: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}vert_on.gif`);
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
        return {
            img1: null,
            // img1: require('@/assets/binaire/yaourt/yaourtvert_off.gif'),
        };
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
    /* background-image: url(var(--bg-img-1)); */
    width: 170px;
    height: 170px;
}

.answer_2 {
    /* background-image: url('~@/assets/binaire/yaourt/yaourtrouge_off.gif'); */
    width: 170px;
    height: 170px;
}
</style>
