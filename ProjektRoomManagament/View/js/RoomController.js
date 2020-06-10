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
 * @param form the form with the data
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

function showRooms(roomData) {

    if (typeof roomData !== 'undefined') {

        var tableData = "";
        $("#MeineRaeume").html(""); //auskommentiert lassen bis zum release

        $.each(roomData, function (id, room) {
            tableData += "<div class='roomBox'><table id='rooms'><thead><tr><th scope='col'>Name</th><th scope='col'>Plätze</th><th scope='col'>Kosten</th></tr></thead><tbody>";
            tableData += "<tr>";
            tableData += "<td>" + room.raumName + "</td>";
            tableData += "<td>" + room.anzahlPlaetze + "</td>";
            tableData += "<td>" + room.kosten + "</td>";
            tableData += "</tr>";
            tableData += "</tbody></table></div>";
        });
        var data = $("#MeineRaeume").html();
        $("#MeineRaeume").html(data + tableData);
    } else {
        $("#MeineRaeume").html("Keine Räume gefunden");
    }

}

