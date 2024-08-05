import { useDispatch, useSelector } from "react-redux";
import { addTFSongs } from "../Utils/songsSlice";
import { useEffect } from "react";

const useTFSongs = () => {
  const dispatch = useDispatch();
  const TFSongs = useSelector((store) => store.songs?.TFSongs);
  const fetchTFSongs = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=110048908&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addTFSongs(json.data.songs));
  };

  useEffect(() => {
    !TFSongs && fetchTFSongs();
  }, []);
};

export default useTFSongs;
