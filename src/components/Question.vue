<template>
    <div>
        <div>
            {{ text }}
            <br />
            <button type="button" @click.prevent="goToStep()">continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: ['id', 'text'],
    data() {
        return {
            currentStep: 0,
        };
    },
    computed: {},
    methods: {
        goToStep: function () {
            // this.$store.dispatch('setUserStep', step);
            this.$emit('clicked');
        },
    },
};
</script>

<style scoped>
</style>
