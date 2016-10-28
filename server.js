var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    
"article-one":  {
    title: 'arjun p p',
    heading:'article-one',
    date:'october 2016',
    content:`  <p>
       this is article-one
                  </p>`
},
"article-two":  {    
    title: 'arjun p p',
    heading:'article-one',
    date:'october 2016',
    content:`  <p>
               this is article-two
                  </p>`
},
"article-three": {
    title: 'arjun p p',
    heading:'article-one',
    date:'october 2016',
    content:`  <p>
           this is article three
                  </p>`
}
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
app.get('/:articlename',function(req,res){
    var articlename =req.params.articlename;
 res.send(createtemplate(articles[articlename]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/CYMERA_20160131_105516.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CYMERA_20160131_105516.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
