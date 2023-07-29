<template>
    <!-- ========== Left Sidebar start ========== -->
    <b-sidebar id="sidebar-1" shadow width="240px">
        <!-- LOGO -->
        <div class="topbar-left">
            <div class="text-center">
                <a class="logo">
                    <img
                        class="app-logo"
                        width="240px"
                        src="@/assets/images/colmil.png"
                    />
                </a>
                <a class="logo-sm">
                    <img
                        class="app-logo"
                        width="240px"
                        src="@/assets/images/colmil.png"
                    />
                </a>
                <br />
            </div>
        </div>
        <div>
            <!--- Divider -->
            <div class="user-details">
                <div class="text-center">
                    <img
                        :src="auth.URLFoto"
                        alt=""
                        class="rounded-circle"
                    />
                </div>
                <div class="user-info">
                    <div class="dropdown"></div>

                    <p class="text-muted m-0">
                        {{ auth.Persona }}
                    </p>
                    <p class="text-muted m-0 small">
                        <b>Tecnico de Sistemas</b>
                    </p>
                </div>
            </div>
            <Menu />
        </div>
    </b-sidebar>
</template>

<script>
import Menu from "./Menu";

export default {
    name: "Sidebar",
    data() {
        return {
            msg: "Sidebar",
            auth: {},
        };
    },
    components: {
        Menu,
    },
    mounted() {
        this.auth = JSON.parse(localStorage.getItem("persona"));
    },
};
</script>