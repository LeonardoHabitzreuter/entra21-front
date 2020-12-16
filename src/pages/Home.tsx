import React from 'react'
import Texts from '../components/Texts'
import Form from '../components/Form'
import { Title } from '../common/Titles'

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE
export const Home = () => (
  <main>
    <img src="https://s2.glbimg.com/dnwkywRafj7EhXLo9UtdAMsQHtQ=/0x0:1000x613/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/w/0/bkXAQGSeevX5fNk1yReQ/lindoso.jpg" />
    <Texts />
    <Form />
  </main>
)

export default Home