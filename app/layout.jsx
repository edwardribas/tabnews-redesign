'use client';

import './globals.css'
import styles from './layout.module.css';
import Image from 'next/image';
import Logotype from '../public/logotype.svg';
import DarkLogotype from '../public/logotype_dark.svg';
import SunDark from '../public/sun_dark.svg';
import SunLight from '../public/sun_light.svg';
import LogoDark from '../public/logo_dark.svg';
import LogoLight from '../public/logo_light.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function RootLayout({ children }) {
	const [screenSize, setScreenSize] = useState(1000);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const [theme, setTheme] = useState('dark');

	const handleThemeToggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'; 
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		window.onresize = () => setScreenSize(window.innerWidth);
		const storedTheme = localStorage.getItem('theme');
		setTheme(storedTheme ?? 'dark');
		setScreenSize(window.innerWidth);
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
							{screenSize > 795
								? <Image
									src={theme === 'dark' ? Logotype : DarkLogotype}
									width='max-content'
									height={25}
									alt="Logotipo do Tabnews"
								/> 
								: <Image
									src={theme === 'dark' ? LogoLight : LogoDark}
									width='max-content'
									height={25}
									alt="Logotipo do Tabnews"
								/>
							}
							
						</div>

						<ul className={screenSize <= 795 && openMobileMenu ? styles.active : undefined}>
							<li className={styles.active}>
								<Link href="#">
									Relevantes
								</Link>
							</li>
							<li>
								<Link href="">
									Recentes
								</Link>
							</li>
							<li>
								<Link href="">
									Salvos
								</Link>
							</li>
						</ul>

						<div className={styles.buttons}>
							<span onClick={handleThemeToggle}>
								<Image
									src={theme === 'dark' ? SunLight : SunDark}
									width={120}
									height={33}
									alt="Logotipo do Tabnews"
								/>
							</span>
							{screenSize <= 795 && (
								<span onClick={() => setOpenMobileMenu(!openMobileMenu)}>
									<span></span>
									<span></span>
									<span></span>
								</span>
							)}
						</div>
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
