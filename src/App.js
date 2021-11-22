import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import axios from "axios";
import Paginationcomp from "./Pagination";
import "./App.css";

function App() {
  const [animes, setanimes] = useState([]);

  const [animedata, setAnimedata] = useState({
    type: "anime",
    page: 1,
    subtype: "tv",
    search: null,
  });

  const [active, setActive] = useState(1);

  const getData = async ({ type, page, subtype }) => {
    const data = await axios.get(
      `https://api.jikan.moe/v3/top/${type}/${page}/${subtype}`
    );
    return data.data;
  };

  const searchData = async ({ type, search }) => {
    if (search) {
      const data = await axios.get(
        `https://api.jikan.moe/v3/search/${type}?q=${search}`
      );
      console.log(data);
      return data.data;
    }
  };
  async function fetchanime() {
    const data = await getData(animedata);
    console.log(data);
    setanimes(data.top);
  }
  async function searchanime() {
    const data = await searchData(animedata);
    // console.log(data);
    //setanimes(data.top);
  }

  useEffect(() => {
    searchanime();
  }, [animedata.search]);

  useEffect(() => {
    fetchanime();
  }, [animedata.type]);

  return (
    <div className="App bg-dark">
      <Navbar
        handleManga={(e) => {
          setAnimedata({ type: e, page: 1, subtype: e });
        }}
        handleAnime={(e) => {
          setAnimedata({ type: e, page: 1, subtype: "tv" });
        }}
        setSearch={setAnimedata}
        animedata={animedata}
      />
      <Mainpage animes={animes} />
      <Paginationcomp
        handlePagination={(e) => {
          setActive(e);
          setAnimedata({ ...animedata, page: e });
        }}
        active={active}
      />
    </div>
  );
}

export default App;
