import { useState, useEffect } from "react";
import { getGallery, getMatches, getNews, getProducts, getVideos } from "./api";

export const RetrunNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  return news;
};

export const RetrunMatches = () => {
  const [match, setMatch] = useState([]);
  useEffect(() => {
    getMatches().then((res) => setMatch(res));
  }, []);

  return match;
};

export const RetrunVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos().then((res) => setVideos(res));
  }, []);

  return videos;
};

export const RetrunGallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    getGallery().then((res) => setGallery(res));
  }, []);

  return gallery;
};

export const RetrunProd = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProd(res));
  }, []);

  return prod;
};
