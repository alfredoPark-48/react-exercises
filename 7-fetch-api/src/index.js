import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
	const [books, setBooks] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				"https://www.anapioficeandfire.com/api/books"
			);
			const data = await response.json();

			setBooks(data);
		}

		getData();
	}, []);

	return (
		<div>
			<h1>Game of Thrones Books</h1>
			{books && (
				<div className="books">
					{books.map((book, index) => (
						<div key={index}>
							<h2>{book.name}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
