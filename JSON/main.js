//JSON
//JavaScript Object Notation

function main1() {

   fetch("https://jsonplaceholder.typicode.com/todos/2")
       .then(response => response.json())
       .then(json => console.log(json))

}
