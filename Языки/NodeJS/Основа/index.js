/*import chalk from 'chalk';

import abc from './data.js';
abc();
*/

const http = require('http');

const server = http.createServer( (req, res) => {

	res.end('<h1>!!hello node</h1>');
})

server.listen(3000, () => {	//порт, колбэк 
	console.log('server has been started.')
})




//const text = import('./data.js');

//const text = require('./data');

//console.log(text);
/*
console.log(chalk.blue('Hello world!'));

const log = console.log;

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
*/

const http = require('http')
	const fs = require('fs')
	const path = require('path')
	

	const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
	  const ext = path.extname(filePath)
	  let contentType = 'text/html'
	

	  switch (ext) {
	    case '.css':
	      contentType = 'text/css'
	      break
	    case '.js':
	      contentType = 'text/javascript'
	      break
	    default:
	      contentType = 'text/html'
	  }
	

	  if (!ext) {
	    filePath += '.html'
	  }
	

	  fs.readFile(filePath, (err, content) => {
	    if (err) {
	      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
	        if (err) {
	          res.writeHead(500)
	          res.end('Error')
	        } else {
	          res.writeHead(200, {
	            'Content-Type': 'text/html'
	          })
	          res.end(data)
	        }
	      })
	    } else {
	      res.writeHead(200, {
	        'Content-Type': contentType
	      })
	      res.end(content)
	    }
	  })
	})
	

	const PORT = process.env.PORT || 3000
	

	server.listen(PORT, () => {
	  console.log(`Server has been started on ${PORT}...`)
	})
