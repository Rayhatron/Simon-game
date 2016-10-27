window.onload = function () {
var app = new Vue({
  el: '#container',
  data: {
    message: 'Hello Vue!',
    power: false,
    strictMode: false,
    gameOn: false,
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
  				console.log("Looking for a different square.");
  				this.createSequence();
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
  				var audio = document.getElementById(self.sequence[self.i]);
  				self.i++;
  				if(self.i<=self.sequence.length){
       				audio.play();
  					self.blinkSequence();
  				}else{
  					self.i = 0;	
  				}
  			}, 1000);
  			setTimeout(function (){
				self.blink1 = false;
	            self.blink2 = false;
	            self.blink3 = false;
	            self.blink4 = false;
  			}, 2000);
  			
  			
        
  	},
  	setUserSequence: function(squareNum){
  		var self =  this;
  		if(this.userSequence.length<this.sequence.length){
  			this.userSequence.push(squareNum);
  			var audio = document.getElementById(squareNum);	
  			audio.play();
  		}
  		if(this.strictMode === true && this.compareSequences() === false){
  				var audio = document.getElementById(5);	
  				audio.play();
  				this.userSequence = [];
				this.sequence = [];
				this.count = 0;
				this.randomSquare = 0;
				this.i = 0;

  				setTimeout(function(){
  					self.startGame();
  				}, 2000);
  				
  				console.log("FAiled on strict" + this.count  + "seq " + this.sequence + "ussq " + this.userSequence);
  				return;
  			}

  		if(this.compareSequences() === false){
  			var audio = document.getElementById(5);	
  			audio.play();
  			this.userSequence = [];
  			setTimeout(function(){
  				self.blinkSequence();

  			},1000);
  			return false;
  		}else{
  			if(this.userSequence.length === this.sequence.length && this.compareSequences()){
  				this.userSequence = [];
  				setTimeout(function(){
  					self.createSequence();

  				}, 2000);
  				console.log("user sequ: " + this.userSequence);
  			}
  			
  		}
  		
  		
  		console.log(this.userSequence);
		
  	},
  	compareSequences: function(){
		var i, l = Math.min(this.sequence.length, this.userSequence.length); 

		  for (i=0; i<l; i++) {
		    if (this.sequence[i] !== this.userSequence[i]) return false;
		  }
		  return true;
  	},
  	startGame: function (){
  		console.log("Starting");
  		this.gameOn = true;
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
  	},

  	resetGame: function(){
  		var self = this;
		this.userSequence = [];
		this.sequence = [];
		this.count = 0;
		this.randomSquare = 0;
		this.i = 0;
		this.gameOn = false;

		setTimeout(function(){
			self.startGame();
		}, 2000);
  				
  		},
  	powerOff: function (){
  		if(this.power == false){
	  		this.userSequence = [];
			this.sequence = [];
			this.count = 0;
			this.randomSquare = 0;
			this.i = 0;
			this.gameOn = false;
  		}
  	}
  }
  

})
}