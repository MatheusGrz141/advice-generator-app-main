class Controller{
    constructor(){
        document.querySelector("#gerarMensagem").addEventListener('click',()=>{
            this.gerarTexto();
        })
        this.gerarTexto();
    }
    
    
    gerarTexto(){
        
        
        fetch("https://api.adviceslip.com/advice")
        .then((resposta)=>{
            resposta.json()
            .then((respostaJson)=>{
                let novoModel = new Model(respostaJson.slip.id , respostaJson.slip.advice.toLowerCase() )
                let novaView = new View(novoModel)
                document.querySelector("#container").innerHTML = novaView.template();
            })
        })
        
        
    }
}