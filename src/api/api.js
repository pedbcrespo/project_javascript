//aqui vai ser instalado o axios
import axios from 'axios';

const api = axios.create({
    // aqui fica o link da API que vai buscar os dados 
    baseURL: 'http://127.0.0.1:5000'
    // funciona mais ou menos
    // da forma que escrevi ta certo, mas as informaçoes nao sao coletadas

    // motivo: Aparentemente preciso dar permissao pro metodo .get do axios
    // resposta: para dar permissao, no projeto da api, precisa ter a biblioteca CORS, que permitira chamar a api em qualquer outro projeto
});

export default api;