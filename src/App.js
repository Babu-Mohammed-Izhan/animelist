/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Mainpage from "./Mainpage";
import axios from "axios";
import Paginationcomp from "./Pagination";
import "./App.css";
import Navigation from "./Navbar";

function App() {
  const [animes, setanimes] = useState([]);

  const [animedata, setAnimedata] = useState({
    type: "anime",
    page: 1,
    subtype: "tv",
  });

  const [search, setSearch] = useState("");

  const [active, setActive] = useState(1);

  const getData = async ({ type, page, subtype }) => {
    const data = await axios.get(
      `https://api.jikan.moe/v4/top/${type}?type=${subtype}&page=${page}`
    );
    return data.data;
  };

  const searchData = async ({ type, search, subtype }) => {
    const data = await axios.get(
      `https://api.jikan.moe/v4/${type}?q=${search}&page=${active}&type=${subtype}`
    );
    return data.data;
  };
  async function fetchanime() {
    const data = await getData(animedata);
    console.log(data);
    setanimes(data.top);
  }

  async function searchanime() {
    if (search !== "") {
      const data = await searchData({
        type: animedata.type,
        search,
        subtype: animedata.subtype,
      });
      console.log(data);
      setanimes(data.results);
    }
  }

  const handlePagination = (e) => {
    setActive(e);
    if (search === "") {
      setAnimedata({ ...animedata, page: e });
    }
  };

  useEffect(() => {
    searchanime();
  }, [search, active]);

  useEffect(() => {
    fetchanime();
  }, [animedata]);

  return (
    <div className="App bg-dark">
      <Navigation
        handleManga={(e) => {
          setAnimedata({ type: e, page: 1, subtype: e });
        }}
        handleAnime={(e) => {
          setAnimedata({ type: e, page: 1, subtype: "tv" });
        }}
        setSearch={(e) => {
          setSearch(e);
        }}
        animedata={animedata}
      />
      <Mainpage animes={animes} />
      <Paginationcomp
        handlePagination={(e) => {
          handlePagination(e);
        }}
        active={active}
      />
    </div>
  );
}

export default App;
