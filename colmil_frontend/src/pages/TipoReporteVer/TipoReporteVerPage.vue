<template>
    <div class="content">
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.TipoReporteVer") }}</h4>
        </div>
        <div class="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title text-dark m-0">
                                    Detalle de Registros
                                </h3>
                            </div>

                            <div class="container-fluid">
                                <div class="card-body row">
                                    <div class="col-md-8 offset-md-2">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-12">
                                                <div class="form-group">
                                                    <label for="TipoReporte"
                                                        >Seleccione el
                                                        Reporte</label
                                                    >

                                                    <select
                                                        class="form-control"
                                                        id="TipoReporte"
                                                        name="TipoReporte"
                                                        @change="
                                                            verParametros()
                                                        "
                                                        v-model="
                                                            reporte.TipoReporte
                                                        "
                                                    >
                                                        <option
                                                            v-for="tp in tipoReportes"
                                                            :value="tp.id"
                                                            :key="tp.id"
                                                        >
                                                            {{ tp.TipoReporte }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div
                                                class="col-xs-12 col-md-6"
                                                v-if="enable.UnidadAcademica"
                                            >
                                                <div
                                                    class="form-group"
                                                    id="selectUA"
                                                >
                                                    <label
                                                        for="UndidadAcademica"
                                                        >Unidad Académica</label
                                                    >
                                                    <select
                                                        class="form-control"
                                                        id="UnidadAcademica"
                                                        name="UnidadAcademica"
                                                        v-model="
                                                            reporte.UnidadAcademica
                                                        "
                                                    >
                                                        <option
                                                            v-for="ua in unidadAcademicas"
                                                            :value="ua.id"
                                                            :key="ua.id"
                                                        >
                                                            {{
                                                                ua.UnidadAcademica
                                                            }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div
                                                class="col-xs-12 col-md-6"
                                                v-if="enable.Persona"
                                            >
                                                <div
                                                    class="form-group"
                                                    id="selectPersona"
                                                >
                                                    <label
                                                        class="font-weight-bold"
                                                        for="Persona"
                                                        >Persona:</label
                                                    >
                                                    <select
                                                        name="persona"
                                                        v-model="
                                                            reporte.Persona
                                                        "
                                                        id="Persona"
                                                        style="width: 100%"
                                                    ></select>
                                                    <ul
                                                        class="
                                                            parsley-errors-list
                                                            filled
                                                        "
                                                        id="parsley-id-19"
                                                        v-if="errorBag.Persona"
                                                    >
                                                        <li
                                                            class="
                                                                parsley-required
                                                            "
                                                        >
                                                            {{
                                                                errorBag.Persona
                                                            }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                class="col-xs-12 col-md-6"
                                                v-if="enable.Desde"
                                            >
                                                <div
                                                    class="form-group"
                                                    id="selectDesde"
                                                >
                                                    <label for="Desde"
                                                        >Desde</label
                                                    >
                                                    <div
                                                        class="
                                                            input-group
                                                            m-b-15
                                                        "
                                                    >
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                            name="Desde"
                                                            id="Desde"
                                                            v-model="
                                                                reporte.Desde
                                                            "
                                                        />
                                                        <span
                                                            class="
                                                                input-group-addon
                                                            "
                                                            ><i
                                                                class="
                                                                    mdi
                                                                    mdi-calendar
                                                                "
                                                            ></i
                                                        ></span>
                                                    </div>
                                                    <ul
                                                        class="
                                                            parsley-errors-list
                                                            filled
                                                        "
                                                        id="parsley-id-19"
                                                        v-if="errorBag.Desde"
                                                    >
                                                        <li
                                                            class="
                                                                parsley-required
                                                            "
                                                        >
                                                            {{ errorBag.Desde }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                class="form-group col-md-6"
                                                v-if="enable.Hasta"
                                            >
                                                <div
                                                    class="form-group"
                                                    id="selectHasta"
                                                >
                                                    <label for="Hasta"
                                                        >Hasta</label
                                                    >
                                                    <div
                                                        class="
                                                            input-group
                                                            m-b-15
                                                        "
                                                    >
                                                        <input
                                                            type="date"
                                                            class="form-control"
                                                            name="Hasta"
                                                            id="Hasta"
                                                            v-model="
                                                                reporte.Hasta
                                                            "
                                                        />
                                                        <span
                                                            class="
                                                                input-group-addon
                                                            "
                                                            ><i
                                                                class="
                                                                    mdi
                                                                    mdi-calendar
                                                                "
                                                            ></i
                                                        ></span>
                                                    </div>
                                                    <ul
                                                        class="
                                                            parsley-errors-list
                                                            filled
                                                        "
                                                        id="parsley-id-19"
                                                        v-if="errorBag.Hasta"
                                                    >
                                                        <li
                                                            class="
                                                                parsley-required
                                                            "
                                                        >
                                                            {{ errorBag.Hasta }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-md-12">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <a
                                                            href="#"
                                                            class="
                                                                btnwith
                                                                btn btn-success
                                                            "
                                                            @click.prevent="
                                                                generaReporte
                                                            "
                                                            ><i
                                                                class="
                                                                    fas
                                                                    fa-download
                                                                "
                                                            ></i>
                                                            GENERAR</a
                                                        >
                                                    </div>
                                                    <div class="col-md-6">
                                                        <button
                                                            type="reset"
                                                            class="
                                                                btnwith
                                                                btn btn-primary
                                                            "
                                                            @click="setReset"
                                                        >
                                                            <i
                                                                class="
                                                                    fas
                                                                    fa-undo-alt
                                                                "
                                                            ></i>
                                                            LIMPIAR
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TipoReporteVerPage.js"></script>
