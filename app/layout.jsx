'use client';

import './globals.css'
import styles from './layout.module.css';
import Link from 'next/link'
import Image from 'next/image';
import Logotype from '../public/logotype.svg';
import DarkLogotype from '../public/logotype_dark.svg';
import SunDark from '../public/sun_dark.svg';
import SunLight from '../public/sun_light.svg';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
	const [theme, setTheme] = useState('dark');

	const handleThemeToggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'; 
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		setTheme(storedTheme ?? 'dark');
		localStorage.setItem('theme', storedTheme ?? 'dark');
	}, []);

	return (
		<html
			lang="en"
			theme={theme}
		>
			<head>
				<title>TabNews</title>
				<meta charSet='UTF-8'/>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
				<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
			</head>
			<body>
				<header className={styles.header}>
					<nav>
						<div className={styles.logotype}>
							<Image
								src={theme === 'dark' ? Logotype : DarkLogotype}
								width={120}
								height={25}
								alt="Logotipo do Tabnews"
							/>
						</div>

						<ul>
							<li className={styles.active}>
								Relevantes
							</li>
							<li>
								Recentes
							</li>
							<li>
								Salvos
							</li>
						</ul>

						<span onClick={handleThemeToggle}>
							<Image
								src={theme === 'dark' ? SunLight : SunDark}
								width={120}
								height={33}
								alt="Logotipo do Tabnews"
							/>
						</span>
					</nav>
				</header>

				<main>
					{children}
				</main>

				<footer className={styles.footer}>
					<div className={styles.logotype}>
						<Image
							src={theme === 'dark' ? Logotype : DarkLogotype}
							width={120}
							height={25}
							alt="Logotipo do Tabnews"
						/>
					</div>

					<ul>
						<li>Contato</li>
						<li>Github</li>
						<li>Museu</li>
						<li>RSS</li>
						<li>Sobre</li>
						<li>Status</li>
						<li>Termos de Uso</li>
					</ul>
				</footer>
			</body>
		</html>
	)
}
