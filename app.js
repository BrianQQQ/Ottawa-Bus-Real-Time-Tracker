const appID = "9969c839";
const apiKey = "6371972d313a53b530c2a79fa8d8587d";
const format = "json";

function initMap() {
  var location = {lat: 24.1055745, lng: 120.6768162};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: location
  });
}
window.addEventListener("load", initMap);


document.querySelector('form').onsubmit = () => {
  let stopNo = document.querySelector('#stop_number').value;
  const url = `https://api.octranspo1.com/v2.0/GetNextTripsForStopAllRoutes?appID=${appID}&apiKey=${apiKey}&stopNo=${stopNo}&format=${format}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const show = data.GetRouteSummaryForStopResult.Routes.Route;
      for (let i=0; i < show.length; i++){
        let routeNo = show[i].RouteNo;
        let routeInfo = document.querySelector("#result");
        let routeNode = document.createElement("p");
        routeNode.innerHTML = routeNo;
        routeInfo.appendChild(routeNode);
      }
      
    })
    .catch(error => {
      console.error(error);
    });

  return false;
};
