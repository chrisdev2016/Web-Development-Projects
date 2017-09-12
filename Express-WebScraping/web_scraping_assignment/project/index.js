const request = require("request");
const cheerio = require("cheerio");



// constructor for Page object
function Page(PageName, UrlAddress) {
  this.pageName = PageName;
  this.url = UrlAddress;
}

// Creating 3 Page objects
var page1 = new Page('main', "https://www.reddit.com/");
var page2 = new Page('page 2', "https://www.reddit.com/?count=25&after=t3_6ltz9y");
var page3 = new Page('page 3', "https://www.reddit.com/?count=50&after=t3_6ltmrq");

// creating an array of all the pages
var urlArray = [];
urlArray.push(page1, page2, page3);


// for each page do the following

for (let counter = 0; counter < 3; counter++) {


  request(urlArray[counter].url, function (error, response, body) {
    // spacing added between each log
    console.log("                          ");

    console.log(urlArray[counter].pageName);
    if (!error) {
      var $ = cheerio.load(body);
      var titles = [];

      $("a.title.may-blank").each(function (i, elem) {
        titles[i] = $(this).text();
        titles.join(', ');


      });


      for (var i = 0; i < titles.length; i++) {
        console.log(i + ":" + titles[i]);

      }

    } else {
      console.log("We’ve encountered an error: " + error);
    }
    
    counter = counter + 1;

  });

}


