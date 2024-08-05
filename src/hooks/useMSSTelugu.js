import { useDispatch, useSelector } from "react-redux";
import { addMSSTelugu } from "../Utils/songsSlice";
import { useEffect } from "react";

const useMSSTelugu = () => {
  const dispatch = useDispatch();
  const MSSTelugu = useSelector((store) => store.songs?.MSSTelugu);
  const fetchMSStelugu = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=951897805&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addMSSTelugu(json.data.songs));
  };

  useEffect(() => {
    !MSSTelugu && fetchMSStelugu();
  }, []);
};

export default useMSSTelugu;
