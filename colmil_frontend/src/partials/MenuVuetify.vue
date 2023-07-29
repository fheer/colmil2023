<template>
    <v-list nav dense>
        <v-list-item-group>
            <v-list-group >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>mdi-buffer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Personas</v-list-item-title>
                    </v-list-item-content>
                </template>
                <router-link
                class="black--text text--accent-4"
                to="Persona"
                active-class="blue--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Cadete")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </router-link>
                <router-link
                class="black--text text--accent-4"
                to="Docente"
                active-class="blue--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Docente")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </router-link>                
            </v-list-group>
            

            <router-link
                class="black--text text--accent-4"
                to="Asignar"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-key</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Asignar")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link
                class="black--text text--accent-4"
                to="Rol"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-key</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Rol")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link
                class="black--text text--accent-4"
                to="Profile"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Profile")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link
                class="black--text text--accent-4"
                to="TipoReporte"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-note-text</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.TipoReporte")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <v-list-group >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>mdi-buffer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Paramétricas</v-list-item-title>
                    </v-list-item-content>
                </template>
                <router-link
                    class="black--text text--accent-4"
                    to="Materia"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-school</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Materia")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="Paralelo"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-sitemap</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Paralelo")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="Area"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-checkerboard</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Area")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                
                <router-link
                    class="black--text text--accent-4"
                    to="Rol"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Rol")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link> 
                <router-link
                    class="black--text text--accent-4"
                    to="Puesto"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-octagram-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Puesto")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>           
                <router-link
                    class="black--text text--accent-4"
                    to="Proveedor"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Proveedor")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="Departamento"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-google-maps</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.Departamento")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="EstadoAsignacion"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-counter</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.EstadoAsignacion")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="EstadoActivo"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-tilde</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.EstadoActivo")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="GrupoActivo"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-hexagon-multiple</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.GrupoActivo")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link
                    class="black--text text--accent-4"
                    to="TipoReporte"
                    active-class="blue--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-note-text</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                $t("nav.TipoReporte")
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list-group>
            <router-link
                class="black--text text--accent-4"
                to="TipoReporteVer"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-file-chart</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.TipoReporteVer")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: "MenuVuetify",
    data() {
        return {
            msg: "MenuVuetify",
        };
    },
};
</script>