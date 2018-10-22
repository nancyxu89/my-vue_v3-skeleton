/** @format */

import Vue from 'vue'
import Skeleton from './views/Skeleton.vue'

// export default new Vue({
//     components: {
//         Skeleton
//     },
//     render: h => h(Skeleton)
// }).$mount("#app")

export default new Vue({
	components: {
		Skeleton
	},
	template: '<skeleton />'
})
