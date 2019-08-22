if (!Array.prototype.includes) {

    console.log('Polyfill para Array.includes aplicando.')

    Array.prototype.includes = (elemento) => 
        this.indexOf(elemento) != -1;
    }