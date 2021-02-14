import React, {useEffect} from 'react'
import './LandingPage.css'
import {connect} from 'react-redux'
import {getHomes} from '../../store/actions/homes'

const LandingPage = ({homes, getHomes}) => {

    useEffect(() => {
        getHomes();
    }, [])

    return (
        <div>
            <div className="container">
		<div className="placeholder">
			<div className="parallax-window" data-parallax="scroll" data-image-src="img/gallery/02.jpg">
				<div className="tm-header">
					<div className="row tm-header-inner">
						<div className="col-md-6 col-12">
							<img src="img/simple-house-logo.png" alt="Logo" className="tm-site-logo" /> 
							<div className="tm-site-text-box">
								<h1 className="tm-site-title">Nova Realty</h1>
								<h6 className="tm-site-description">We provide homes for life</h6>	
							</div>
						</div>
						<nav className="col-md-6 col-12 tm-nav">
							<ul className="tm-nav-ul">
								<li className="tm-nav-li"><a href="#" className="tm-nav-link active">Home</a></li>
								<li className="tm-nav-li"><a href="#" className="tm-nav-link">About</a></li>
								<li className="tm-nav-li"><a href="#" className="tm-nav-link">Contact</a></li>
							</ul>
						</nav>	
					</div>
				</div>
			</div>
		</div>

		<main>
			<header className="row tm-welcome-section">
				<h2 className="col-12 text-center tm-section-title">Find Your Forever Home</h2>
				<p className="col-12 text-center">This webpage was created by Shashank Singh, to showcase his skills as React Redux developer. Please enjoy this landing page, it is not meant to sell or buy anything and this is just lorem ipsum.</p>
			</header>
			
			<div className="tm-paging-links">
				<nav>
					<ul>
						<li className="tm-paging-item"><a href="#" className="tm-paging-link active">Homes</a></li>
						<li className="tm-paging-item"><a href="#" className="tm-paging-link">Plots</a></li>
						<li className="tm-paging-item"><a href="#" className="tm-paging-link">Mansions</a></li>
					</ul>
				</nav>
			</div>

			<div className="row tm-gallery">
				<div id="tm-gallery-page-homes" className="tm-gallery-page">
                    {homes && homes.map(home => <article key={home.id} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={home.img} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">{home.title}</h4>
								<p className="tm-gallery-description">{home.content}</p>
								<p className="tm-gallery-price">{home.price}</p>
							</figcaption>
						</figure>
					</article>)}
				</div> 
				<div id="tm-gallery-page-plots" className="tm-gallery-page hidden">
                {homes && homes.slice(3, 9).map(home => <article key={home.id} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={home.img} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">{home.title}</h4>
								<p className="tm-gallery-description">{home.content}</p>
								<p className="tm-gallery-price">{home.price}</p>
							</figcaption>
						</figure>
					</article>)}
				</div>
				<div id="tm-gallery-page-mansions" className="tm-gallery-page hidden">
                {homes && homes.slice(2, 9).map(home => <article key={home.id} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={home.img} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">{home.title}</h4>
								<p className="tm-gallery-description">{home.content}</p>
								<p className="tm-gallery-price">{home.price}</p>
							</figcaption>
						</figure>
					</article>)}
				</div> 
			</div>
			<div className="tm-section tm-container-inner">
				<div className="row">
					<div className="col-md-6">
						<figure className="tm-description-figure">
							<img src="img/img-01.jpg" alt="Image" className="img-fluid" id="height-prob" />
						</figure>
					</div>
					<div className="col-md-6">
						<div className="tm-description-box"> 
							<h4 className="tm-gallery-title">Maecenas nulla neque</h4>
							<p className="tm-mb-45">This website is a showcase of react and redux all the data present on the gallery was obtained from making a request from a redux action. Thanks for going through the website.</p>
							<a href="#" className="tm-btn tm-btn-default tm-right">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</main>

		<footer className="tm-footer text-center">
			<p>Shashank Singh
            
            | Full Stack Web Dev</p>
		</footer>
	</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return   ({
  homes: state.homes.homes
})
}

export default connect(mapStateToProps, {getHomes})(LandingPage);


