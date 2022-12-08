class Gra
{
	constructor(plansza, pole)
	{
		this.plansza = plansza;
		this.pole = pole;
		this.nr_rundy = 1;
		this.wygrany = "";
		this.ksztalt = "";
	}
	
	koniec_gry(wygrany)
	{
		const elmnt = document.getElementById("div1");
		const n_h1 = document.createElement("h1");
		let w_h1 = '';
		if(wygrany != 'code'){
			w_h1 = "Wygrał/o "+wygrany+"!";
		}else{
			w_h1 = "Remis!";
		}
		
		const h1_Attr = document.createAttribute("class");
		h1_Attr.value="koniec";
		n_h1.setAttributeNode(h1_Attr);
		
		n_h1.innerText = w_h1;
		
		elmnt.appendChild(n_h1);
		
		const b = document.createElement("button");
		b.addEventListener('click', function(){
			location.reload();
		});
		const b_Attr = document.createAttribute("class");
		const w_b = document.createTextNode("Zagraj jeszcze raz");
		b_Attr.value = "restart";
		b.setAttributeNode(b_Attr);
		
		b.appendChild(w_b);
		
		elmnt.appendChild(b);
		this.wygrany = "koniec";
	}
	
	menedzer(nrp)
	{
		if(this.wygrany!="koniec")
		{
			if(this.nr_rundy%2==0)
			{
				pole = "X";
				this.wygrany = "krzyżyk"
				this.ksztalt = "krzyzyk";
			}
			else
			{
				pole = "O";
				this.wygrany = "kółko"
				this.ksztalt = "kolko";
			}
			const btn = document.getElementById(nrp);
			const imgElmnt = document.createElement("img");
			
			const imgAttr = document.createAttribute("class");
			imgAttr.value = this.ksztalt;
			imgElmnt.setAttributeNode(imgAttr);
			
			const im = document.getElementById("i"+nrp);
			
			btn.replaceChild(imgElmnt, im);
			
			plansza[(nrp-1)] = pole;

			for(let i=0; i<7; i+=3){
				let j = i+1;
				let k = j+1;
				if((plansza[i] == plansza[j]) && (plansza[i] == plansza[k])){
					console.log("kon1");
					console.log(plansza[i]+i+", "+plansza[j]+j+", "+plansza[k]+k);
					this.koniec_gry(this.wygrany);
					return;
				}
			}
			
			for(let i=0; i<=2; i++){
				let j = i + 3;
				let k = j + 3;
				if(plansza[i] == plansza[j] && plansza[i] == plansza[k]){
					console.log("kon2");
					console.log(plansza[i]+", "+plansza[j]+", "+plansza[k]);
					this.koniec_gry(this.wygrany);
					return;
				}
			}
			
			for(let i=0; i<=6; i+=6){
				let j = 4;
				let k = ((i==0) ? 8 : 2); 
				
				if(plansza[i] == plansza[j] && plansza[i] == plansza[k]){
					console.log("kon3");
					console.log(plansza[i]+i+", "+plansza[j]+j+", "+plansza[k]+k);
					this.koniec_gry(this.wygrany);
					return;
				}
			}

			this.nr_rundy++;
			if(this.nr_rundy == 10){
				console.log(this.nr_rundy);
				this.koniec_gry('code');
			}
		}
	}
	
	przycisk1()
	{
		this.menedzer(1);
	}
	
	przycisk2()
	{
		this.menedzer(2);
	}
	
	przycisk3()
	{
		this.menedzer(3);
	}
	
	przycisk4()
	{
		this.menedzer(4);
	}
	
	przycisk5()
	{
		this.menedzer(5);
	}
	
	przycisk6()
	{
		this.menedzer(6);
	}
	
	przycisk7()
	{
		this.menedzer(7);
	}
	
	przycisk8()
	{
		this.menedzer(8);
	}
	
	przycisk9()
	{
		this.menedzer(9);
	}
}

var plansza = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var pole = "...";

var TaGra = new Gra(plansza, pole);