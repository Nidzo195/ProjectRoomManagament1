/**
 * view-controller for reservation.html
 *
 * M426: Reservation List
 *
 * @author  Nina Hagenbucher, Nikola Matovic
 * @since   2020-06-16
 * @version 1.0
 */

$(document).ready(function () {
    //showMessage("empty", " ");

    /**
     * when opened --> sends data form server to view
     */
    loadComboBox();

    /**
 * listener for submitting the form
 */
    $("#saveRoomData").click(saveRoom);
});


/**
 * gets the data from the server
 */
function loadComboBox() {

    var searchString = $("#searchbar").val()
    $.ajax({
        url: "https://localhost:44369/api/Room/ListAll/",
        dataType: "json",
        type: "GET"
    })
        .done(fillComboBox)
        .fail(function (xhr, status, errorThrown) {
            $("#error").text("Fehler beim Lesen der Räume.    HTTP error code: " + xhr.status);
        })
}

/**
* alert successfull saved room
 */
function saveRooom(form) {
    alert("Raum wurde Erfolgreich gespeichert");
}


/**
 * fills the combobox with the rooms
 */
function fillComboBox(roomData) {

    $("#rooms").html("");

    var tableData = "";

    $.each(roomData, function (id, room) {
        tableData += "<option value=" + room.id +">" + room.raumName + "</option>";
    });
    $("#rooms").html(tableData);

}


/**
 * sends the book data to the webservice
 * @param form the form being submitted
 */
function saveRoom(form) {

    var data = $("#roomReserve").serialize();

    $
        .ajax({
            url: "https://localhost:44369/api/Reservation/Save/",
            dataType: "text",
            type: "POST",
            data: data,
        })
        .done(function (jsonData) {
        })
        .fail(function (xhr, status, errorThrown) {
            $("#error").text("Fehler beim Speichern des Raumes. HTTP error code: " + xhr.status);
        })
    alert("Raum wurde Erfolgreich gespeichert");
}