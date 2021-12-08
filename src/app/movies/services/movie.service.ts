import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Category, Movie} from "../interfaces/movie.interface";

const Categories = [
  {
    id: 0,
    name: 'All'
  },
  {
    id: 1,
    name: 'Adventure'
  },
  {
    id: 2,
    name: 'SFI'
  },
  {
    id: 3,
    name: 'Comedy'
  },
  {
    id: 4,
    name: 'Drama'
  },
]

const Movies: Array<Movie> = [
  {
    id: 1,
    name: 'Dune',
    category: Categories.find(c => c.name == 'Adventure') as Category,
    length: 142,
    actors: [
      {
        name: 'Tim Robbins',
        age: 62,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Morgan Freeman',
        age: 83,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'The Disciple',
    category: Categories.find(c => c.name == 'Drama') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'The Mitchells vs. the Machines',
    category: Categories.find(c => c.name == 'Comedy') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Nightmare Alley',
    category: Categories.find(c => c.name == 'SFI') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 5,
    name: 'Forrest Gump',
    category: Categories.find(c => c.name == 'Adventure') as Category,
    length: 142,
    actors: [
      {
        name: 'Tim Robbins',
        age: 62,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Morgan Freeman',
        age: 83,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'Fight Club',
    category: Categories.find(c => c.name == 'Drama') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 7,
    name: 'Pulp Fiction',
    category: Categories.find(c => c.name == 'Comedy') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 8,
    name: 'Schindler\'s List',
    category: Categories.find(c => c.name == 'SFI') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 9,
    name: '12 Angry Men',
    category: Categories.find(c => c.name == 'Comedy') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 10,
    name: 'The Dark Knight',
    category: Categories.find(c => c.name == 'SFI') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 11,
    name: 'The Godfather: Part II',
    category: Categories.find(c => c.name == 'Comedy') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
  {
    id: 12,
    name: 'The Godfather',
    category: Categories.find(c => c.name == 'SFI') as Category,
    length: 120,
    actors: [
      {
        name: 'Abhishek Kale',
        age: 30,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Neela Khedar',
        age: 40,
        gender: {
          id: 1,
          type: 'male'
        }
      },
      {
        name: 'Makarand Mukund',
        age: 59,
        gender: {
          id: 1,
          type: 'male'
        }
      }
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(category: Category):Observable<Array<Movie>> {
    return of(Movies.filter(m => category.id === 0 ||  m.category.id === category.id))
  }

  getCategories():Observable<Array<Category>> {
    return of(Categories)
  }

}
