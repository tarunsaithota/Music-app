import { useDispatch, useSelector } from "react-redux";
import { addSPBHits } from "../Utils/songsSlice";
import { useEffect } from "react";

const useSPBHits = () => {
  const dispatch = useDispatch();
  const SPBHits = useSelector((store) => store.songs?.SPBHits);
  const fetchSPBHits = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=158225836&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addSPBHits(json.data.songs));
  };

  useEffect(() => {
    !SPBHits && fetchSPBHits();
  }, []);
};

export default useSPBHits;
