import * as React from 'react'
import { getResource } from '../../utils/getResource'
import {
  type CharacterProps,
  type CharacterResponse,
  type InfoProps,
} from '../../types/character'
import Character from '../Character/Character'
import Pagination from '../Pagination'
import './Characters.css'

const Characters: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterProps[]>([])
  const [page, setPage] = React.useState(1)
  const [info, setInfo] = React.useState<InfoProps>({
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  })
  React.useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getResource<CharacterResponse>(
          `/character?page=${page}`
        )
        const { info, results } = response as CharacterResponse
        setCharacters(results)
        setInfo(info)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCharacters()
  }, [page])

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <h1
        style={{
          fontSize: ' 2rem ',
          margin: 0,
          textAlign: 'center',
          padding: '10px 0',
        }}
      >
        Lista de Personajes
      </h1>
      <section className="characters">
        {characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </section>
      <Pagination
        currentPage={page}
        totalPages={info.pages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </>
  )
}

export default Characters
