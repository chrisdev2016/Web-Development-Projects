


//function createNewEntry(title, content, author) {


   // displayEntry(entry);



//function displayEntry(entry) {




   /* var parent = $('ul#myUL');
    var child1 = "<li> x </li>";
    var child2 = "<li> y </li>";
    var child3 = "<li> z </li>";

    parent.append(child1);
*/



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






    $('#submitbutton').click(function () {

        var myTitle = $('#input1').val();
        var myContent = $('#input2').val();
        var myAuthor = $('#input3').val();
        createEntry(myTitle,myContent,myAuthor);
        


        function createEntry(){
        var entry = new Entry(myTitle, myContent, 'myAuthor');
        entry.title
        entry.content
        entry.content
        }

        myJournal.entries[0].push('name: '+ entry.title);
        myJournal.entries[0].push('content: '+ entry.content);
        myJournal.entries[0].push('author: '+ entry.author);
    
        $("#myLi1").text(myJournal.entries[0].name);
        $("#myLi2").text(myJournal.entries[0].content);
        $("#myLi3").text(myJournal.entries[0].author);

    
    });











