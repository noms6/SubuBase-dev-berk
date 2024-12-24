// src/services/apiDersler.js
import axios from 'axios';

const API_URL = 'https://ebsapi.bys.subu.edu.tr/api/OgretimPlaniDers/GetOgretimPlaniDersListByBirimIdAndAkademikYilId';

export function getDersListesi() {
  const params = {
    birimId: 210,
    akademikYilId: 32,
    dilTuruId: 2001,
  };

  return axios.get(API_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('API isteği başarısız oldu:', error);
      throw error;
    });
}