const request = require('request');
const cheerio = require('cheerio');
// make an http request to reddit and get the html
// use cheerio to try to get all the html that have title
// console log the titles



const url = "https://www.reddit.com/";

/*
for (let i=0; i<url.length; i++){
getPage(url[i]);
}
*/
getPage("https://www.reddit.com/", 0)

function getPage(url, pageNo){
    
request(url, (err, resp, body)=>{
if(err){
    console.log(err)
}else{
    //  take the html and make a headless browser
    const $ = cheerio.load(body);
// use cheerio to het html that have elemt title
    const titles = $('a.title');
    titles.each(function(i, elem){
        console.log(elem);
        // the elem here is actually a dom element
       console.log( 'page', pageNo, $(elem).text());
    })

    const  next_link = $('.next-button a');
    next_url =next_link.attr('href');
    console.log(next_url);

    pageNo = pageNo +1;
    if (pageNo>= 3){
        return ;
    }
else{
    getPage(next_url, pageNo);
}
}
});
}