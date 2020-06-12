$(document).ready(function () {
    var roomID = $.urlParam('roomId');
    showInfo(roomID);
});




function showInfo(roomId) {
    $.ajax({
        url: "https://localhost:44369/api/Room/GetRoom/" + roomId,
        dataType: "json",
        type: "GET"
    })
        .done(showSingleRoom)
        .fail(function (xhr, status, errorThrown) {
            $("#MeineRaeume").text("Fehler beim Lesen des Raumes.    HTTP error code: " + xhr.status);
        })
}


function showSingleRoom(singleRoom) {

    if (typeof singleRoom !== 'undefined') {
        var tableData = "";
        $("#pasteRaum").html("");

        tableData += "<table id='roomInfo'>";
        tableData += "<tr>";
        tableData += "<td><a id='roomName'>" + singleRoom.raumName + "</a></td>";
        tableData += "<td><button id='backButton' type='button' onclick='goBack()'>BACK</button></td>";
        tableData += "</tr>";
        tableData += "<tr><td><a>Plätze:" + singleRoom.anzahlPlaetze + "</a><a id='seats'></a></td><td><a>Preis:" + singleRoom.kosten + ".-</a><a id='price'></a></td></tr>";
        tableData += "<tr><td><a>Beschreibung:" + singleRoom.raumBeschreibung + "</a></td></tr>";
        tableData += "<tr><td><a id='beschreibung'></a></td>";
        tableData += "<tr>";
        tableData += "<tr><td><a>Ausstattung:" + singleRoom.ausstattung + "</a></td></tr>";
        tableData += "<tr><td><a id='ausstattung'></a></td></tr>";
        tableData += "<tr>";
        tableData += "</table>";

        $("#pasteRaum").html(tableData);
    } else {
        $("#pasteRaum").html("Keine Raum gefunden gefunden");
    }

}

function goBack() {
    window.location.href = "startPage.html";
}