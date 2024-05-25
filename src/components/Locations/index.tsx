import * as React from 'react'
import { getResource } from '../../utils/getResource'
import { LocationProps, LocationsResponse } from '../../types/locations'
import { type InfoProps } from '../../types/character'
import Location from '../Location'
import './locations.css'
import Pagination from '../Pagination'

const Locations: React.FC = () => {
  const [locations, setLocations] = React.useState<LocationProps[]>([])
  const [page, setPage] = React.useState(1)
  const [info, setInfo] = React.useState<InfoProps>({
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  })
  React.useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getResource<LocationsResponse>(
          `/location?page=${page}`
        )
        const { info, results } = response as LocationsResponse
        setLocations(results)
        setInfo(info)
      } catch (error) {
        console.error(error)
      }
    }
    fetchLocations()
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
    <div className="locations-container">
      <h1 className="locations-title">Locaciones</h1>
      <section className="locations-grid">
        {locations.map((location) => (
          <Location key={location.id} {...location} />
        ))}
      </section>
      <Pagination
        currentPage={page}
        totalPages={info.pages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  )
}

export default Locations
