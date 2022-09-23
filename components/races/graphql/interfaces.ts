export interface RaceData {
  race?: {
    page: {
      content: string
    }
  }
}

export interface RaceVars {
  id: string
}

interface Race {
  id
}

export interface RacesData {
  races?: Race[];
}