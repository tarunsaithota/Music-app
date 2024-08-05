import { useDispatch, useSelector } from "react-redux";
import { addMSSHindi } from "../Utils/songsSlice";
import { useEffect } from "react";

const useMSSHindi = () => {
  const dispatch = useDispatch();
  const MSSHindi = useSelector((store) => store.songs?.MSSHindi);
  const fetchMSSHindi = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=946682072&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addMSSHindi(json.data.songs));
  };

  useEffect(() => {
    !MSSHindi && fetchMSSHindi();
  }, []);
};

export default useMSSHindi;
