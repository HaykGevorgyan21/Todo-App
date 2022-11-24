export default function request(
  url,
  method,
  body = null,
  headers,
  colback,
  errorColback,
  id = ""
) {
  let paramas = {
    method: method,
    headers: headers,
    redirect: "follow",
  };
  if (method !== "GET") {
    paramas.body = JSON.stringify(body);
  }
  fetch(`${url}${id}`, paramas)
    .then((data) => data.json())
    .then((response) => colback(response))
    .catch((error) => errorColback(error));
}
