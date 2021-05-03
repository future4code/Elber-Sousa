import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHomePage, goToFeed } from '../routes/coordinator'

export const login = async (body, history, setLogado) => {
    
    try {
        const response = await axios.post(`${BASE_URL}/login`, body);
        localStorage.setItem("token", response.data.token)
        alert("Logado com sucesso")
        goToFeed(history)
        setLogado("Logout")
    } catch (erro) {
        alert(erro.response.data.message)
    }
}

export const createLogin = async (body, history) => {
    try {
        await axios.post(`${BASE_URL}/signup`, body);
        alert("Conta criada com sucesso !")
        goToHomePage(history);
    } catch (erro) {
        alert(erro.response.data.message)
    }

}

export const createPost = async (body, clear,getData) => {
    try {
        await axios.post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        alert("Postagem realizada com sucesso !")
        getData();
        clear();
        window.location.reload();

    } catch (erro) {
        alert(erro.response.data.message)
    }
}

export const createComment = async (body,id,clear) => {
    try {
        await axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        alert("Comentário realizado com sucesso")
        clear();
        window.location.reload();
    } catch (erro) {
        alert(erro.response.data.message)
    }
} 