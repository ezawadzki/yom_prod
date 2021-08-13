<template>
    <div>
        remplissage {{ type }}

        <img :src="require(`@/assets/remplissage/${type}/${type}_on.gif`)" />
        <img :src="require(`@/assets/remplissage/${type}/${type}_off.gif`)" />
    </div>
</template>

<script>
export default {
    name: 'Filling',
    props: ['type'],
    data() {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style scoped>
</style>
