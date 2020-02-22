document
  .getElementById("searchSubmit")
  .addEventListener("click", function(event) {
    event.preventDefault();

    //Get form values
    let equation = document.getElementById("equationInput").value;
    let s = document.getElementById("selector");
    let operation = s.options[s.selectedIndex].value;
    if (equation === "") return;

    //Set url
    let url = "https://newton.now.sh/" + operation + "/" + equation;
    console.log(url);

    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return {
            text: "Error calling the Newton API service: " + response.statusText
          };
        }
        return response.json();
      })
      .then(function(json) {
        // update DOM with response
        updateResult(json.result);
      });
  });

function updateResult(answer) {
  document.getElementById("result").textContent = answer;
}
