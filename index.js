class blockText extends HTMLElement {
   reverse = ""
   size = {
      height: "100px",
      width: "350px"
   }
   speed = ".1s"
   state = 0
   faces = {
      face_1: {
         backgroundColor: "#FF2C70",
         content: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #ffffff;"></path> </g></svg>`
      },
      face_2: {
         backgroundColor: "#d3d3d3",
         content: `<h2>question?</h2>`
      },
      face_3: {
         backgroundColor: "#d3d3d3",
         content: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #ffffff;"></path> </g></svg>`
      },
      face_4: {
         backgroundColor: "#FF2C70",
         content: `<p> dignissimos voluptates facere reprehenderit delectus laudantium moll</p>`
      },
   }
   arrowSize = [30, 70]
   
   constructor() {
      super()

      this.biuld()
   }

   biuld() {

      this.attachShadow({mode: "open"})

      this.getAttributeValues()
      this.getContents()
      this.insertStyle()
      this.insertHTML()
      this.activateClickAnimation()
   }

   getContents() {
      const numberNames = ["one", "two", "three", "four"]

      // get children elements
      for (var i = 0; i < 4; i++) {
         const element = this.querySelectorAll(`face-${numberNames[i]}`)[0]

         if (element) {
            if (element.innerHTML.length > 0) {
               try {
                  this.faces[`face_${i +1}`].content = element.innerHTML
               }  catch(e) {}
            }

            if (element.getAttribute("color") != null) {
               try {
                  this.faces[`face_${i+1}`].backgroundColor = element.getAttribute("color")
               } catch(e) {}
            }
         }
      }
   }

   getAttributeValues() {
      this.rowReverse_Attribute()
      this.speed_Attribute()
      this.size_Attribute()
      this.arrowSize_Attribute()
   }
   arrowSize_Attribute() {
      if (this.getAttribute("arrow-size")) {
         this.arrowSize[0] = Number(this.getAttribute("arrow-size"))
         this.arrowSize[1] = 100 - Number(this.getAttribute("arrow-size"))
      }
   }
   size_Attribute() {
      this.getAttribute("height")? 
         this.size.height = this.getAttribute("height"): 
         true

      this.getAttribute("width")? 
         this.size.width = this.getAttribute("width"): 
         true
   } // used in "insertStyle"
   rowReverse_Attribute() {
      let reverse = this.getAttribute("row-reverse")
      reverse == "true" ? 
         this.reverse = "row-reverse": 
         this.reverse = "";
   } // used in "insertHTML"
   speed_Attribute() {
      let speed = this.getAttribute("speed-animation")
      speed? 
         this.speed = speed:
         this.speed = ".1s" 
   } // used in "insertStyle"


   insertStyle() {
      const style = document.createElement("style")
      style.textContent = `

*{
  margin: 0px;
  padding: 0px;
}

.color-1 {background-color: ${this.faces.face_1.backgroundColor} !important;}
.color-2 {background-color: ${this.faces.face_2.backgroundColor} !important;}
.color-3 {background-color: ${this.faces.face_3.backgroundColor} !important;}
.color-4 {background-color: ${this.faces.face_4.backgroundColor} !important;}


p {
  font-size: 20px;
}

svg {
   height: 70%;
   width: 70%;
}


.bloco {
  height: ${this.size.height};
  width: ${this.size.width};

  display: flex;
}
.row-reverse {flex-direction: row-reverse !important;}


.setas {
  width: ${this.arrowSize[0]}%;
  height: 100%;

  top: -4.5%;
  
  position: relative;
  transition-duration: calc(4*${this.speed});

  transform-style: preserve-3d;
}

[class^="para"] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: lighgray;

  text-align: center;
  
  transform-origin: bottom;
}
.para-cima {position: absolute;}
.para-baixo {
  position: relative;

  transform: rotateX(90deg);
}



.frases {
  width: ${this.arrowSize[1]}%;
  height: 100%;
  
  top: -4.5%;
  
  position: relative;
  transition-duration: calc(4*${this.speed});

  transform-style: preserve-3d;
}

[class^="texto"] {
  height: 100%;
  width: 100%;
  position: absolute;   
  background-color: lighgray;

  transform-origin: top;
}
.texto-frente {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.texto-emcima {  
  transform: rotateX(90deg);
}


.invertido {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  text-align: center;
  
  transform: rotateX(180deg);

  height: 100%;
  width: 100%;
}

      `
      this.shadowRoot.appendChild(style)
   }

   insertHTML() {
      var bloco = document.createElement('div')
      bloco.setAttribute('class', `bloco ${this.reverse}`)
      bloco.innerHTML = `
         <div class="setas">
            <div class="para-cima color-1">
               ${this.faces.face_1.content}
            </div>
            <div class="para-baixo color-3">
               ${this.faces.face_3.content}
            </div>
         </div>
         <div class="frases">
            <div class="texto-frente color-2">${this.faces.face_2.content}</div>
            <div class="texto-emcima color-4"><div class="invertido">${this.faces.face_4.content}</div></div>
         </div>
      `

      this.shadowRoot.appendChild(bloco)
   }

   activateClickAnimation() {
      
      // Obtendo referências dos elementos dentro do shadow DOM
      const frasesElement = this.shadowRoot.querySelector('.frases')
      const setasElement = this.shadowRoot.querySelector('.setas')

      // Usando arrow function para preservar o contexto de 'this'
      setasElement.addEventListener('click', () => {
         if (this.state === 0) {
            // Vira o bloco de informações
            frasesElement.style.transform = 'rotateX(90deg)'
            frasesElement.style.top = '45%'
      
            // Vira o bloco de setas
            setasElement.style.transform = 'rotateX(90deg)'
            setasElement.style.top = '-55.15%'
            setasElement.style.bottom = '40%'
            
            this.state = 1
         } else {
            // Volta o bloco de texto à posição normal
            frasesElement.style.transform = 'rotateX(0deg)'
            frasesElement.style.top = '-4.5%'
      
            // Vira o bloco de setas para a posição normal
            setasElement.style.transform = 'rotateX(0deg)'
            setasElement.style.top = '-4.5%'
            
            this.state = 0
         }
      })
   }
   clickHandler() {
   }
}
customElements.define("block-text", blockText);


class starBlocks extends HTMLElement {
   stars = []
   cont = [0, 0, 0, 0, 0]
   starsAmount;
   fixedStar;
   
   constructor() {
      super()

      this.biuld()
   }

   biuld() {
      this.attachShadow({mode: "open"})

      this.insertStyle()
      this.insertHTML()
      this.getAttributeValues()
      this.activiateAnimations()
   }

   insertHTML() {
      var caixa = document.createElement("div")
      caixa.classList.add("caixa")

      for (var i = 0; i <= 4; i++) {
         var star = document.createElement("div")
         star.classList.add(`estrela-${i}`)

         var ativada = document.createElement("div")
         ativada.classList.add(`face-ativada-${i}`)
         var icon_um = document.createElement("div")
         icon_um.classList.add(`icon`)

         var desativada = document.createElement("div")
         desativada.classList.add(`face-desativada-${i}`)
         var icon_dois = document.createElement("div")
         icon_dois.classList.add(`icon`)


         ativada.appendChild(icon_um)
         star.appendChild(ativada)

         desativada.appendChild(icon_dois)
         star.appendChild(desativada)

         caixa.appendChild(star)
         this.stars.push(star)
      }

      this.shadowRoot.appendChild(caixa)
   }

   insertStyle() {
      const style = document.createElement("style")
      style.textContent = `
      
.caixa {
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 250px;
}

.caixa {
  height: 50px;
  width: 250px;

  display: flex;
}


[class^="estrela-"] {
  width: 100%;
  height: 100%;

  top: -4.5%;
  
  position: relative;
  transition-duration: .2s;

  transform-style: preserve-3d;
}

[class^="face-"] {
  display: flex;
  align-items: center;

  justify-content: center;
  height: 100%;
  width: 100%;

  text-align: center;
  
  transform-origin: bottom;
  position: absolute;
}
.icon {
  height: 95%;
  width: 95%;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

[class^="face-ativada"] {
  background-color: gray;

} 
[class^="face-ativada"] .icon {
  background-color: lightgray;

}

[class^="face-desativada"] {
  transform: rotateX(91deg);
  background-color: lightgray;
}
[class^="face-desativada"] .icon {
   transform: rotateX(180deg);
   background-color: yellow;
   z-index: 9999;
}




      `

      this.shadowRoot.appendChild(style)
   }

   getAttributeValues() {
      const fixed = this.getAttribute('fixed');
      fixed? 
         this.fixedStar = fixed-1:
         this.fixedStar = -1
      this.saiuBloco(4)
   }



   inverterBloco(valor) {
      this.cont[valor] == 0?
         this.ativarBloco(valor):
         this.desativarBloco(valor)
   }
   ativarBloco(valor) {
      this.stars[valor].style.transform = 'rotateX(90deg)'
      this.stars[valor].style.top = '-55.15%'
      this.stars[valor].style.bottom = '40%'
      
      
      this.cont[valor] = 1
   }
   desativarBloco(valor) {
      this.stars[valor].style.transform = 'rotateX(0deg)'
      this.stars[valor].style.top = '-4.5%'
      
      this.cont[valor] = 0
   }


   async clicouBloco(n) {
      if (n == this.fixedStar) {
         n = -1
      }

      for (var i = 0; i < this.stars.length; i++) {
         i <= n?
            this.ativarBloco(i):
            this.desativarBloco(i)

         await new Promise(resolve => setTimeout(resolve, 40))
      }
      this.fixedStar = n
      this.setAttribute('fixed', n+1)
   }
   async entrouBloco(n) {
      for (var i = 0; i < this.stars.length; i++) {
         i <= n?
            this.ativarBloco(i):
            this.desativarBloco(i)             
      }
   }
   saiuBloco(n) {
      for (var i = 0; i < this.stars.length; i++) {
         i > this.fixedStar?
            this.desativarBloco(i):
            this.ativarBloco(i)
      }
   }




   activiateAnimations() {
      for (let c=0; c<this.stars.length; c++) {
         this.stars[c].addEventListener('click', () => { 
            this.clicouBloco(c)
         });
         this.stars[c].addEventListener('mouseenter', () => {
            this.entrouBloco(c)
         })
         this.stars[c].addEventListener('mouseleave', () => {
            this.saiuBloco(c)
         })
      }
   }
}
customElements.define("star-blocks", starBlocks)


// class buttonBlock extends HTMLElement {
//    constructor() {
//       super()

//       this.build()
//    }
   
//    build() {
//       this.attachShadow({mode: "open"})
//    }
// }


class buttonBlock extends HTMLElement {
   reverse = ""
   size = {
      height: "100px",
      width: "350px"
   }
   speed = ".1s"
   state = 0
   faces = {
      face_1: {
         backgroundColor: "#FF2C70",
         content: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #ffffff;"></path> </g></svg>`
      },
      face_2: {
         backgroundColor: "#d3d3d3",
         content: `<h2>question?</h2>`
      },
      face_3: {
         backgroundColor: "#d3d3d3",
         content: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #ffffff;"></path> </g></svg>`
      },
      face_4: {
         backgroundColor: "#FF2C70",
         content: `<p> dignissimos voluptates facere reprehenderit delectus laudantium moll</p>`
      },
   }
   arrowSize = [30, 70]
   
   constructor() {
      super()

      this.biuld()
   }

   biuld() {

      this.attachShadow({mode: "open"})

      this.getAttributeValues()
      this.getContents()
      this.insertStyle()
      this.insertHTML()
      this.activateClickAnimation()
   }

   getContents() {
      const numberNames = ["one", "two", "three", "four"]

      // get children elements
      for (var i = 0; i < 4; i++) {
         const element = this.querySelectorAll(`face-${numberNames[i]}`)[0]

         if (element) {
            if (element.innerHTML.length > 0) {
               try {
                  this.faces[`face_${i +1}`].content = element.innerHTML
               }  catch(e) {}
            }

            if (element.getAttribute("color") != null) {
               try {
                  this.faces[`face_${i+1}`].backgroundColor = element.getAttribute("color")
               } catch(e) {}
            }
         }
      }
   }

   getAttributeValues() {
      this.rowReverse_Attribute()
      this.speed_Attribute()
      this.size_Attribute()
      this.arrowSize_Attribute()
   }
   arrowSize_Attribute() {
      if (this.getAttribute("arrow-size")) {
         this.arrowSize[0] = Number(this.getAttribute("arrow-size"))
         this.arrowSize[1] = 100 - Number(this.getAttribute("arrow-size"))
      }
   }
   size_Attribute() {
      this.getAttribute("height")? 
         this.size.height = this.getAttribute("height"): 
         true

      this.getAttribute("width")? 
         this.size.width = this.getAttribute("width"): 
         true
   } // used in "insertStyle"
   rowReverse_Attribute() {
      let reverse = this.getAttribute("row-reverse")
      reverse == "true" ? 
         this.reverse = "row-reverse": 
         this.reverse = "";
   } // used in "insertHTML"
   speed_Attribute() {
      let speed = this.getAttribute("speed-animation")
      speed? 
         this.speed = speed:
         this.speed = ".1s" 
   } // used in "insertStyle"


   insertStyle() {
      const style = document.createElement("style")
      style.textContent = `

*{
  margin: 0px;
  padding: 0px;
}

.color-1 {background-color: ${this.faces.face_1.backgroundColor} !important;}
.color-2 {background-color: ${this.faces.face_2.backgroundColor} !important;}
.color-3 {background-color: ${this.faces.face_3.backgroundColor} !important;}
.color-4 {background-color: ${this.faces.face_4.backgroundColor} !important;}


p {
  font-size: 20px;
}

svg {
   height: 70%;
   width: 70%;
}


.bloco {
  height: ${this.size.height};
  width: ${this.size.width};

  display: flex;
}
.row-reverse {flex-direction: row-reverse !important;}


.setas {
  width: ${this.arrowSize[0]}%;
  height: 100%;

  top: -4.5%;
  
  position: relative;
  transition-duration: calc(4*${this.speed});

  transform-style: preserve-3d;
}

[class^="para"] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: lighgray;

  text-align: center;
  
  transform-origin: bottom;
}
.para-cima {position: absolute;}
.para-baixo {
  position: relative;

  transform: rotateX(90deg);
}



.frases {
  width: ${this.arrowSize[1]}%;
  height: 100%;
  
  top: -4.5%;
  
  position: relative;
  transition-duration: calc(4*${this.speed});

  transform-style: preserve-3d;
}

[class^="texto"] {
  height: 100%;
  width: 100%;
  position: absolute;   
  background-color: lighgray;

  transform-origin: top;
}
.texto-frente {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.texto-emcima {  
  transform: rotateX(90deg);
}


.invertido {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  text-align: center;
  
  transform: rotateX(180deg);

  height: 100%;
  width: 100%;
}

      `
      this.shadowRoot.appendChild(style)
   }

   insertHTML() {
      var bloco = document.createElement('div')
      bloco.setAttribute('class', `bloco ${this.reverse}`)
      bloco.innerHTML = `
         <div class="setas">
            <div class="para-cima color-1">
               ${this.faces.face_1.content}
            </div>
            <div class="para-baixo color-3">
               ${this.faces.face_3.content}
            </div>
         </div>
         <div class="frases">
            <div class="texto-frente color-2">${this.faces.face_2.content}</div>
            <div class="texto-emcima color-4"><div class="invertido">${this.faces.face_4.content}</div></div>
         </div>
      `

      this.shadowRoot.appendChild(bloco)
   }

   activateClickAnimation() {
      
      // Obtendo referências dos elementos dentro do shadow DOM
      const frasesElement = this.shadowRoot.querySelector('.frases')
      const setasElement = this.shadowRoot.querySelector('.setas')

      // Usando arrow function para preservar o contexto de 'this'
      setasElement.addEventListener('click', () => {
         if (this.state === 0) {
            // Vira o bloco de informações
            frasesElement.style.transform = 'rotateX(90deg)'
            frasesElement.style.top = '45%'
      
            // Vira o bloco de setas
            setasElement.style.transform = 'rotateX(90deg)'
            setasElement.style.top = '-55.15%'
            setasElement.style.bottom = '40%'
            
            this.state = 1
         } else {
            // Volta o bloco de texto à posição normal
            frasesElement.style.transform = 'rotateX(0deg)'
            frasesElement.style.top = '-4.5%'
      
            // Vira o bloco de setas para a posição normal
            setasElement.style.transform = 'rotateX(0deg)'
            setasElement.style.top = '-4.5%'
            
            this.state = 0
         }
      })
   }
   clickHandler() {
   }
}
customElements.define("button-block", buttonBlock)
