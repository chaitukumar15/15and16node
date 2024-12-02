

fetch("http://localhost:3003/data", {
    method: "POST",
    headers: {
"Content-Type": "application/json"

    },
    body: JSON.stringify({
        "name": "chaitanya",
        "password": "chaitanya"
      }),
    redirect: "follow"
  })
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




  var a={
    a:"10"
  }

  a.n=10