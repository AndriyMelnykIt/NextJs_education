import A from './A';
import React from 'react';
import Head from 'next/head';

const MainContainer = ({children, keywords}) => {
	return (
		<>
			<Head>
				<meta keywords={'next js, react' + keywords}></meta>
				<title>Головна сторінка</title>
			</Head>
			<div className="navbar">
				<A href={'/'} text="Головна"/>
				<A href={'/users'} text="Користувачі"/>
			</div>
			<div>
				{children}
			</div>
			<style jsx>
				{`
					.navbar {
						background: #800080;
						padding: 15px;
					}
					
				`}
			</style>
		</>
	)
};

export default MainContainer;
