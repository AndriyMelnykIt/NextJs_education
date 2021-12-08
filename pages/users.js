import { useState } from 'react';
import Link from 'next/link';

const Users = () => {
	const [users, setUsers] = useState ([
		{id: 1, name: 'petya', surname: 'Pypkin'},
		{id: 2, name: 'vasya', surname: 'Volosaw'},
	])
	return (
		<div>
			<h1>Список користувачів</h1>
			<ul>
				{users.map (user =>
					<li>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Users;