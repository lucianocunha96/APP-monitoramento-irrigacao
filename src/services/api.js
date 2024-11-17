import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lucianogcunha.com.br/estudo/irrigacao/', // Substitua pela sua URL
});

export const fetchIrrigationData = async () => {
  try {
    const response = await api.get('/'); // Aqui usamos GET, ajustável se necessário
    return response.data; // Certifique-se de que os dados retornados estão no formato esperado
  } catch (error) {
    console.error("Erro ao buscar dados de irrigação:", error);
    throw error;
  }
};

export default api;
