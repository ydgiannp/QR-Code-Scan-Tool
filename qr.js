var app = new Vue({
    el: '#qr',
    data: {
      verified: '',
      inputKey: '',
			correctSound: null,
			wrongSound: null,
			statusImg: '',
			name: '',
			persons: {
				data: [
					{
						phone: "081289939080",
						name: "Meilia Arifah & Sulastri"
					},
					{
						phone: "083823987436",
						name: "Hanif"
					},
					{
						phone: "082113875401",
						name: "Laela"
					},
					{
						phone: "081215812728",
						name: "Yusmanto"
					},
					{
						phone: "08156542801",
						name: "Susiyatiningsih"
					},
					{
						phone: "083148423770",
						name: "Sandi"
					},
					{
						phone: "085740446619",
						name: "Adhi, Rohayati & Helga "
					},
					{
						phone: "085602802848",
						name: "Sudarto, Saryanti, Wisnu & Anisa"
					},
					{
						phone: "088239472801",
						name: "Nuning, Dimas & Elsy"
					},
					{
						phone: "081901511564",
						name: "Harsono, Alfiah, Heri & Herlin"
					},
					{
						phone: "085701555994",
						name: "Inti & Rusono"
					},
					{
						phone: "083838909185",
						name: "Issha & Puspa"
					},
					{
						phone: "087718089730",
						name: "Mahesa, Putra & Siska"
					},
					{
						phone: "081225196676",
						name: "Kurotun, Eko Setyo & Emy"
					},
					{
						phone: "085713198439",
						name: "Ari Setyo & Layli"
					},
					{
						phone: "082334810748",
						name: "Himma"
					},
					{
						phone: "082138724846",
						name: "Karjanto, Endah & Sherpa"
					},
					{
						phone: "081904475659",
						name: "Andi & Tantri"
					},
					{
						phone: "081333322836",
						name: "Andika & Risaka"
					},
					{
						phone: "085642402202",
						name: "Shinta & Sasmito"
					},
					{
						phone: "081390454330",
						name: "Suyanti & Joko"
					},
					{
						phone: "081225145599",
						name: "Ratih, Yoppie & Bintang"
					},
					{
						phone: "08983469584",
						name: "Hastuti & Sudirman"
					},
					{
						phone: "081808080565",
						name: "Suhar & Ngatiyah"
					},
					{
						phone: "081225046755",
						name: "Karmini"
					},
					{
						phone: "08882546160",
						name: "Indri & Affan"
					},
					{
						phone: "085603838077",
						name: "Yustina, Damianus & Bertha"
					},
					{
						phone: "083804855220",
						name: "Tumirah & Antok"
					},
					{
						phone: "085201412100",
						name: "Rohayati & Siti"
					},
					{
						phone: "081226552669",
						name: "Imum & Siti Asmanah"
					},
					{
						phone: "081575572510",
						name: "Titik"
					},
					{
						phone: "081327353225",
						name: "Ning & Wiyono"
					},
					{
						phone: "081390434729",
						name: "Harsumi & Guntur"
					},
					{
						phone: "081228773113",
						name: "Isniwanti, Tanto & Adituo"
					},
					{
						phone: "085742845758",
						name: "Susana, Holy & Winner"
					},
					{
						phone: "081228235557",
						name: "Mulyono & Ulfa"
					},
					{
						phone: "085648259086",
						name: "Pangkat & Lela"
					},
					{
						phone: "085713777399",
						name: "Wilis & Lintang"
					},
					{
						phone: "085640411119",
						name: "Maulin & Maura"
					},
					{
						phone: "081914612451",
						name: "Didik & Wahyu"
					},
					{
						phone: "081567892213",
						name: "Ambar & Eko Pamuji"
					},
					{
						phone: "085641408989",
						name: "Anisah , Nanang & Ajeng"
					},
					{
						phone: "085883382142",
						name: "Hanum, Arief"
					},
					{
						phone: "081284588554",
						name: "Ati, Syaiful, Tasya & Rizky"
					},
					{
						phone: "085710692920",
						name: "Maya & Ipan"
					},
					{
						phone: "0816940941",
						name: "Hamdi, Diah, Gerrard & Kimi"
					},
					{
						phone: "081806733368",
						name: "Nana & Fernando"
					},
					{
						phone: "08558177877",
						name: "Dian & Fahmi"
					},
					{
						phone: "08111700535",
						name: "Uci , Galih & Sasi"
					},
					{
						phone: "081225113311",
						name: "Vera, Ferdy & Felicia"
					},
					{
						phone: "08994819000",
						name: "Fajar & Wiwik"
					},
					{
						phone: "08164285576",
						name: "Yora"
					},
					{
						phone: "085226050422",
						name: "Aryono"
					},
					{
						phone: "081325117084",
						name: "Imam & Wiwin"
					},
					{
						phone: "085329404292",
						name: "Hani"
					},
					{
						phone: "081225278928",
						name: "Kusno"
					},
					{
						phone: "085727777998",
						name: "Yayuk, Adinda & Anis"
					},
					{
						phone: "08121079092",
						name: "Keith Evans & Ryan"
					},
					{
						phone: "0811826748",
						name: "Madison & Mikey"
					}
				]
			}
    },
		mounted: function () {
			this.correctSound = new Audio('correct.wav');
			this.wrongSound = new Audio('wrong.wav');
		},
    methods: {
			checkInput: function (event) {
				let verified = this.persons.data.find(o => o.phone === this.inputKey);

				if(verified){
					this.correctSound.currentTime = 0
					this.correctSound.play()
					this.statusImg = "correct.png"
					this.name = verified.name
				}else {
					this.wrongSound.currentTime = 0
					this.wrongSound.play()
					this.statusImg = "wrong.png"
				}
				this.inputKey = ''

				return false
			}
    }
  })