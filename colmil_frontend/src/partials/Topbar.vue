
<template>
    <div class="topbar">
        <!-- Button mobile view to collapse sidebar menu -->
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <ul class="list-inline menu-left mb-0">
                    <li class="float-left">
                        <b-button
                            pill
                            variant="info"
                            class="button-menu-mobile open-left waves-light waves-effect"
                            v-b-toggle.sidebar-1
                        >
                            <i class="mdi mdi-menu"></i>
                        </b-button>
                    </li>
                </ul>

                <ul class="nav navbar-right float-right list-inline">
                    <li class="dropdown">
                        <a
                            href=""
                            class="profile waves-effect waves-light notification-icon-box"
                            data-toggle="dropdown"
                            aria-expanded="true"
                        >
                            <img
                                :src="auth.URLFoto"
                                alt="user-img"
                                class="rounded-circle"
                            />
                        </a>
                        <ul class="dropdown-menu-right dropdown-menu">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    class="dropdown-item"
                                >
                                    {{ auth.Persona }}
                                </a>
                            </li>

                            <li class="dropdown-divider"></li>
                            <li>
                                <button
                                    class="dropdown-item"
                                    @click.prevent="cerrarSesion"
                                >
                                    Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Topbar",
    data() {
        return {
            msg: "Topbar",
            auth: {},
        };
    },
    methods: {
        cerrarSesion() {
            localStorage.clear();
            this.$router.push("/Login");
            if (this.$msal.isAuthenticated()) {
                this.$msal.signOut();
            }
        },
    },
    mounted() {
        this.auth = JSON.parse(localStorage.getItem("persona"));
    },
};
</script>
<style scoped>
.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0;
}
</style>