class HttpService{

    get(url) {

        return new Promise((response, reject) =>{

            let xhr = new XMLHttpRequest();
        
            xhr.open('GET', url);
            
            xhr.onreadystatechange = () => {
                    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {   
                        
                        response(JSON.parse(xhr.responseText));  
                    } else {
                        
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        })

    }

    post(url, dado) {

        return new Promise((resolve, reject) => {
            let xhr = XMLHttpRequest();
            xhr.open('POST', url, true)
            xhr.setRequestHeader('Content-type', 'aplication/json');

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    
                    if(xhr.status == 200){

                        resolve(JSON.parse(xhr.responseText));
                    } 
                    
                    reject(xhr.responseText)
                }
            }

            xhr.send(JSON.stringify(dado));
        });
    }
}