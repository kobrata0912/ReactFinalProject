import React from 'react'
import styles from './index.module.css'

const AboutUs = () => {
	return (
		<React.Fragment>
			<div>
				<div className={styles.containerfluid}>
					<div className='row'>
						<img
							src='/aboutus/about-us.jpg'
							width='98%'
							height='563px'
							className='rounded mx-auto d-block'
							alt='About us'
						/>
						<span className={styles.bottommiddle + ' h1 display-1'}>
							<strong>Четирите кръга</strong>
						</span>
					</div>
				</div>
				<div className={styles.containerfluid + ' pt-3'}>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8'>
							<p className='lead text-center'>
								<strong>
									Символът на Audi - "четирите кръга" - е знакът на един от
									най-старите автомобилни производители в Германия. Той
									символизира извършеното през 1932 г. обединяване на четирите
									независими дотогава производители на мотоциклетни превозни
									средства: Audi, DKW, Horch и Wanderer. Това са корените на
									днешното акционерно дружество AUDI AG.
								</strong>
							</p>
						</div>
						<div className='col-2'></div>
					</div>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8 mt-4 shadow'>
							<p>
								<span>
									<strong>Audi</strong>
								</span>
							</p>
							<p>
								Автомобилите Audi - произвеждани от 1910 в Цвикау - от самото
								начало са считани за носители на техническия авангард в средния
								клас. През 1909 г. Аугуст Хорх открива в Цвикау първата си
								фирма. От 1910 г. тя присъства на пазара с латинския превод на
								името Хорх като Audi. Със своите автомобили Audi се ориентира
								предимно към висшата класа. С фурора, който прави на
								международните обиколки на Алпите (1912 до 1914) името на
								марката се утвърждава като символ на мощност и елит.
							</p>
						</div>
						<div className='col-2 pt-4 mt-5'>
							<img src='/aboutus/about-us-audi.jpg' alt="Car"/>
						</div>
					</div>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8 mt-4 shadow'>
							<p>
								<span>
									<strong>DKW</strong>
								</span>
							</p>
							<p>
								През 1907 г. Йорген Скафте Расмусен основава в Чопау фирма за
								производство на апарати и арматурни устройства. През 1916 г. в
								Чопау Йорген Скафте Расмусен започва експерименти над автомобил
								с парен двигател. През 1919 г. преименуваното в Моторни заводи
								Чопау предприятие се преквалифицира в производството на малки
								двутактови двигатели. През 1928 г. на пазара се появява първият
								малък автомобил DKW. След 1945 г. мотоциклетите и автомобилите
								на DKW са основата за възраждането на Auto Union в Инголщадт.
							</p>
						</div>
						<div className='col-2 pt-4 mt-5'>
							<img src='/aboutus/about-us-dkw.jpg' alt="Car" />
						</div>
					</div>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8 mt-4 shadow'>
							<p>
								<span>
									<strong>Horch</strong>
								</span>
							</p>
							<p>
								Автомобилите Horch се произвеждат от 1900 г. в Кьолн, от 1902 г.
								в Райхенбах и от 1904 г. в Цвикау. Въпреки, че през 1909 г.
								Аугуст Хорх се отделя от основаните от него през 1904 г. заводи,
								той вече е дал насока във философията: целта е производството на
								мощни и добри автомобили. През следващите десетилетия марката се
								придържа именно към това. Автомобилите Horch са част от
								върховните постижения в автомобилната индустрия, те са водеща
								марка в луксозния клас и символ за отлично качество.
							</p>
						</div>
						<div className='col-2 pt-4 mt-5'>
							<img src='/aboutus/about-us-horch.jpg' alt="Car" />
						</div>
					</div>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8 mt-4 shadow'>
							<p>
								<span>
									<strong>Wanderer</strong>
								</span>
							</p>
							<p>
								Като четвърти кръг фирмата за автомобилостроене Wanderer е член
								на основаното през 1932 г. акционерно дружество Auto Union AG.
								От 1885 механиците Йохан Баптист Винклхофер и Рихард Адолф
								Йенике имат работилница за велосипеди в Кемниц. От 1896 г.
								фирмата се преименува на Wanderer Fahrradwerke AG. През 1902 г.
								е произведен първият мотоциклет, през 1913 г. фирмата започва да
								се занимава с производство на автомобили. Като четвъртият кръг
								от 1932 г. Wanderer става член на новооснованото акционерно
								дружество Auto Union AG.
							</p>
						</div>
						<div className='col-2 pt-4 mt-5'>
							<img src='/aboutus/about-us-wanderer.jpg' alt="Car" />
						</div>
					</div>
					<div className='row'>
						<div className='col-2'></div>
						<div className='col-8 mt-4 mb-5 shadow'>
							<p>
								<span>
									<strong>NSU</strong>
								</span>
							</p>
							<p>
								През 1901 г. NSU започва да произвежда мотоциклети, а 5 години
								по-късно и автомобили. През 1886 г. фабриката за плетачни машини
								в Некарзулм е разширена с отдел за производство на велосипеди.
								През 1901 г. NSU започва производството на мотоциклети, а 5
								години по-късно и на автомобили. Производството на автомобили е
								спряно през 1929 г., когато фирмата отново се отдава само на
								производството на двуколесни превозни средства. За да се стигне
								до 1958 г., когато производството на автомобили в Некарзулм
								отново е възродено.
							</p>
						</div>
						<div className='col-2 pt-4 mt-5'>
							<img src='/aboutus/about-us-nsu.jpg' alt="Car" />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutUs;
