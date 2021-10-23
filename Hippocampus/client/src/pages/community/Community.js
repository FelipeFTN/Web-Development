import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PostImg1 from './PostImg1.webp'
import './Community.css'

function Community(){
    return(
        <div className="Community">
            <Navbar/>

                <div className="posts">
                    <div className="createPost">
                        <h3>Criar Postagem</h3>
                        <form action="/comunidade">
                            <textarea name="post" cols="30" rows="3" placeholder="Titulo&#10;Subtitulo&#10;Mensagem" required></textarea>
                            <input type="file" name="File" accept="image/*" /><br />
                            <input type="submit" value="Postar" />
                        </form>
                    </div>
                    <div className="card">
                        <h2>Olha só meu plano de estudo! 😊</h2>
                        <h5>Meu plano de estudos, 7 Nov, 2021</h5>
                        <br />
                        <p>Finalmente consegui me tornar mais produtivo graças aos planos de estudos recomendados na platarma e aprendendo com as dicas e artigos do Hippocampus!</p><br />
                    <img src={PostImg1} alt="Erro ao exibir imagem" className="img" /></div>
                </div>
            <div className="footer">
                <h2><small>&copy; Copyright 2021, Hippocampus</small> </h2>
            </div>
        </div>
    )
}
export default Community