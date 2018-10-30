<template>
    <div>
        <div>add page</div>
        <button @click="buildTest">click</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {}
	},
	methods: {
		buildTest() {
			console.info('buildTest')
			axios.defaults.headers.common['Authorization'] = 'Basic cm9vdDoxMjM0NTY='
			let url =
				'http://02ee3ed4.ngrok.io/job/test103002/buildWithParameters?from_env="dev"'
			axios
				.post(url)
				.then(res => {
					console.info(res)
				})
				.catch(err => {
					console.info(err)
				})
		}
	}
}
</script>
<style scoped>
</style>
