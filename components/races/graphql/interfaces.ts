export interface RaceData {
  race?: {
    page: {
      content: string
    }
  }
}

interface Race {
  id: string
}

export interface RaceListData {
  races: Race[]
}

export interface RaceVars {
  id: string
}
