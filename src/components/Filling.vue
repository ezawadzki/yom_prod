<template>
    <div class="filling">
        <v-style>
            .answer_1 { background-image: url({{ img_off }}); } .answer_1:hover
            { background-image: url({{ img_on }}); } .answer_1:hover ~ .answer_1
            { background-image: url({{ img_on }});}
        </v-style>
        <b-row align-h="center">
            <b-col class="list-answers">
                <div class="answer answer_1"></div>

                <div class="answer answer_1"></div>

                <div class="answer answer_1"></div>

                <div class="answer answer_1"></div>

                <div class="answer answer_1"></div>
            </b-col>
        </b-row>
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

<style lang="scss">
.filling {
    .answer {
        transition: all 0.1s ease-out;
        box-sizing: border-box;
        width: 25%;
        // margin-bottom: 20px;
        padding: 0px 10px;
        width: 170px;
        height: 170px;
        @include media-breakpoint-down(sm) {
            background-size: 18vw;
            width: 18vw;
            height: 18vw;
        }
    }
    .answer:hover {
        cursor: pointer;
    }

    .list-answers {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        box-sizing: border-box;
        margin: 0px -10px;
    }

    @include media-breakpoint-down(sm) {
        .col-sm-1 {
            width: auto;
        }
    }
}
</style>
