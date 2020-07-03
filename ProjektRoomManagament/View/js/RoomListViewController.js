/**
 * view-controller for raume.html
 *
 * M426: Room Management
 *
 * @author  Nina Hagenbucher, Nikola Matovic
 * @since   2020-05-15
 * @version 1.0
 */

$(document).ready(function () {
    //showMessage("empty", " ");

    /**
     * when opened --> sends data form server to view
     */
    loadRooms();
});

/**
 * loads room data from server
 */
function loadRooms() {
    var searchString = $("#searchbar").val()
    $.ajax({
        url: "https://localhost:44369/api/Room/ListAll/" + searchString,
        dataType: "json",
        type: "GET"
    })
        .done(showRooms)
        .fail(function (xhr, status, errorThrown) {
            $("#MeineRaeume").text("Fehler beim Lesen der Räume.    HTTP error code: " + xhr.status);
        })
}

/**
 * inserts Data in HTML Table
 * @param roomData 
 */

function showRooms(roomData) {

    if (typeof roomData !== 'undefined') {

        var tableData = "";
        $("#MeineRaeume").html(""); //auskommentiert lassen bis zum release

        $.each(roomData, function (id, room) {
            tableData += "<div class='roomBox' id='rooms'>";
            tableData += "<table>";
            tableData += "<tr><td><a>Name:" + room.raumName + "</a><a id='roomName'></a></td></tr>";
            tableData += "<tr><td><a>Plätze:" + room.anzahlPlaetze + "</a><a id='seats'></a></td></tr>";
            tableData += "<tr><td><a>Preis:" + room.kosten + ".-</a><a id='price'></a></td></tr>";
            tableData += "<tr><td><button id='infoButton' type='submit' onclick='goToInfoPage(" + room.id + ")'>INFO</button></td></tr>";
            tableData += "</table>";
            tableData += "</div>";
        });
        $("#MeineRaeume").html(tableData);
    } else {
        $("#MeineRaeume").html("Keine Räume gefunden");
    }

}

function goToInfoPage(roomId) {
    window.location.href = "infoPage.html?roomId="+roomId;
}

