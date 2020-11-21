import React from 'react';
import './static/footer.css';
import Contact from './contact';
import './static/contact_section.css'
import FacebookIcon  from '@material-ui/icons/Facebook';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon  from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
	return (
		<div id="contacts" className="footer">
			<div className="footer_header"><h1>Get in touch</h1></div>
			<div className="footer__top">
				<div className="social_card">
					<h2 className="social_header">Social accounts:</h2>
					<ul className="footer__socialContainer">
						<li className="footer__socialLink"><a className="footer__link" href="https://facebook.com/kkenn21/"><FacebookIcon /> Facebook</a></li>
						<li className="footer__socialLink"><a className="footer__link" href="https://Instagram.com/kensidiangco/"><InstagramIcon /> Instagram</a></li>
						<li className="footer__socialLink"><a className="footer__link" href="https://twitter.com/kensidiangco/"><TwitterIcon /> Twitter</a></li>
						<li className="footer__socialLink"><a className="footer__link" href="https://Github.com/kensidiangco/"><GitHubIcon /> Github</a></li>
					</ul>
				</div>
				<div className="contact_base">
					<div className="contact_header">
						<h2>Email me:</h2>
					</div>
					<Contact />
				</div>
			</div>

			<div className="footer__bottom">
				<small>(c) Ken Sidiangco's Portfolio (2020)</small>
			</div>
		</div>
	)
}

export default Footer;