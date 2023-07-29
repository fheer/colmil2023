
<template>
    <footer class="footer">
        <span class="float-left">
            <a href="https://www.emi.edu.bo" target="_blank">EMI</a>
            - Todos los derechos reservados.
        </span>
        <span class="float-right app-footername">{{title}}</span>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            msg: "Footer",
            title: process.env.VUE_APP_TITLE,
        };
    },
};
</script>