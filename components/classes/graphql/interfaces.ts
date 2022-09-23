export interface ClassData {
  class?: {
    page: {
      content: string
    }
  }
}

export interface ClassVars {
  id: string
}

interface Class {
  id: string
}

export interface ClassesData {
  classes: Class[]
}
