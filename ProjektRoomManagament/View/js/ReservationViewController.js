/**
 * view-controller for reservation.html
 *
 * M426: Reservation List
 *
 * @author  Nina Hagenbucher
 * @since   2020-06-16
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
 * @param form the form with the data
 */
function loadRooms() {
    var searchString = $("#searchbar").val()
    $.ajax({
        url: "https://localhost:44369/api/Reservation/NextSevenDaysReservation/" + searchString,
        dataType: "json",
        type: "GET"
    })
        .done(showRooms)
        .fail(function (xhr, status, errorThrown) {
            $("#MeineRaeume").text("Fehler beim Lesen der Räume.    HTTP error code: " + xhr.status);
        })
}

// Todo: IDs anpassen
function showRooms(roomData) {

    if (typeof roomData !== 'undefined') {

        var tableData = "";
        $("#reservationList").html(""); //auskommentiert lassen bis zum release

        $.each(roomData, function (id, room) {
            tableData += "<div class='roomBox' id='rooms'>";
            tableData += "<table>'";
            tableData += "<tr><td><a>Datum:" + room.date + "</a><a id='date'></a></td></tr>";
            tableData += "<tr><td><a>Zeit:" + room.timeStart + "</a><a id='timeStart'></a></td></tr>";
            tableData += "<tr><td><a>Zeit:" + room.timeEnd + "</a><a id='timeEnd'></a></td></tr>";
            tableData += "<tr><td><a>Name:" + room.raumName + "</a><a id='roomName'></a></td></tr>";
            tableData += "<tr><td><a>Plätze:" + room.organizer + "</a><a id='organizer'></a></td></tr>";
            tableData += "<tr><td><a>Preis:" + room.tel + ".-</a><a id='phoneNr'></a></td></tr>";
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

