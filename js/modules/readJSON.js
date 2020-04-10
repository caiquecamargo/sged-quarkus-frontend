export default function readJSON(documentName) {
  const request = new XMLHttpRequest();
  request.open("GET", documentName, true);
  request.responseType = 'json';
  request.send();
  let content;
  request.onload = () => {
    content = request.response;
    console.log(content);
  }
  console.log(content);
}