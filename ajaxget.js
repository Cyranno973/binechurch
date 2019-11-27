function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);

}
var lien = "https://www.googleapis.com/calendar/v3/calendars/bbi4d2ace1e2ql0o1tm02upmdo@group.calendar.google.com/events?key=AIzaSyDwrp7ITwhN2TXJv2GmMQN2ab7bJKKMbj8&maxResults=20&orderBy=startTime&singleEvents=true&timeMin=2019-11-27T10:00:00-07:00";




var calendarElt = document.querySelector('.events-listing-content');
var titreElts = document.querySelectorAll(".event-list-item-info");
var dateAujourdui = new Date();
dateAujourdui.getDate();
var dateJour = dateAujourdui.getDate();
//console.log(dateJour);

dateAujourdui.getMonth();
dateAujourdui.getFullYear();
//console.log(`Nous sommes le :${dateAujourdui.getDate()} ${dateAujourdui.getMonth()} ${dateAujourdui.getFullYear()} `);

// console.log(titreElts);

ajaxGet(lien, function (reponse) {

  var eventCalends = JSON.parse(reponse);

  eventCalends.items.forEach(function (eventCalend) {

    var reponseDate = eventCalend.start.dateTime;
    // console.log(`${reponseDate.charAt(8)}${reponseDate.charAt(9)}`);
    var result = reponseDate.charAt(8) + reponseDate.charAt(9);
   // console.log(result);

var dateEvent = new Date (eventCalend.start.dateTime);
var moisEvent = dateEvent.getMonth();
var joursEvent = dateEvent.getDay();
var heuresEvent = dateEvent.getHours();
var minutesEvent = dateEvent.getMinutes();
//formatage de la date pour que les minutes affiche le 0 supplementaire
if (heuresEvent <10) {heuresEvent = "0" + heuresEvent};
if (minutesEvent <10) {minutesEvent = "0" + minutesEvent};
//console.log(heuresEvent+'H'+minutesEvent+'min');

var months = ['JANV','FEVR','MARS','AVRI','MAI','JUIN','JUIL','AOUT',' SEPT','OCT','NOV','DEC'];
var days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

 var mois = months[moisEvent];
 var jours = days[joursEvent];
//console.log(mois);
//console.log(jours);

    const innerContent =
      `
        <div class="event-list-item event-dynamic">
                            <div class="event-list-item-date">
                                <span class="event-date">
                                <span class="event-day">${result}</span>
                                <span class="event-month">${mois}${` ${dateEvent.getYear()-100}`}</span></span>
                            </div>
                            <div class="event-list-item-info">
                                <div class="lined-info">
                                  <h4><a href="#" class="event-title">${eventCalend.summary}</a></h4>
                                </div>
                  
                                <div class="lined-info">
                                  <span class="meta-data">
                                    <i class="fa fa-clock-o"></i> ${jours}
                                    <span class="event-time">${heuresEvent} H${minutesEvent}</span>
                                    <span style="background-color:#3bafda;color:white;padding: 0.3em .3em .3em;
                                    font-size: 10px;"class="label label-primary">A venir</span>
                                  </span>
                                </div>
                  
                                <div class="lined-info event-location">
                                  <span class="meta-data">
                                    <i class="fa fa-map-marker"></i>
                                    <span class="event-location-address">${eventCalend.location}</span>
                                  </span>
                                </div>
                            </div>
          </div>
      `;
    
    calendarElt.innerHTML += innerContent;
  

  });
});