var app = new Vue({
    el: '#qr',
    data: {
      verified: '',
      inputKey: '',
			correctSound: null,
			wrongSound: null,
			statusImg: ''
    },
		mounted: function () {
			this.correctSound = new Audio('correct.wav');
			this.wrongSound = new Audio('wrong.wav');
		},
    methods: {
			checkInput: function (event) {
				if(this.inputKey === this.verified){
					this.correctSound.currentTime = 0
					this.correctSound.play()
					this.statusImg = "correct.png"
				}else {
					console.log(this.inputKey)
					this.wrongSound.currentTime = 0
					this.wrongSound.play()
					this.statusImg = "wrong.png"
				}
				this.inputKey = ''

				return
			}
    }
  })