window.onload = function () {
var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello Vue!',
    power: false,
    strictMode: false,
    count: 0,
    blink1: false,
    blink2: false,
    blink3: false,
    blink4: false,
    sequence: [],
    userSequence: [],
    randomSquare: 1

  },
  methods: {
  	toggleStrictMode: function (){
  		this.strictMode = !this.strictMode;
  	},
  
  	chooseSquare: function(){
		this.randomSquare = Math.floor((Math.random() * 4) + 1);
  		console.log(this.randomSquare);
  	},
  	createSequence: function(){
  		this.chooseSquare();
  		if(this.count === 0){
  			this.sequence.push(this.randomSquare);
  			this.count++;
  		}else{
  			if(this.randomSquare === this.sequence[this.sequence.length-1]){
  				this.chooseSquare();
  				console.log("Looking for a different square.");
  			}else{
  				this.sequence.push(this.randomSquare);
  				this.count++;
  			}
  		}
  		console.log("sequence is: " + this.sequence);
  		
  	},
  	startGame: function (){
  		console.log("Starting");
  		this.createSequence();
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