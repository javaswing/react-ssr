import axios from "axios";

export function getPlayListById(id: number = 24381616) {
  return axios.get(`http://iwenwiki.com:3000/playlist/detail?id=${id}`);
}

export type PlayListType = {
  id?: number;
  name?: string;
  coverImgUrl?: string;
  tracks?: TrackType[];
};

export type TrackType = {
  name?: string;
  id?: number;
  al?: {
    id?: number;
    picUrl?: string;
  };
};
