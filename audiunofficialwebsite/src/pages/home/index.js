import React from 'react';
const Login = () => {
	return (
		<div id="demo" className="carousel slide" data-ride="carousel">
		<ul className="carousel-indicators">
			<li data-target="#demo" data-slide-to="0" className="active"></li>
			<li data-target="#demo" data-slide-to="1"></li>
			<li data-target="#demo" data-slide-to="2"></li>
			<li data-target="#demo" data-slide-to="3"></li>
			<li data-target="#demo" data-slide-to="4"></li>
		</ul>

		<div className="carousel-inner">
			<div className="carousel-item active">
				<img
					className="mx-auto d-block"
					src="/models/q2/1.jpg"
					width="2000px"
					height="563px"
					alt="Audi Q2"
				/>
				<div className="carousel-caption">
					<h4 className="display-2">Audi Q2</h4>
					<h3>Истински характер</h3>
				</div>
			</div>
			<div className="carousel-item">
				<img
					className="mx-auto d-block"
					src="/models/q3/1.jpg"
					width="2000px"
					height="563px"
					alt="Audi Q3"
				/>
				<div className="carousel-caption">
					<h4 className="display-2">Audi Q3</h4>
					<h3>Талант за всички пътища</h3>
				</div>
			</div>
			<div className="carousel-item">
				<img
					className="mx-auto d-block"
					src="/models/q5/1.jpg"
					width="2000px"
					height="563px"
					alt="Audi Q5"
				/>
				<div className="carousel-caption">
					<h4 className="display-2">Audi Q5</h4>
					<h3>Вписва се идеално във всеки пейзаж</h3>
				</div>
			</div>
			<div className="carousel-item">
				<img
					className="mx-auto d-block"
					src="/models/q7/1.jpg"
					width="2000px"
					height="563px"
					alt="Audi Q7"
				/>
				<div className="carousel-caption">
					<h4 className="display-2">Audi Q7</h4>
					<h3>Самоуверен и комфортен</h3>
				</div>
			</div>
			<div className="carousel-item">
				<img
					className="mx-auto d-block"
					src="/models/rsq8/1.jpg"
					width="2000px"
					height="563px"
					alt="Audi RSQ8"
				/>
				<div className="carousel-caption">
					<h4 className="display-2">Audi RSQ8</h4>
					<h3>Върхово представяне от ново поколение</h3>
				</div>
			</div>
		</div>

		<a className="carousel-control-prev" href="#demo" data-slide="prev">
			<span className="carousel-control-prev-icon"></span>
		</a>
		<a className="carousel-control-next" href="#demo" data-slide="next">
			<span className="carousel-control-next-icon"></span>
		</a>
	</div>
	);
};

export default Login;
