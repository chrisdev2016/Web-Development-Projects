
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
            $('#content').val("")
            $('#author').val("")
    
            displayEntry(entry);
        }
    });

   


    function displayEntry(entry) {

        
            var parent = $(".JournalDisplay");
            var child = "<ul><li>" + "Title: " + entry.title + "</li><li>" + "Content: " + entry.content + "</li><li>" + " Author: " + entry.author + "</li></ul>";
            parent.append(child);
            myJournal.entries = [];

        


    }





})


