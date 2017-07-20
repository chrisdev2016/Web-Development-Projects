$(document).ready(function (){

let myJournal = new Journal('cake','chris');


$('#submitbutton').click(function (e) {
        e.preventDefault();
        if (!$('#title').val() || !$('#content').val() || !$('#author').val()) {
            alert(" please fill in all the feilds!")
        } else {
            myJournal.makeEntry($('#title').val(), $('#content').val(), $('#author').val));
           displayEntry(newEntry);
        
        }
    });

    


    function displayEntry(entry) {
// $(".JournalDisplay").append("<div><h2> " +myJournal.entries[i].title + "</h2><p> " +myJournal.entries[i].content + "</p><h3>"+myJournal.entries[i].author+ "</h3></div>")


      for (var i = 0; i < myJournal.entries.length; i++) {
            console.log(myJournal)
            var parent = $(".JournalDisplay");
            var child = "<ul><li>" + "Title: " + myJournal.entries[i].title + "</li><li>" + "Content: " + myJournal.entries[i].content + "</li><li>" + " Author: " + myJournal.entries[i].author + "</li></ul>";
            console.log(child)
            parent.append(child);
            myJournal.entries = [];

        }


    }

});