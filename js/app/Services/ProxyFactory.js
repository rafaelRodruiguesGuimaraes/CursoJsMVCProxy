class ProxyFactory{
    
    static criate(objeto, props, acao){

        return new Proxy(objeto, {

            get(target, prop, receiver){

                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){

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
                    
                    acao(target);
                    target(prop) = value;
                }
                
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}