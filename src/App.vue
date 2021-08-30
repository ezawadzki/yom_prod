<template>
    <v-app id="app">
        <!-- <app-navigation></app-navigation> -->

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation,
    },
};
</script>

<style lang="scss" >


.application {
    background-image: url('./assets/navigation/fond_canson/fond_canson_1920.jpg') !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: 'pangolin';
}

.application--wrap {
    background-image: url('./assets/navigation/encadrement/encadrement1.png') !important;

    background-repeat: no-repeat;
    background-size: 100% 100%;
    @include media-breakpoint-down(sm) {
        background-image: none !important;
    }
}
</style>
