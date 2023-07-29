<template>
    <div id="app">
        <v-app id="inspire">
            <v-app-bar
                app
                color="#003f8a"
                dark
                flat
                v-if="this.$router.currentRoute.name !== 'Login'"
            >
                <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    v-if="!$vuetify.breakpoint.mdAndUp"
                >
                </v-app-bar-nav-icon>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon @click.prevent="cerrarSesion">mdi-logout</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer
                color="white"
                v-model="drawer"
                :permanent="$vuetify.breakpoint.mdAndUp"
                app
                flat
                v-if="this.$router.currentRoute.name !== 'Login'"
            >
                <template v-slot:prepend>
                    <v-list-item two-line>
                        <v-list-item-avatar>
                            <img :src="auth.URLFoto" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                auth.Persona
                            }}</v-list-item-title>
                            <v-list-item-subtitle
                                >Sesion Iniciada</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <v-divider></v-divider>
                <MenuVuetify />
            </v-navigation-drawer>
            <!-- Sizes your content based upon application components -->
            <v-main>
                <!-- If using vue-router -->

                <router-view></router-view>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import MenuVuetify from "./partials/MenuVuetify.vue";
export default {
    name: "app",
    components: {
        MenuVuetify,
    },
    data: () => ({
        drawer: false,
        auth: {},
    }),
    mounted() {
        this.auth = JSON.parse(localStorage.getItem("persona"));
    },
    methods: {
        cerrarSesion() {
            localStorage.clear();
            this.$router.push("/Login");
            if (this.$msal.isAuthenticated()) {
                this.$msal.signOut();
            }
            this.$router.go();
        },
    },
};
</script>


<style lang="scss">
@import "./assets/css/app.css";
@import "./assets/scss/app.scss";
</style>