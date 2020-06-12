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
            $("#reservationList").text("Fehler beim Lesen der Räume.    HTTP error code: " + xhr.status);
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
            tableData += "<tr><td><a>Startdatum:" + room.start.substring(0, 9) + "</a><a id='dateStart'></a></td></tr>";
            tableData += "<tr><td><a>Startzeit:" + room.start.substring(10, 14) + "</a><a id='timeStart'></a></td></tr>";
            tableData += "<tr><td><a>Enddatum:" + room.end.substring(0, 9) + "</a><a id='dateEnd'></a></td></tr>";
            tableData += "<tr><td><a>Endzeit:" + room.end.substring(10, 14) + "</a><a id='timeEnd'></a></td></tr>";
            tableData += "<tr><td><a>Name:" + room.raumName + "</a><a id='roomName'></a></td></tr>";
            tableData += "<tr><td><a>Veranstalter:" + room.veranstalter + "</a><a id='organizer'></a></td></tr>";
            tableData += "<tr><td><a>Telefonnummer:" + room.telefonnummer + ".-</a><a id='phoneNr'></a></td></tr>";
            tableData += "</table>";
            tableData += "</div>";
        });
        $("#reservationList").html(tableData);
    } else {
        $("#reservationList").html("Keine Räume gefunden");
    }

}

function goToInfoPage(roomId) {
    window.location.href = "infoPage.html?roomId="+roomId;
}

