import React from 'react'

const App = () => (
    <>
        <header>Meu cabeçalho</header>
        <main>
            <section>
                <h1>Primeira seção</h1>
                <h2>Titulo2</h2>
                <h3>Titulo3</h3>
                <h4>Titulo4</h4>
                <h5>Titulo5</h5>
                <h6>Titulo6</h6>
                <p>Paragraph</p>
            </section>
            <section>
                <article>
                    Maiores textos
                    <h1>Titulo 1</h1>
                    <h2>Titulo2</h2>
                    <h3>Titulo3</h3>
                </article>
                <article>
                    Menores textos
                    <h4>Titulo4</h4>
                    <h5>Titulo5</h5>
                    <div>
                        <h6>Titulo6</h6>
                        <p>
                            Paragraph
                            teste
                        </p>
                    </div>
                </article>
                <button>
                    Meu butão
                    Grandão
                    Feião
                </button>
                <a href="https://medium.com/">Clique em mim e vá para o Medium</a>
                <img src="https://miro.medium.com/max/615/0*T--jipWt4AphIakU.jpg"/>
            </section>
        </main>  
        <footer>Meu rodapé</footer>
    </>
)

export default App
