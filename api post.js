const formData = new FormData();



// formData.append("title", "The Matrix");
// formData.append("body", "1999");
const json = JSON.stringify({
    title: "title",
    body: "body"
});

const response = new XMLHttpRequest();
response.open("POST", "https://jsonplaceholder.typicode.com/posts");
response.send(json);
// response.send(formData);

response.onload = (e) => {
    
    console.log(response.status);
   console.log(response.json().body);
}
// console.warn(formData.JSON);