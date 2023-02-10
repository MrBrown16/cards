class Card extends HTMLElement{
    constructor(){
        super();
        var shadow = this.attachShadow({mode:'open'}); 
        let card = document.createElement('div');
        card.className = "card";

        let value = document.createElement('div');
        value.className = "value";



        let num = this.getAttribute('data-number');
        num = Number(num);
        if (num == '1') num = 'A';
        let tisztek = ['J','Q','K'];
        
        if (num>10) num = tisztek[num-11];
        let ertek = document.createElement('div');
        ertek.className = "number";
        ertek.innerHTML = num

        let jelek = ['♠','♥','♦','♣'];
        
        
        let jel = jelek[Number(this.getAttribute('data-sign'))];
        console.log("jel:",jel)
        let sign = document.createElement('div');
        sign.className = "sign";
        sign.innerHTML = jel
        if(((jel=='♦') || (jel == '♥')) && (this.getAttribute('blue')==null && this.getAttribute('green')==null)){
            card.classList.add('red');
        }
        //♠	 ♥	♦	♣
        value.appendChild(ertek);
        value.appendChild(sign);

        card.appendChild(value);
        card.appendChild(sign.cloneNode(true));
        card.appendChild(value.cloneNode(true));

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel','stylesheet');
        linkElem.setAttribute('href','card.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(card);
    }
}
customElements.define('my-card',Card);