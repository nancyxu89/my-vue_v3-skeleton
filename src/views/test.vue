<template>
    <div>
        <div>add page</div>
        <button @click="buildTest">click</button><br/>
        <button @click="buildJob">build job</button><br/>
        <button @click="buildTestTest">test</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {}
	},
	methods: {
		buildJob() {
			axios.defaults.headers.common['Authorization'] = 'Basic cm9vdDoxMjM0NTY='
			let url = 'http://3584e06d.ngrok.io/job/test103002/buildWithParameters'
			axios
				.post(url)
				.then(res => {
					console.info(res.data)
				})
				.catch(err => {
					console.info(err)
				})
		},
		buildTest() {
			console.info('buildTest')
			axios.defaults.headers.common['Authorization'] = 'Basic cm9vdDoxMjM0NTY='
			let url =
				'http://3584e06d.ngrok.io/job/test103002/buildWithParameters?from_env="dev"'
			axios
				.post(url)
				.then(res => {
					console.info(res)
				})
				.catch(err => {
					console.info(err)
				})
		},
		buildTestTest() {
			//			axios.defaults.headers.common['Authorization'] = 'Basic cm9vdDoxMjM0NTY='
			//			axios
			//				.get('http://3584e06d.ngrok.io/api/json?pretty=true')
			//				.then(res => {
			//					console.info(res.data)
			//				})
			//				.catch(err => {
			//					console.info(err)
			//				})
			axios
				.get('https://github.com/nancyxu89/my-vue_v3-skeleton')
				.then(res => {
					console.info(res.data)
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
