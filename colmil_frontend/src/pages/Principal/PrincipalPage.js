import MainService from "@/services/MainService.js";

export default {
    name: "PrincipalPage",
    data() {
        let ss = new MainService();
        return {
            msg: "PrincipalPage",
            ss: ss,
            ajax: {
                "url": ss.indexPersona(),
                headers: ss.getToken(),
            },
        };
    },
    methods: {
    },
    components: {
    },
    mounted() {
        var persona = JSON.parse(localStorage.getItem('persona'));
        if (!persona) {
          this.$router.push('/Login');
        }
    }
};
