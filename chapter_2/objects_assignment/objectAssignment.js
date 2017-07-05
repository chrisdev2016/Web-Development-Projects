
$(document).ready(function () {



    function Journal(name) {
        this.entries = [];
        this.name = name;

    }


    function Entry(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }


    var myJournal = new Journal('chris');






    $('#submitbutton').click(function (e) {
        e.preventDefault();
        if (!$('#title').val() || !$('#content').val() || !$('#author').val()) {
            alert(" please fill in all the feilds!")
        } else {
            var entry = new Entry($('#title').val(), $('#content').val(), $('#author').val());
            $('#title').val("");
            $('#content').val("");
            $('#author').val("");
            addToJournal(entry);
        }
    });

    function addToJournal(entry) {
        myJournal.entries.push(entry);
        displayEntry(entry);
    }


    function displayEntry(entry) {

        for (var i = 0; i < myJournal.entries.length; i++) {
            console.log(myJournal)
            var parent = $(".JournalDisplay");
            var child = "<ul><li>" + "Title: " + myJournal.entries[i].title + "</li><li>" + "Content: " + myJournal.entries[i].content + "</li><li>" + " Author: " + myJournal.entries[i].author + "</li></ul>";
            console.log(child)
            parent.append(child);
            myJournal.entries = [];

        }


    }





})


