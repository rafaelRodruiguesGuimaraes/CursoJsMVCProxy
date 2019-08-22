class Teste{

        
    get(){
        
        let negocio = [

            new Negociacao(new Date(), 100, 2),
            new Negociacao(new Date(), 340, 3),
            new Negociacao(new Date(), 600, 1)
        ]
        
        negocio.sort((a,b) => a.quantidade - b.quantidade);
        negocio.forEach(negociacao => console.log(negociacao));
    };
};