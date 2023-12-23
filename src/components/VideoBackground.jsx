import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"
const VideoBackground = ({ movieId }) => {
    const trailerVdo = useSelector(store => store.movies?.trailerVdo);
    useMovieTrailer(movieId);

    return (
        <div>
            <iframe
                src={"https://www.youtube.com/embed/" + trailerVdo?.key}
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}
export default VideoBackground;