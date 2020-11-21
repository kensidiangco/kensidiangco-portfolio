import React, {useState} from 'react';
import './static/TopBar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function hideElements() {
		const visibility = 'hidden';
		const opacity = 0;
		const transform = 'skew(130deg,130deg)';
		return {
			visibility: `${visibility}`,
			opacity: `${opacity}`,
			transform: `${transform}`

		}
}

function TopBar() {
	const [hideNav, setHideNav] = useState(hideElements);
	const [value, setValue] = useState(<MenuIcon />)

	const open = (e) => {
		e.preventDefault();
		if (hideNav != null) {
			setHideNav(null);
			setValue(<CloseIcon />);
		} else {
			setHideNav(hideElements);
			setValue(<MenuIcon />);
		}
	}


  return (
    <div className="topBar">
    	<div className="topBar__navBar">
    		<button className="topBar__navLink button" onClick={open}>{value}</button>
	  		<a style={hideNav} className="topBar__navLink" href="#header">Home</a>
	  		<a style={hideNav} className="topBar__navLink" href="#about">About</a>
	  		<a style={hideNav} className="topBar__navLink" href="#gallery">Gallery</a>
	  		<a style={hideNav} className="topBar__navLink" href="#contacts">Contacts</a>
  		</div>
    </div>
  );
}

export default TopBar;
