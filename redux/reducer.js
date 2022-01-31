import { combineReducers } from "redux";
import {
  getNews,
  getMatches,
  getGallery,
  getVideos,
  getProducts,
} from "../pages/api/api";
import {
  retrunNews,
  retrunMatches,
  retrunVideos,
  retrunGallery,
  retrunProd,
} from "../pages/api/changeAssync";

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "GETNEWS":
      return retrunNews();
    default:
      return state;
  }
};

const matchesReducer = (state = [], action) => {
  switch (action.type) {
    case "GETMATCHES":
      return retrunMatches();
    default:
      return state;
  }
};

const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "GETVIDEOS":
      return retrunVideos();
    default:
      return state;
  }
};

const galleryReducer = (state = [], action) => {
  switch (action.type) {
    case "GETGALLERY":
      return retrunGallery();
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GETPROD":
      return retrunProd();
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
