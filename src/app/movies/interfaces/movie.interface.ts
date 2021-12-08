export interface MovieInterface {
  name: string,
  category: Category,
  length: string,
  actors: string,
}

export interface Actor {
  name: string,
  age: number,
  gender: Gender,
}

export interface Category {
  id: number, name: string
}
export interface Gender {
  id: number, type: string
}
