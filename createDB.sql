CREATE TABLE Films(
	film_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(100) NOT NULL,
	year_prod INTEGER NOT NULL
);

CREATE TABLE Genres(
	genre_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(20) NOT NULL,
	id_film INTEGER NOT NULL,
	FOREIGN KEY (id_film) REFERENCES Films(film_id) ON DELETE SET NULL
);