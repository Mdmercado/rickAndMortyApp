export interface LocationsResponse {
  info: Info
  results: LocationProps[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface LocationProps {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}
