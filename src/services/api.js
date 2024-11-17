import axios from 'axios';

const api = axios.create({
  baseURL: 'SUA_URL_AQUI', // Substitua pela URL de chamada
});

export const fetchIrrigationData = async () => {
  try {
    const response = await api.get('/'); // Aqui usamos GET, ajustável se necessário
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de irrigação:", error);
    throw error;
  }
};

export default api;
