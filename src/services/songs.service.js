import http from '../utils/http';

const ZingMp3Service = {
  searchMusic: async (params) => {
    return await http.get('/search', { params });
  },
  getMusicHome: async (params) => {
    return await http.get('/newreleasechart', { params });
  },
  getPlaylist: async (params) => {
    return await http.get('/top100', { params });
  },
};

export default ZingMp3Service;
