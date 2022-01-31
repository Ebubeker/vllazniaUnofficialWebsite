import { combineReducers } from "redux";
import {
  getNews,
  getMatches,
  getGallery,
  getVideos,
  getProducts,
} from "../pages/api/api";
import {
  RetrunNews,
  RetrunMatches,
  RetrunVideos,
  RetrunGallery,
  RetrunProd,
} from "../pages/api/changeAssync";

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "GETNEWS":
      return RetrunNews();
    default:
      return state;
  }
};

const matchesReducer = (state = [], action) => {
  switch (action.type) {
    case "GETMATCHES":
      return RetrunMatches();
    default:
      return state;
  }
};

const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "GETVIDEOS":
      return RetrunVideos();
    default:
      return state;
  }
};

const galleryReducer = (state = [], action) => {
  switch (action.type) {
    case "GETGALLERY":
      return RetrunGallery();
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GETPROD":
      return RetrunProd();
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  news: newsReducer,
  matches: matchesReducer,
  gallery: galleryReducer,
  videos: videoReducer,
  products: productsReducer,
});

export default rootReducer;
