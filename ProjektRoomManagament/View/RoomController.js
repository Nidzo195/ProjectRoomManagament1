/**
 * view-controller for raume.html
 *
 * M426: Room Management
 *
 * @author  Nina Hagenbucher
 * @since   2020-05-15
 * @version 1.0
 */



$(document).ready(function () {
       /**
     * when opened --> sends data form server to view
     */
    loadRooms();
    alert("SALI");

});

/**
 * loads room data from server
 * @param form the form with the data
 */
function loadRooms() {
    $
        .ajax({
            url: "https://localhost:44369/api/Room/ListAll",
            dataType: "json",
            type: "GET"
        })
        .done(showRooms)
        .fail(function (xhr, status, errorThrown) {
           alert("Fehler beim Lesen der Räume.    Response Text: "+ xhr.responseText +"  Status: "+status);
        })
}

function showRooms(roomData) {
    var tableData = "";
    $.each(roomData, function (id, room) {
        tableData += "<tr>";
        tableData += "<td>" + room.raumName + "</td>";
        tableData += "<td>" + room.raumBeschreibung + "</td>";
        tableData += "<td>" + room.anzahlPlaetze + "</td>";
        tableData += "<td>" + room.kosten + "</td>";
        tableData += "<td>" + room.ausstattung + "</td>";
        tableData += "</tr>";
    });
    $("#rooms > tbody").html(tableData);
    $("#roomName").html(room.raumName)
}