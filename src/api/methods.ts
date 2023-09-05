import pokemonList from "../../database/pokemon-list-251.json" assert { type: "json" };

export const DEFAULT_LIMIT = 9;
const captured = ["bulbasaur", "tangela"];

export function search({
  query,
  list,
}: {
  query?: string | null;
  list?: any[];
}) {
  const database = list ? list : pokemonList.results;

  if (!query) return database;

  return database.filter((pokemon) => pokemon.name.includes(query || ""));
}

export function getData({
  query,
  limit = DEFAULT_LIMIT,
  list,
}: {
  query?: string | null;
  limit?: number;
  // Array of pokemons from the local database "pokemonList"
  list?: any[];
}) {
  const results = search({ query, list });

  // Keep only results within limit
  const displayedResults = results.slice(0, limit);

  return Promise.all(
    displayedResults.map((result) => {
      const fetchUrl = new URL("", result.url);

      const promise = fetch(fetchUrl);

      return promise
        .then((response) => {
          if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
          }

          return response.json();
        })
        .then((data) => data)
        .catch(() => {
          throw new Error("Error while fetching data");
        });
    }),
  );
}

export function getCaptured() {
  const results = pokemonList.results.filter((pokemon) =>
    captured.includes(pokemon.name),
  );

  return getData({ list: results });
}

export function getNotCaptured() {
  const results = pokemonList.results.filter(
    (pokemon) => !captured.includes(pokemon.name),
  );

  return getData({ list: results });
}

export function setCaptured(pokemonName: string) {
  const pokemon = search({ query: pokemonName });

  captured.push(pokemon[0].name);
}
