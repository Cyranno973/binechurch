function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function() {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);

}
var lien = "https://www.googleapis.com/calendar/v3/calendars/bbi4d2ace1e2ql0o1tm02upmdo@group.calendar.google.com/events?key=AIzaSyDwrp7ITwhN2TXJv2GmMQN2ab7bJKKMbj8&maxResults=20&orderBy=startTime&singleEvents=true&timeMin=2019-11-12T10:00:00-07:00";
var calendarElt = document.getElementById('calendar');
ajaxGet(lien,
  function(reponse) {

    var eventCalends = JSON.parse(reponse);

    eventCalends.items.forEach(function(eventCalend) {
      var titreElt = document.createElement("h3");
      titreElt.textContent = eventCalend.summary;
      calendarElt.appendChild(titreElt);
    });
  });