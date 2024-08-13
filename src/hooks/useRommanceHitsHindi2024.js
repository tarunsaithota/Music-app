import { useDispatch, useSelector } from "react-redux";
import { addRommanceHitsHindi2024 } from "../Utils/songsSlice";
import { useEffect } from "react";

const useRommanceHitsHindi2024 = () => {
  const dispatch = useDispatch();
  const rommanceHitsHindi2024 = useSelector((store) => store.songs?.rommanceHitsHindi2024);
  const fetchRommanceHitsHindi2024 = async () => {
    const result = await fetch(
      "https://saavn.dev/api/playlists?query=now-trending&id=903166403&limit=40&page=1"
    );
    const json = await result.json();
    dispatch(addRommanceHitsHindi2024(json.data.songs));
  };

  useEffect(() => {
    !rommanceHitsHindi2024 && fetchRommanceHitsHindi2024();
  }, []);
};

export default useRommanceHitsHindi2024;
// 946682072