
/* Promises */

function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if (!error) {
                resolve([{id: 1, name: 'juan'}, {id: 2, name: 'sebastian'}]);
            } else {
                reject('fatal error in process');
            }   
        }, 2000);
    });
}


/* then / catch */
function asyncCallThenCatch() {
    console.log('calling...');
    resolveAfter2Seconds()
        .then(result => console.log(result))
        .catch(err => console.log(err))
}
asyncCallThenCatch();


/* async / await */
async function asyncCall() {
    console.log('calling . . .');
    try {
        const result = await resolveAfter2Seconds();
        console.log(result);	// expected output: 'resolved'	
    } catch (error){
        console.log(error);
    }
};
asyncCall();



/*

Promises
    |_ pending
    |_ success
    |_ errored

*/
