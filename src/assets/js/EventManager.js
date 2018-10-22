/** @format */

let EventManager = function() {
	this.handlers = {}
}

EventManager.prototype = {
	constructor: EventManager,
	register: function(name, callback) {
		if (!this.handlers[name]) {
			this.handlers[name] = []
		}
		this.handlers[name].push(callback)
	},
	fire: function(name) {
		if (this.handlers[name]) {
			this.handlers[name][0]()
		}
	}
}

export default EventManager
