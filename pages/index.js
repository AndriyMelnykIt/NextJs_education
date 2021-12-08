import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<div className="navbar">
				<Link href="/">
					<a className="link">Головна</a>
				</Link>
				<Link  href="/users">
					<a className="link">Користувачі</a>
				</Link>
			</div>
			<h1>Головна Сторінка</h1>
			<style jsx>
				{`
					.navbar{
						background: #800080;
						padding: 15px;
					}
					.link {
						text-decoration: none;
						color: white;
						font-size: 20px;
						margin: 10px;
					}	
				`}
			</style>
		</div>
	);
};

export default Index;