import React, { Fragment } from 'react'
import SearchContainer from './SearchContainer.js'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
  <section className="home">
    <div className="hero">
      <Container maxWidth="sm" style={{ height: '100vh' }}>
        <h1>
          <FontAwesomeIcon icon={faCocktail} /> Alchemy <FontAwesomeIcon icon={faFlask} />
        </h1>
        <SearchContainer />
      </Container>
    </div>
  </section>
)

export default Home
