import {createApp} from "vue";
import {createRouter, createWebHistory} from 'vue-router'
import Main from "./Main.vue";
import About from "./About.vue";

import "./index.scss";

import App from "./App.vue";

createApp(App).use(createRouter({
	history: createWebHistory(),
	routes: [{
		path: '/',
		component: Main
	}, {
		path: '/about',
		component: About
	}]
})).mount("#app");
