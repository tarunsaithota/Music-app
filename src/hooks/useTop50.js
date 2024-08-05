import { useDispatch, useSelector } from "react-redux";
import { addTop50 } from "../Utils/songsSlice";
import { useEffect } from "react";

const useTop50 = () => {
  const dispatch = useDispatch();
  const top50 = useSelector((store) => store.songs?.top50);
  const fetchTop50 = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=1134643225&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addTop50(json.data.songs));
  };

  useEffect(() => {
    !top50 && fetchTop50();
  }, []);
};

export default useTop50;
