import Vue from "vue";
import VueRouter from "vue-router";


import Animation from "../components/Animation";



import ImageMapSvg from "@/components/ImageMapSvg";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: ImageMapSvg, },
        {path: "/animation", component:Animation},
    ]
})
