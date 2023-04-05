class View{
    constructor(novoModel){
        this.novoModel =novoModel;
    }

    template(){
        return`<h1>ADVICE #${this.novoModel.getId}</h1>
        <p>"${this.novoModel.getTexto}"</p>
        
   
        `
    }
}