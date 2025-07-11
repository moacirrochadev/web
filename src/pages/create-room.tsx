import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsResponse = Array<{
	id: string;
	name: string;
}>;

export function CreateRoom() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-rooms'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3333/rooms');
			const result: GetRoomsResponse = await response.json();

			return result;
		},
	});
	return (
		<div>
			{isLoading && <div>Loading...</div>}
			<div className="flex flex-col gap-1">
				{data?.map((room) => {
					return (
						<Link className='p-1' key={room.id} to={`/room/${room.id}`}>
							{room.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
