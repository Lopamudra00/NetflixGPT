import { IMG_CDN_URL } from "../utils/constants"
const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-64  pr-4">
            <img className="rounded-md" alt="Movie Card" src={IMG_CDN_URL + posterPath} />

        </div>

    )
}
export default MovieCard