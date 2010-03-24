
var NotificationCenter = {
	
	observers: {
		'*': []
	},

	addObserver: function(notification, callback) {
		notification = notification || '*';
		if (!this.observers[notification]) this.observers[notification] = []; 
		this.observers[notification].push(callback);
	},
	
	addObservers: function(observers){
		for(observer in observers) this.addObserver(observer,observers[observer]);
	},
	
	removeObserver: function(notification,callback){
		if (!this.observers[notification]) return;
		for(var i =0;this.observers[notification].length;i++) {
			if(this.observers[notification][i] === callback) delete this.observers[notification][i]; 
		}
	},

	postNotification: function(notification, message) {
		if (this.observers[notification])
			for(observer in this.observers) this.observers[observer](message);
	}

};
