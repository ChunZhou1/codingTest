//The code should be momified as follow:
var server_echo;
var json = {
  json: {
    a: 1,
    b: 2,
  }, //we do not need to convert to string
  delay: 3,
};

try {
  fetch("/echo/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json), //convert to string here
  })
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    })
    .then(function (data) {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw new Error("postRequest " + "/echo/" + " error!");
      } else {
        server_echo = data.echo;
        server_echo.forEach((element) => console.log(element)); //because the fetch return a promise, server_echo is valid here
        alert(data);
        return data;
      }
    });
} catch (error) {
  console.log(error);
}
