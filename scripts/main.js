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
    randomSquare: 1,
    i: 0

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
  			this.blinkSequence();
  		}else{
  			if(this.randomSquare === this.sequence[this.sequence.length-1]){
  				this.chooseSquare();
  				console.log("Looking for a different square.");
  			}else{
  				this.sequence.push(this.randomSquare);
  				this.count++;
  				this.blinkSequence();
  			}
  		}
  		console.log("sequence is: " + this.sequence);
  		
  	},
  	blinkSequence: function(){
  		var self = this;
  			setTimeout(function(){
  				self["blink" + self.sequence[self.i]] = true;
  				self.i++;
  				if(self.i<self.sequence.length){
  					self.blinkSequence();
  				}else{
  					self.i = 0;
  					setTimeout(function(){
		                self.blink1 = false;
		                self.blink2 = false;
		                self.blink3 = false;
		                self.blink4 = false;
        			}, 1000);
  				}
  			}, 1000);
  				
            
  	},
  	startGame: function (){
  		console.log("Starting");
  		this.createSequence();
  		/*this.("blink" + "1") = true;
  		this.blink2 = true;
  		this.blink3 = true;
  		this.blink4 = true;
  		var self = this;
            setTimeout(function(){
                self.blink1 = false;
                self.blink2 = false;
                self.blink3 = false;
                self.blink4 = false;
            }, 1000);*/
  	}
  }

})
}