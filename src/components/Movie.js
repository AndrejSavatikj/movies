const DEFAULT_PLACEHOLDER_IMAGE =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpartycity6.scene7.com%2Fis%2Fimage%2FPartyCity%2F_pdp_sq_%3F%24_1000x1000_%24%26%24product%3DPartyCity%2F805761&f=1&nofb=1";

export const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width={"200"}
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};
