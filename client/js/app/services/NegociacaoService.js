class NegociacaoService {
    
    constructor(){

        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {
 
        return this._http
                .get('negociacoes/semana')
                .then(negociacoes => {

                    console.log(negociacoes);

                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                }).catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações dessa semana')})};
        
    obterNegociacoesDaSemanaAnterior() {
       
        return this._http
            .get('negociacoes/anterior')
            .then(negociacoes => {

                console.log(negociacoes);

                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            }).catch(erro => {
                console.log(erro)
                throw new Error('Não foi possivel importar as negociações da semana anterior')})};    

    obterNegociacoesDaSemanaRetrasada() {

        return this._http.get('negociacoes/retrasada')
            .then(negociacoes => {

                console.log(negociacoes);

                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                }).catch(erro => {
                    console.log(erro)
                    throw new Error('Não foi possivel importar as negociações da semana retrasada')})}; 
                    
    obterNegociacoes(){

        return Promise.all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()])
                .then(periods => {
                    let negociacoes = periods
                                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])

                                console.log(negociacoes)
                                return negociacoes;
                }).catch(erro => {

                    throw new Error(erro)
                    });

    }
}