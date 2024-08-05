import { useDispatch, useSelector } from "react-redux";
import { addCFIHindi } from "../Utils/songsSlice";
import { useEffect } from "react";

const useCFIHindi = () => {
  const dispatch = useDispatch();
  const CFIHindi = useSelector((store) => store.songs?.CFIHindi);
  const fetchCFIHindi = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=946457594&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addCFIHindi(json.data.songs));
  };

  useEffect(() => {
    !CFIHindi && fetchCFIHindi();
  }, []);
};

export default useCFIHindi;
