<template>
    <div>
        img : {{ img1 }}

        <v-style>
            .answer_1 { background-image: url({{ img1_off }}); } .answer_1:hover
            { background-image: url({{ img1_on }}); } .answer_2 {
            background-image: url({{ img2_off }}); } .answer_2:hover {
            background-image: url({{ img2_on }}); }
        </v-style>

        binaire {{ type }}
        <div class="answer_1"></div>
        <div class="answer_2"></div>
        <!-- <img :src="require(`@/assets/binaire/${type}/${type}vert_on.gif`)" />
        <img :src="require(`@/assets/binaire/${type}/${type}rouge_off.gif`)" /> -->
    </div>
</template>

<script>
// Vue.component('v-style', {
//     render: function (createElement) {
//         return createElement('style', this.$slots.default);
//     },
// });
export default {
    name: 'Binary',
    props: ['type'],
    computed: {
        // img1: require(`@/assets/binaire/${type}/${type}vert_on.gif`),
        img1_off: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}vert_off.gif`);
        },
        img1_on: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}vert_on.gif`);
        },
        img2_off: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}rouge_off.gif`);
        },
        img2_on: function () {
            return require(`@/assets/binaire/${this.type}/${this.type}rouge_on.gif`);
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
            // img1: require('@/assets/binaire/yaourt/yaourtvert_off.gif'),
        };
    },

    methods: {},
};
</script>

<style scoped>
.answer_1 {
    /* background-image: url(var(--bg-img-1)); */
    width: 10vw;
    height: 10vw;
}

.answer_2 {
    background-image: url('~@/assets/binaire/yaourt/yaourtrouge_off.gif');
    width: 10vw;
    height: 10vw;
}
</style>
