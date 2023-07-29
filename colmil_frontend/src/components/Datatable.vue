<template>
    <table class="table table-striped table-bordered table-sm">
        <thead>
            <tr>
                <th
                    v-for="column in parameters.columns"
                    v-html="title(column)"
                    :key="column.id"
                ></th>
            </tr>
        </thead>
        <tfoot v-show="footer">
            <tr>
                <th
                    v-for="column in parameters.columns"
                    v-html="column.footer"
                    :key="column.id"
                ></th>
            </tr>
        </tfoot>
    </table>
</template>

<script>
window.$ = window.jQuery = require("jquery");
require("datatables.net");
require("datatables.net-bs4");
require("datatables.net-responsive");

export default {
    data() {
        return {
            dataTable: {},
        };
    },
    methods: {
        title(column) {
            return column.title || this.titleCase(column.data);
        },
        titleCase(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
            });
        },
        reload() {
            this.dataTable.ajax.reload();
        },
    },
    computed: {
        parameters() {
            const vm = this;
            let callbacks = {
                createdRow(...args) {
                    vm.$emit("created-row", ...args);
                },
                drawCallback(...args) {
                    vm.$emit("draw", ...args);
                },
                footerCallback(...args) {
                    vm.$emit("footer", ...args);
                },
                formatNumber(...args) {
                    vm.$emit("format", ...args);
                },
                headerCallback(...args) {
                    vm.$emit("header", ...args);
                },
                infoCallback(...args) {
                    vm.$emit("info", ...args);
                },
                initComplete(...args) {
                    vm.$emit("init", ...args);
                },
                preDrawCallback(...args) {
                    vm.$emit("pre-draw", ...args);
                },
                rowCallback(...args) {
                    vm.$emit("draw-row", ...args);
                },
                stateLoadCallback(...args) {
                    vm.$emit("state-load", ...args);
                },
                stateLoaded(...args) {
                    vm.$emit("state-loaded", ...args);
                },
                stateLoadParams(...args) {
                    vm.$emit("state-load-params", ...args);
                },
                stateSaveCallback(...args) {
                    vm.$emit("state-save", ...args);
                },
                stateSaveParams(...args) {
                    vm.$emit("state-save-params", ...args);
                },
            };
            return window.$.extend(
                window.$.fn.DataTable.ext.classes,
                {
                    sWrapper:
                        "dataTables_wrapper container-fluid dt-bootstrap4",
                },
                true,
                {
                    serverSide: true,
                    processing: true,
                    responsive: true,
                    pageLength: 10,
                    lengthMenu: [
                        [5, 10, 20, 50, -1],
                        ["5", "10", "20", "50", "Todos"],
                    ],
                    language: {
                        lengthMenu: "Mostrar _MENU_ registros",
                        zeroRecords: "Sin registros encontrados",
                        info: "Pagina _PAGE_ de _PAGES_",
                        infoEmpty: "Sin registros disponibles",
                        infoFiltered: "(Filtrado de _MAX_ Registros)",
                        search: "Buscar:",
                        paginate: {
                            previous: "Anterior",
                            next: "Siguiente",
                        },
                    },
                },
                this.options,
                {
                    ajax: this.ajax,
                    columns: this.columns,
                },
                callbacks
            );
        },
    },
    props: {
        footer: { default: false },
        columns: { type: Array },
        ajax: { default: "" },
        options: {},
    },
    mounted() {
        this.dataTable = window.$(this.$el).DataTable(this.parameters);
    },
};
</script>