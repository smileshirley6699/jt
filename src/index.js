import Vue from 'Vue';
import index from './vues/index/index.vue';
import vrouter from 'vue-router';
import vsource from 'vue-resource';
import  logo from "./imgs/logo.png";
import  text from "./vues/components/text.vue";
import commoncss from "./css/common.css";

document.getElementById("link_favicon_img").href = logo;
Vue.use(vrouter);
Vue.use(vsource);
const router =  new vrouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/components/text',
            component: text
        }
    ]
});
new Vue({
    router : router,
    el : "#index_content",
    components: { index }
});
