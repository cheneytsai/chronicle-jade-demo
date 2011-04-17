

/**
 * Module dependencies.
 */

var express = require('express')
  , stylus = require('stylus');

var app = express.createServer();

// Optional since express defaults to CWD/views

app.use(stylus.middleware({
    src: __dirname + '/views'
  , dest: __dirname + '/public'
//  , compile: compile
}));

// Path to our public directory
var pub = __dirname + '/public';
// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

app.use(app.router);
app.use(express.static(pub));

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');


/* Dummy record
//var ninja = {
//  name: 'leonardo',
//  summary: { email: 'hunter.loftis+github@gmail.com', master: 'splinter', description: 'peaceful leader' },
//  weapons: ['katana', 'fists', 'shell'],
  victims: ['shredder', 'brain', 'beebop', 'rocksteady']
};
*/
app.get('/', function(req, res){
  //res.render('ninja', { ninja: ninja });
	res.render('page/frontpage');
});

app.listen(3000);
console.log('Express app started on port 3000');
