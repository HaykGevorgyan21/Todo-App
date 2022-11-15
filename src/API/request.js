export default function request(
  url,
  method,
  body = null,
  headers,
  colback,
  errorColback
) {
  let paramas = {
    method: method,
    headers: headers,
    redirect: "follow",
  };
  if(method !== 'GET'){
    paramas.body = JSON.stringify(body)
  }
  fetch(url, paramas)
    .then((data) => data.json())
    .then((response) => colback(response))
    .catch((error) => errorColback(error));
}





