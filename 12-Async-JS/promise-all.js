
// Promise All
function getClients(){ 
    return new Promise( resolve => {
        console.log('Descargando clientes . . .')
        setTimeout(() => resolve('clients data'), 2000)
    })
}

function getProducts(){
    return new Promise(resolve => {
        console.log('Descargando productos . . .')
        setTimeout(() => resolve('products data'), 3000)
    })
}


const appSerial = (async () => {
    try {   
        const responseClients = await getClients();
        console.log(responseClients);
        const responseProducts = await getProducts();
        console.log(responseProducts);
        // tarda en total 5 segundos
    }
    catch(error){
        console.log(error)
    }
})();

const appParallel = (async () => {
    try {   
        const totalData = await Promise.all([getClients(), getProducts()]);
        console.log(totalData); 
        // tarda en total 3 segundos
    }
    catch(error){
        console.log(error)
    }
})();
