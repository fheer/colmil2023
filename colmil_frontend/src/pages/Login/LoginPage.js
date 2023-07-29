import MainService from "@/services/MainService.js";
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios';
import msal from 'vue-msal'

Vue.use(VueAxios, axios)

Vue.use(msal, {
	auth: {
		clientId: process.env.VUE_APP_MSAL_CLIENT_ID,
		tenantId: process.env.VUE_APP_MSAL_TENANT_ID,
		redirectUri: process.env.VUE_APP_MSAL_REDIRECT_URI
	}
});


export default {
	name: 'LoginPage',
	data() {
		let ss = new MainService();
		return {
			ss: ss,
			loginRequest: {},
			errorBag: {}
		};

	},
	props: {
		msg: String
	},
	methods: {
		login() {
			this.ss.login(this.loginRequest)
				.then(
					(result) => {
						console.log(result);
						localStorage.setItem('persona', JSON.stringify(result.data.data));
						localStorage.setItem('token', JSON.stringify(result.data.token));
						this.$router.push('/');
						this.$router.go();
						/*var persona = JSON.parse(localStorage.getItem('persona'));
						console.log(persona)*/
					}
				)
				.catch((error) => {
					this.errorBag = error.response.data.errors;
					this.$bvToast.toast(
						'Problema al Iniciar Sesion',
						{
							title: 'Error',
							variant: 'danger',
							autoHideDelay: 5000
						}
					)
				});
		},
		authenticate() {
			if (!this.$msal.isAuthenticated()) {
				this.$msal.signIn();
			}
		}
	},
	mounted() {
		var persona = JSON.parse(localStorage.getItem('persona'));
		if (persona) {
			localStorage.clear();
		}
		if (this.$msal.isAuthenticated()) {
			console.log(this.$msal.data);
			let loginTokenRequest = {
				"token": this.$msal.data.user.accountIdentifier,
				"email": this.$msal.data.user.userName,
			};
			this.ss.loginToken365(loginTokenRequest)
				.then(
					(result) => {
						console.log(result);
						localStorage.setItem('persona', JSON.stringify(result.data.data));
						localStorage.setItem('token', JSON.stringify(result.data.token));
						this.$router.push('/');
						this.$router.go();
					}
				)
				.catch((error) => {
					this.errorBag = error.response.data.errors;
					this.$bvToast.toast(
						'Problema al Iniciar Sesion',
						{
							title: 'Error',
							variant: 'danger',
							autoHideDelay: 5000
						}
					)
					this.$msal.signOut();
				});
		} else {
			console.log("no esta logeeado")
		}
	}
}