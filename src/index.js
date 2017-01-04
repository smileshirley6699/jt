import Vue from 'Vue';
import App from './vues/AppVue/AppVue.vue';
import vrouter from 'vue-router';
import vsource from 'vue-resource';
import  First from  "./vues/first.vue"
import  Second from  "./vues/second.vue";
import  facvicon from "./imgs/logo.png";
import commoncss from "./css/common.css";

document.getElementById("link_favicon_img").href = facvicon;
Vue.use(vrouter);
Vue.use(vsource);
const curRouter =  new vrouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: Second
        }
    ]
});
var indexVue = new Vue({
    router : curRouter,
    el : "#app1",
    components: { App }
});
