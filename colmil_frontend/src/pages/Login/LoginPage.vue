<template>
    <div class="widescreen accountbg">
        <div class="wrapper-page">
            <div class="card card-pages">
                <div class="card-body">
                    <h3 class="text-center m-t-0 m-b-15">
                        <a href="#" class="logo logo-admin">
                            <img src="@/assets/images/colmil.png" />
                        </a>
                    </h3>
                    <h4 class="text-center m-t-0 app-name">
                        <b>Sistema Académico</b>
                    </h4>

                    <form class="form-horizontal m-t-20">
                        <div class="form-group">
                            <div class="col-12">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    v-model="loginRequest.email"
                                />
                                <ul
                                    class="parsley-errors-list filled"
                                    id="parsley-id-19"
                                    v-if="errorBag.email"
                                >
                                    <li class="parsley-required">
                                        {{ errorBag.email }}
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div class="col-12">
                                <input
                                    class="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    v-model="loginRequest.password"
                                />
                                <ul
                                    class="parsley-errors-list filled"
                                    id="parsley-id-19"
                                    v-if="errorBag.password"
                                >
                                    <li class="parsley-required">
                                        {{ errorBag.password }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br />

                        <div class="form-group text-center">
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                    @click.prevent="login"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./LoginPage.js"></script>
<style scoped>
.btn-microsoft {
    background-color: #dc3a03;
    border-color: #aa2d02;
    color: white;
}
.accountbg {
    background: #003f8a;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
}
</style>