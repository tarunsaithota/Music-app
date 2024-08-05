import { useDispatch, useSelector } from "react-redux";
import { addBOFTelugu } from "../Utils/songsSlice";
import { useEffect } from "react";

const useBOFTelugu = () => {
  const dispatch = useDispatch();
  const BOFTelugu = useSelector((store) => store.songs?.BOFTelugu);
  const fetchBOFTelugu = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=1047354449&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addBOFTelugu(json.data.songs));
  };

  useEffect(() => {
    !BOFTelugu && fetchBOFTelugu();
  }, []);
};

export default useBOFTelugu;
