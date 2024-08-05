import { useDispatch, useSelector } from "react-redux";
import { addRandomSongs } from "../Utils/songsSlice";
import { useEffect } from "react";

const useRandomSongs = () => {
  const dispatch = useDispatch();
  const randomSongs = useSelector((store) => store.songs?.randomSongs);
  const fetchRandomSongs = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=1506992&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addRandomSongs(json.data.songs));
  };

  useEffect(() => {
    !randomSongs && fetchRandomSongs();
  }, []);
}

export default useRandomSongs;