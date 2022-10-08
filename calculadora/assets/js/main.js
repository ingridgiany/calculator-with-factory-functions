function criaCalculadora() {
  return {
    display: document.querySelector('.display'),



    //methods
    inicia() {
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.realizaConta()
        }
      })
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    clearDisplay() {
      this.display.value = ''
    },

    realizaConta(){
      let conta = this.display.value 

      try {
        conta = eval(conta)

        if(!conta){
          alert('Conta inválida')
          return
        }

        this.display.value = String(conta)
      }catch(e) {
        alert('Conta inválida')
        return
      }
    },

  

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm()
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      })
    },

    btnToDisplay(valor) {
      this.display.value += valor

    },

  }
}
const calculadora = criaCalculadora()
calculadora.inicia()
