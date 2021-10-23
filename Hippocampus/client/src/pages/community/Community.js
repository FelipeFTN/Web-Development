import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PostImg1 from './PostImg1.webp'
import './Community.css'

function Community(){
    return(
        <div className="Community">
            <Navbar/>
            <div className="header">
                <h2>Comunidade</h2>
            </div>

            <div className="row">
                <div className="leftcolumn">
                    <center>

                    <div className="card">
                        <h2>Olha só meu plano de estudo! 😊</h2>
                        <h5>Meu plano de estudos, 7 Nov, 2021</h5>
                    <img src={PostImg1} alt="Nao encontrei" className="img" />
                        <p>Finalmente consegui me tornar mais produtivo usando apenas os planos de estudos recomendados na platarma e aprendendo com as dicas e artigos do Hippocampus!</p><br />
                    </div>
                    </center>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                    <h2>About Me</h2>
                    <div className="fakeimg" >Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card">
                        <h3>Popular Post</h3>
                    <div className="fakeimg">Image</div><br />
                    <div className="fakeimg">Image</div><br />
                    <div className="fakeimg">Image</div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2><small>&copy; Copyright 2021, Hippocampus</small> </h2>
            </div>
        </div>
    )
}
export default Community