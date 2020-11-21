const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'my-portfolio/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-portfolio/build', 'index.html'));
});

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
			<h3>app Details</h3>
			<ul>
				<li>Name: ${req.body.name}</li>
				<li>Email: ${req.body.email}</li>
			</ul>
			<h3>Message</h3>
			<p>Subject: ${req.body.subject}</p>
			<p>Message: ${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'kensidiangco@gmail.com',
				pass: 'iaclwtttqbkhiuas'
			}
		})

		let mailOptions = {
			from: req.body.email,
			to: "kensidiangco@gmail.com",
			replyTo: req.body.email,
			subject: req.body.subject,
			text: req.body.message,
			html: htmlEmail
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log(err);
			}

			console.log('message sent: %s', info.message)
			console.log('message URL: %s', nodemailer.getTestMessageUrl(info))
		})
	})
});

const PORT = process.env.PORT || 8001

app.listen(PORT , () => {
	console.log(`server listening on port ${PORT}`)
})