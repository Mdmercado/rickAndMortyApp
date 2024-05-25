export type Status = 'Alive' | 'Dead' | 'unknown'
export type Gender = 'Male' | 'Female' | 'unknown'

export interface CharacterProps {
  id: number
  name: string
  status: Status
  species: string
  type: string
  gender: Gender
  image: string
  url: string
  created: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  episode: string[]
}

export interface InfoProps {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharacterResponse {
  info: InfoProps
  results: CharacterProps[]
}
