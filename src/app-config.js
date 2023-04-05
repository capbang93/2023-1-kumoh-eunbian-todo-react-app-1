let backendHost;

const hostname = window && window.location.hostname && window.location;

console.log("hostname: " + hostname);
if(hostname == "localhost"){
    backendHost = "http://localhost:8080";
}
export  const   APLBASE_URL = `{backendHost}`;