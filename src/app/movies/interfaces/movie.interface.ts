export interface Movie {
  id: number,
  name: string,
  category: Category,
  length: number,
  actors: Array<Actor>,
}

export interface Actor {
  name: string,
  age: number,
  gender: Gender,
}

export interface Category {
  id: number,
  name: string,
  selected?: boolean
}

export interface Gender {
  id: number,
  type: string
}
