import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PostImg1 from './PostImg1.webp'
import './Community.css'
import axios from 'axios'

function Community(){

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3001/posts')
            .then(res => {
                setData([...data, res.data]);  
            })
    }, []);

    return(
        <div className="Community">
            <Navbar/>
                <div className="posts">
                    <div className="createPost">
                        <h2>Criar Postagem</h2>
                        <form action="http://localhost:3001/post" enctype="multipart/form-data" method="post">
                            <textarea name="post" cols="30" rows="3" placeholder="Titulo&#10;Subtitulo&#10;Mensagem" required></textarea>
                            <input type="file" name="someExpressFiles" multiple="multiple" required/><br />
                            <input type="submit" value="Postar" />
                        </form>
                    </div>{
                    data.map((item, index) => {
                        console.log(item)
                        return item.map((iItem, iIndex) => {
                            console.log(iItem)
                            return (
                                <div className="card">
                                    <h2>{iItem.title}</h2>
                                    <h5>{iItem.subtitle+" 24 Out, 2021"}</h5>
                                    <br />
                                    <p>{iItem.message}</p><br />
                                    <img src={"./images/"+iItem.image} className="img" alt={iItem.subtitle} />
                                </div>
                            )
                        })
                    })}
                    <div className="card">
                        <h2>Olha só meu plano de estudo! 😊</h2>
                        <h5>Meu plano de estudos, 24 Out, 2021</h5>
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