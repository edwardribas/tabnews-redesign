'use client';

import { useEffect, useState } from "react";
import Article from "./components/Article";
import styles from './page.module.scss';
import { getPopularArticles, getRecentArticles } from "./api/articles";
import { Loading } from "./components/Loading";
import { getArticleInfoFromAPI } from "./api/utils/articles";

export default function Page() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	const getPostsInfo = async () => {
		const popularArticles = await getPopularArticles();
		setPosts([...popularArticles]);
		setIsLoading(false);
	}

	useEffect(() => {
		setIsLoading(true);
		getPostsInfo();
	}, [])

	return (
		<>
			<Loading loading={isLoading}/>

			{!isLoading && posts.length && (
				<div className={styles.posts}>
					{posts.map(((articleInfo, i) => (
						<Article
							key={i}
							index={i + 1}
							{...getArticleInfoFromAPI(articleInfo)}
						/>
					)))}
				</div>
			)}
		</>
	)
}
	