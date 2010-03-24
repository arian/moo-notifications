
var NotificationCenter = {
	observers: {
		'*': []
	},

	addObserver: function(notification, callback) {
		notification = notification || '*';
		if (!this.observers[notification]) this.observers[notification] = []; 
		this.observers[notification].push(callback);
	},

	postNotification: function(notification, message) {
		if (this.observers[notification] || notification === '*') {
			this.observers[notification].each(function(observer) {
				observer(message);
			});
		};
	}

};
