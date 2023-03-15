'use client';

import { useEffect, useState } from "react";
import Article from "./components/article";
import styles from './page.module.css';

export default function Home() {
	const api_base_url = 'https://www.tabnews.com.br/api/v1/contents';
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getPostsInfo = async () => {
		let postsFetch = await fetch(api_base_url);
		const result = await postsFetch.json();
		setPosts([...result]);
		setIsLoading(false);
	}

	useEffect(() => {
		getPostsInfo();
	}, [])

	return (
		<>
			{isLoading && (
				<span className={styles.loader}>
					<span></span>
				</span>
			)}

			{!isLoading && posts.length && (
				<div className={styles.posts}>
					{posts.map(((articleInfo, i) => (
						<Article
							key={i}
							index={i + 1}
							comments={articleInfo.children_deep_count}
							title={articleInfo.title}
							tabcoins={articleInfo.tabcoins}
							author={articleInfo.owner_username}
							created_at={articleInfo.published_at}
							slug={articleInfo.slug}
						/>
					)))}
				</div>
			)}
		</>
	)
}
	