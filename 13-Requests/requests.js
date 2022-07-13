
/* REQUESTS ------------------------------------------------------------------------------------------------------------------- */


//XHR GET
const xhr = new XMLHttpRequest;							// creates new object
const url = "https://api-to-call.com/endpoint";

xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}
xhr.open("GET", url);       // opens request
xhr.send();								  // sends object

//XHR POST
const xhr = new XMLHttpRequest;							    // creates new object
const URL = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});				// converts data to a string

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}
xhr.open('POST', URL);      // opens request
xhr.send(data);							// sends object




//fetch() GET
fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
  return jsonResponse;
})

//fetch() POST
fetch('https://api-to-call.com/endpoint', {method: 'POST', body: JSON.stringify({id: '200'})}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
  return jsonResponse;
});




//async await GET
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint')
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  } catch(error) {
    console.log(error);
  }
};

//async await POST
const postData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {method: 'POST', body: JSON.stringify({id: 200})})
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  } catch(error) {
    console.log(error);
  }
};