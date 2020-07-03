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

/**
 * inserts data in html
 * @param roomData the form with the data
 */
function showRooms(roomData) {

    if (typeof roomData !== 'undefined') {
        //Todo: datum formatieren und substring richtig machen
        var tableData = "";
        $("#reservationList").html("");

        $.each(roomData, function (id, room) {
            tableData += "<div id='reservation'>";
            tableData += "<table class='reservationBox' id='reservation'>";
            tableData += "<tr><td><a>" + room.event.titel +" </a> <a id='roomName'></a>";
            tableData += "<a> Datum: " + room.start.substring(0, 10) +"</a> <a id='dateStart'></a>";
            tableData += "<a>   " + room.start.substring(14, 19) + "</a> <a id='timeStart'>-</a>" ;
            tableData += "<a>   " + room.end.substring(0, 10) + "</a> <a id='dateEnd'></a>    ";
            tableData += "<a>   " + room.end.substring(14, 19) + "</a> <a id='timeEnd'></a></td></tr>";
            tableData += "<tr><td><a>Veranstalter: " + room.event.organiser + "</a> <a id='organizer'> </a>";
            tableData += "<tr><td><a>Telefonnummer: " + room.event.telefonnummer + "</a> <a id='organizer'> </a>";
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

