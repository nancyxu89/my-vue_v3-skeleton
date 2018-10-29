/** @format */

import Vue from "vue";
import Skeleton from "./views/Skeleton2.vue";

export default new Vue({
    components: {
        Skeleton
    },
    render: h => h(Skeleton)
}).$mount("#app")