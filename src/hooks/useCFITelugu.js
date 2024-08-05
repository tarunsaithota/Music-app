import { useDispatch, useSelector } from "react-redux";
import { addCFITelugu } from "../Utils/songsSlice";
import { useEffect } from "react";

const useCFITelugu = () => {
  const dispatch = useDispatch();
  const CFITelugu = useSelector((store) => store.songs?.CFITelugu);
  const fetchCFITelugu = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=951141971&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addCFITelugu(json.data.songs));
  };

  useEffect(() => {
    !CFITelugu && fetchCFITelugu();
  }, []);
};

export default useCFITelugu;
