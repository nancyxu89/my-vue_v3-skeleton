<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import * as io from 'socket.io-client'
export default {
	data() {
		return {}
	},
	created() {
		let socket = io('http://localhost:19800')
		socket.on('news', function(data) {
			console.log(data)
			socket.emit('request', { my: 'data' })
		})
		socket.on('receive', function(data) {
			console.log(data)
			socket.emit('received', data)
		})
		socket.on('disconnect', function() {
			console.log('disconnect')
		})
		window.EventManager.fire('say')
	}
}
</script>
