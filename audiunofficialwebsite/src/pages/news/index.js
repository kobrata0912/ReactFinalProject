import React, { useContext, useState, useEffect, useMemo } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import OneNews from '../../components/oneNews';

const News = () => {
	const firebase = useContext(FirebaseContext);
	const [news, setNews] = useState([]);

	const renderNews = useMemo(() => {
		return news.map((oneNews, index) => {
			return <OneNews key={oneNews.id} index={index} {...oneNews} />;
		});
	}, [news]);

	useEffect(() => {
		const unsub = firebase.db.collection('news').onSnapshot((snapshot) => {
			const allNews = snapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			setNews(allNews);
		});
		return () => {
			unsub();
		};
	}, [firebase.db]);

	return (
		<div className='container-fluid'>
			<div className='row m-5 border'>
				<div className='col-1'></div>
				<div className='col-10'>{renderNews}</div>
				<div className='col-1'></div>
			</div>
		</div>
	);
};

export default News;
