var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'arjun p p',
    heading:'article-one',
    date:'october 2016',
    content:`  <p>
                i am completed in B.E computer science engineering in JKKMCT.
                 </p>
            <p>
                i am intersted to design the web pages.
                 </p>
            <p> 
                my hobiies is playing cricket.
                  </p>
            <p>
                my ambition is to become a web desiginer
                  </p>`
};
function createtemplate(data)
{
     var title=data.title;
     var heading=data.heading;
     var date=data.date;
     var content=data.content;
var htmltemplate =`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
                <h3>
                    ${heading}
                </h3>
            <div> ${date}
              ${content}    
            </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
 res.send(createtemplate(articleone));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/CYMERA_20160131_105516.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CYMERA_20160131_105516.jpg'));
});
app.get('/ui/2_0uH_icon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2_0uH_icon.ico'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
