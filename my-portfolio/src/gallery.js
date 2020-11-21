import React, {useState} from 'react';
import './static/gallery.css';
import bgimg from './img/app__background2.png';
import { makeStyles } from '@material-ui/core/Styles';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

function importAll(e) {
  let images = {};
  e.keys().map((item, index) => { images[item.replace('./', '')] = e(item); });
  return images;
}

function GetModalStyle() {
	const top = 50;
	const left = 50;

	return{
		top: `${top}%`,
	    left: `${left}%`,
	    transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		overflowY: 'auto',	
		color: '#F1FDD8',
		height: 'calc(100vh - 210px)',
		outline: 'none',
		backgroundImage: `url(${bgimg})`,
		borderRadius: '10px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Gallery() {
	const classes = useStyles();
	const [modalStyle] = useState(GetModalStyle);
	const [openModal1, setOpenModal1] = useState(false);
	const [openModal2, setOpenModal2] = useState(false);
	const [openModal3, setOpenModal3] = useState(false);
	const [openModal4, setOpenModal4] = useState(false);

	const comLabIMG = importAll(require.context('./img/ComLabMonitoringIMG', false, /\.(png|jpe?g|svg)$/));
	const accountHandlingIMG = importAll(require.context('./img/AccountHandlingIMG', false, /\.(png|jpe?g|svg)$/));
	const covidIMG = importAll(require.context('./img/CovidTrackerIMG', false, /\.(png|jpe?g|svg)$/));
	const ParkingIMG = importAll(require.context('./img/ParkingSystemIMG', false, /\.(png|jpe?g|svg)$/));



	const viewPhoto1 = (e) => {
		e.preventDefault();

		setOpenModal1(true);
	}
	const viewPhoto2 = (e) => {
		e.preventDefault();

		setOpenModal2(true);
	}
	const viewPhoto3 = (e) => {
		e.preventDefault();

		setOpenModal3(true);
	}
	const viewPhoto4 = (e) => {
		e.preventDefault();

		setOpenModal4(true);
	}

	return (
		<div id="gallery" className="gallery">
			<div className="gallery__header"><h1>Project gallery</h1></div>

			<div className="gallery__content1">
				<div className="gallery__card">
					<div className="card__header"><h2>Computer Laboratory Monitoring System (Django)</h2></div>
					<div className="card__body body__card1">
						<img className="project__image" alt="sample" src={comLabIMG['Dashboard.png']} onClick={viewPhoto1} />
						<div className="gallery__comment">
							<p>This Computer Laboratory Monitoring System is my final project to defense in first year on Saint Jude College. You can visit the code in my github here <a href="https://github.com/kensidiangco/ComputerLaboratoryUserMonitoring">Computer Laboratory Monitoring.</a></p>
						</div>
					</div>
				</div>
				<Modal 
					open={openModal1}
			        onClose={() => setOpenModal1(false)}
			        aria-labelledby="simple-modal-title"
			        aria-describedby="simple-modal-description"
				>
					<Fade in={openModal1}>
						<Paper style={modalStyle} className={classes.paper}>
							<center>
								<div className="card__header">
									<h1>Computer Laboratory Monitoring System (Django)</h1>
								</div>
								<div className="img__card1">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={comLabIMG['Dashboard.png']} />
										<center><small><p>Dashboard.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">In this page, you will see the list of the students who logged in in computer laboratory room.</p>
									</div>
								</div>
								<div className="img__card1">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={comLabIMG['Login.png']} />
										<center><small><p>Login interface.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">This is the interface of login form of the system. Students will input their information in it for them to time in and then they can use a computer in computer laboratory. the information will list into dashboard.</p>
									</div>
								</div>
								<div className="img__card1">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={comLabIMG['Details.png']} />
										<center><small><p>User details.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">After they submit their infos the page will directly go here. They can check their information in this page after they submit it to the system, the benefit of it is they can check if the infos was inputed correctly. This page is also for logging out the user. If you notice I put the logging out function in this page because I want admin to check and be sure if they will logged out the correct user.</p>
									</div>
								</div>
								<div className="img__card1">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={comLabIMG['Update.png']} />
										<center><small><p>Update user's detail.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">As you can see, this page is for updating the details. If a user accidentally submitted wrong details, they can update it in this page.</p>
									</div>
								</div>
							</center>
						</Paper>
					</Fade>
				</Modal>

				<div className="gallery__card">
					<div className="card__header"><h2>Account Handling System (Django)</h2></div>
					<div className="card__body body__card2">
						<img className="project__image" alt="sample" src={accountHandlingIMG['Login.png']} onClick={viewPhoto2} />
						<div className="gallery__comment">
							<p>I created this Account Handling System using Django when my boredom strikes because of a corona virus hit the philippines so that we need to stay home due to goverment quarantine protocol. This project is the second system i've done when i'm new to Django. You can visit the code in my github here <a href="https://github.com/kensidiangco/accountHandling">Account Handling System.</a> I used alot bootstrap4 for this template.</p>
						</div>
					</div>
				</div>

				<Modal 
					open={openModal2}
			        onClose={() => setOpenModal2(false)}
			        aria-labelledby="simple-modal-title"
			        aria-describedby="simple-modal-description"
				>	
					<Fade in={openModal2}>
						<Paper style={modalStyle} className={classes.paper}>
							<center>
								<div className="img__card2">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={accountHandlingIMG['Login.png']} />
										<center><small><p>Login interface.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">This is the login interface of the system where user can login their accounts.</p>
									</div>
								</div>
								<div className="img__card2">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={accountHandlingIMG['Homepage.png']} />
										<center><small><p>Homepage.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">After they logged in, page will directly go in this page. I used bootstrap4 template for this system to make it looks fancy. As you can see nothing in there 'cause the system purpose is only for account handling.</p>
									</div>
								</div>
								<div className="img__card2">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={accountHandlingIMG['Logout.png']} />
										<center><small><p>Logout modal.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">Here's the modal with a logout decision once the user clicked the logout button.</p>
									</div>
								</div>
								<div className="img__card2">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={accountHandlingIMG['Register.png']} />
										<center><small><p>Registration.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">In this page, as you can see, this is the registration account page of the system where the users can create a new account.</p>
									</div>
								</div>
							</center>
						</Paper>
					</Fade>
				</Modal>
			</div>

			<div className="gallery__content2">
				<div className="gallery__card">
					<div className="card__header"><h2>Covid-19 Cases Tracker WebApp (Django)</h2></div>
					<div className="card__body body__card3">
						<img className="project__image" alt="sample" src={covidIMG['FetchedCountry.png']} onClick={viewPhoto3} />

						<div className="gallery__comment">
							<p>This system I created when the corona virus cases was getting bigger and I want to contribute something like to share information about the virus cases. so that I created this Covid Tracker using Postman API to fulfill what I want. You can check the code in my github here <a href="https://github.com/kensidiangco/covidTracker">Covid Cases Tracker.</a> I also deployed it on heroku and still working, you can also check it on heroku here <a href="http://covidkentracker.herokuapp.com/">Covid Tracker Heroku App.</a> I am looking forward to this system to upgrade it's feature like adding google map API in it with the visualize covid-19 numbered cases to make it more informative.</p>
						</div>
					</div>
				</div>

				<Modal 
					open={openModal3}
			        onClose={() => setOpenModal3(false)}
			        aria-labelledby="simple-modal-title"
			        aria-describedby="simple-modal-description"
				>
					<Fade in={openModal3}>
						<Paper style={modalStyle} className={classes.paper}>
							<center>
								<div className="card__header">
									<h1>Covid-19 Cases Tracker WebApp (Django)</h1>
								</div>
								<div className="img__card3">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={covidIMG['Home.png']} />
										<center><small><p>Homepage.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">This is the dashboard where you can see the list of global and every fetched countrys with corona virus numbered cases.</p>
									</div>
								</div>
								<div className="img__card3">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={covidIMG['FetchedCountry.png']} />
										<center><small><p>Fetched country's covid-19 cases.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">Once you fetched country, the page will directly go to this page. Like for example you fetched philippines, page will probably directly on this page where you will see the updated corana virus cases.</p>
									</div>
								</div>
							</center>
						</Paper>
					</Fade>
				</Modal>

				<div className="gallery__card">
					<div className="card__header"><h2>Parking Payment Monitoring System (Django)</h2></div>
					<div className="card__body body__card4">
						<img className="project__image" alt="sample" src={ParkingIMG['Dashboard.png']} onClick={viewPhoto4} />
					
						<div className="gallery__comment">
							<p>I created this project because I used to stay in private parking area and I always saw my father manually checking the parking payment log book to know who's tenant is active and soon will be inactive. So I decided to make the parking payment log book digitized as web application using Django. You can check the code on my github here <a href="https://github.com/kensidiangco/Parking-Payment-Monitoring-Django">Parking Payment Monitoring System</a></p>
						</div>
					</div>
				</div>

				<Modal 
					open={openModal4}
			        onClose={() => setOpenModal4(false)}
			        aria-labelledby="simple-modal-title"
			        aria-describedby="simple-modal-description"
				>
					<Fade in={openModal4}>
						<Paper style={modalStyle} className={classes.paper}>
							<center>
								<div className="card__header">
									<h1>Parking Payment Monitoring System (Django)</h1>
								</div>
								<div className="img__card4">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={ParkingIMG['Dashboard.png']} />
										<center><small><p>Dashboard.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">In this dashboard, it will display the table list of how many tenants logged in their information and the number of tenats who paid the parking lot.</p>
									</div>
								</div>
								<div className="img__card4">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={ParkingIMG['TenantStatus.png']} />
										<center><small><p>Tenant status interface.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">On this status page, you will see the tenants who paid to park and also you can check if their monthly payment soon will be in due date. And their status will attached in their names.</p>
									</div>
								</div>
								<div className="img__card4">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={ParkingIMG['AddTenant.png']} />
										<center><small><p>Add tenant form.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">If someone inquired to your private parking, you can get their info and submit it to the system to list their names as tenants or soon to be tenants.</p>
									</div>
								</div>
								<div className="img__card4">
									<div className="modalImg">
										<img className="modal__image" alt="sample" src={ParkingIMG['Pay.png']} />
										<center><small><p>Parking payment form.</p></small></center>
									</div>
									<div className="gallery__comment">
										<p className="comment">If the pay their monthly parking payment, you will go to this page to store their payment data, the payment info will display on status page.</p>
									</div>
								</div>
							</center>
						</Paper>
					</Fade>
				</Modal>
			</div>
		</div>
	)
}

export default Gallery;