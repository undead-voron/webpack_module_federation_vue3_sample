import {createApp} from "vue";

import "./index.css";

import App from "./App.vue";
import Main from './Main.vue'
import About from './About.vue'
import {createRouter, createWebHistory} from "vue-router";

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
