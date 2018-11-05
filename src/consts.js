let backendHost = "";
const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost' || hostname === '127.0.0.1') {
    backendHost = 'http://localhost:8080/';
}
if(hostname === 'url.de.homolog.com'){
    backendHost = 'url.de.homolog.com';
}
if(hostname === 'url.de.prod.com'){
    backendHost = 'url.de.prod.com';
}

export default{
    API: backendHost
} 
