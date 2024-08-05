import { useDispatch, useSelector } from "react-redux";
import { addTrendingSongs } from "../Utils/songsSlice";
import { useEffect } from "react";

const useTrendingSongs = () => {
  const dispatch = useDispatch();
  const trendingSongs = useSelector((store) => store.songs?.trendingSongs);
  const fetchTrendingSongs = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=2574962&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addTrendingSongs(json.data.songs));
  };

  useEffect(() => {
    !trendingSongs && fetchTrendingSongs();
  }, []);
};

export default useTrendingSongs;
