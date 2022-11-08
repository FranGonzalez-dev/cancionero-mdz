import { SongList } from "../components/SongList"

export const Adoraciones = () => {
	return (
    <>
		<div className="container mt-5 animate__animated animate__fadeIn">
			<h1 className="mb-5">Adoraciones</h1>
			<SongList type='Adoracion'/>
		</div>
    </>
  	)
}