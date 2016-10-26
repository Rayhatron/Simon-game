window.onload = function () {
var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello Vue!',
    power: false,
    strictMode: false,
    count: "00",
    blink1: false,
    blink2: false,
    blink3: false,
    blink4: false
  },
  methods: {
  	toggleStrictMode: function (){
  		this.strictMode = !this.strictMode;
  	},
  	startGame: function (){
  		console.log("Starting");
  		this.blink1 = true;
  		this.blink2 = true;
  		this.blink3 = true;
  		this.blink4 = true;
  		var self = this;
            setTimeout(function(){
                self.blink1 = false;
                self.blink2 = false;
                self.blink3 = false;
                self.blink4 = false;
            }, 1000);
  	}
  }

})
}