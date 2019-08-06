class ProxyFactory{
    
    static criate(objeto, props, acao){

        return new Proxy(objeto, { 

            get(target, prop, receiver){

                if(props.includes(prop) && ProxyFactory._seEhFuncao(target[prop])){

                    return function(){
                        console.log(`A ${prop} foi interceptada`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){

                if(props.includes(prop)){
                
                    target[prop] = value;    
                    acao(target);                
                }
                
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _seEhFuncao(funcao){

        return typeof(funcao) == typeof(Function);
    }
}