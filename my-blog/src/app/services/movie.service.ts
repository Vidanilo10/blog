import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      description: 'During WWI, a French general orders his men on a suicide mission and then puts them on trial for cowardice when they refuse. A powerful anti-war masterpiece.',
      imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
      rating: 8.4
    },
    {
      id: 2,
      title: 'The King\'s Speech',
      year: 2010,
      director: 'Tom Hooper',
      description: 'The story of King George VI, his unexpected ascension to the throne, and the speech therapist who helped him overcome his stammer.',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
      rating: 8.0
    },
    {
      id: 3,
      title: 'The Pianist',
      year: 2002,
      director: 'Roman Polanski',
      description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II. Based on true events.',
      imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=600&fit=crop',
      rating: 8.5
    },
    {
      id: 4,
      title: 'Schindler\'s List',
      year: 1993,
      director: 'Steven Spielberg',
      description: 'In German-occupied Poland, industrialist Oskar Schindler becomes concerned for his Jewish workforce and works to save them from the Holocaust.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
      rating: 9.0
    },
    {
      id: 5,
      title: '1917',
      year: 2019,
      director: 'Sam Mendes',
      description: 'Two young British soldiers during WWI are given a mission to deliver a message that will stop a deadly attack on hundreds of soldiers.',
      imageUrl: 'https://images.unsplash.com/photo-1574267432644-f00bae5bc03e?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 6,
      title: 'The Card Counter',
      year: 2021,
      director: 'Paul Schrader',
      description: 'An ex-military interrogator turned gambler is haunted by his past and seeks redemption by helping a young man seeking revenge.',
      imageUrl: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=600&fit=crop',
      rating: 6.9
    },
    {
      id: 7,
      title: '12 Years a Slave',
      year: 2013,
      director: 'Steve McQueen',
      description: 'In the antebellum South, a free Black man is kidnapped and sold into slavery, enduring years of brutal treatment.',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
      rating: 8.1
    },
    {
      id: 8,
      title: 'Lincoln',
      year: 2012,
      director: 'Steven Spielberg',
      description: 'As the Civil War rages, President Lincoln struggles with opposition as he pursues a course of action to end slavery.',
      imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 9,
      title: 'Girl, Interrupted',
      year: 1999,
      director: 'James Mangold',
      description: 'A young woman\'s 18-month stay at a mental institution in the 1960s, based on Susanna Kaysen\'s memoir.',
      imageUrl: 'https://images.unsplash.com/photo-1516981442399-a91139e20ff8?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 10,
      title: 'The Resistance Banker',
      year: 2018,
      director: 'Joram Lürsen',
      description: 'In Nazi-occupied Amsterdam, banker brothers use their financial expertise to fund the Dutch resistance movement.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=600&fit=crop',
      rating: 7.1
    },
    {
      id: 11,
      title: 'The Book Thief',
      year: 2013,
      director: 'Brian Percival',
      description: 'A young girl finds solace in stealing books and sharing them during the horrors of WWII Germany.',
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      rating: 7.5
    },
    {
      id: 12,
      title: 'Dunkirk',
      year: 2017,
      director: 'Christopher Nolan',
      description: 'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German army and evacuated during WWII.',
      imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
      rating: 7.8
    },
    {
      id: 13,
      title: 'Stalingrad',
      year: 1993,
      director: 'Joseph Vilsmaier',
      description: 'German soldiers face the brutal reality of war on the Eastern Front during the Battle of Stalingrad.',
      imageUrl: 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?w=400&h=600&fit=crop',
      rating: 7.5
    },
    {
      id: 14,
      title: 'The Theory of Everything',
      year: 2014,
      director: 'James Marsh',
      description: 'The life story of physicist Stephen Hawking, his groundbreaking work, and his relationship with his wife Jane.',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop',
      rating: 7.7
    },
    {
      id: 15,
      title: 'The Imitation Game',
      year: 2014,
      director: 'Morten Tyldum',
      description: 'Alan Turing and his team work to crack the German Enigma code during WWII, changing the course of history.',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=600&fit=crop',
      rating: 8.0
    },
    {
      id: 16,
      title: 'All Quiet on the Western Front',
      year: 2022,
      director: 'Edward Berger',
      description: 'A young German soldier faces the realities of war on the Western Front during WWI. A harrowing anti-war film.',
      imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
      rating: 7.8
    },
    {
      id: 17,
      title: 'Inglourious Basterds',
      year: 2009,
      director: 'Quentin Tarantino',
      description: 'In Nazi-occupied France, a group of Jewish-American soldiers plan to assassinate Nazi leaders.',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 18,
      title: 'The Monuments Men',
      year: 2014,
      director: 'George Clooney',
      description: 'An unlikely WWII platoon is tasked with rescuing art masterpieces from Nazi thieves and returning them to their owners.',
      imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=600&fit=crop',
      rating: 6.1
    },
    {
      id: 19,
      title: 'Hacksaw Ridge',
      year: 2016,
      director: 'Mel Gibson',
      description: 'WWII medic Desmond Doss saves 75 men in Okinawa without firing a shot, becoming the first conscientious objector to receive the Medal of Honor.',
      imageUrl: 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?w=400&h=600&fit=crop',
      rating: 8.1
    },
    {
      id: 20,
      title: 'Belfast',
      year: 2021,
      director: 'Kenneth Branagh',
      description: 'A young boy\'s childhood in Belfast during the tumultuous late 1960s, amid the beginning of the Troubles.',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop',
      rating: 7.2
    },
    {
      id: 21,
      title: 'Darkest Hour',
      year: 2017,
      director: 'Joe Wright',
      description: 'Winston Churchill faces a defining moment during the early days of WWII as Nazi forces sweep across Western Europe.',
      imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=600&fit=crop',
      rating: 7.4
    },
    {
      id: 22,
      title: 'The Man Who Knew Infinity',
      year: 2015,
      director: 'Matt Brown',
      description: 'The story of Indian mathematician Srinivasa Ramanujan and his friendship with his mentor G.H. Hardy at Cambridge.',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop',
      rating: 7.2
    },
    {
      id: 23,
      title: 'Agora',
      year: 2009,
      director: 'Alejandro Amenábar',
      description: 'Hypatia, a philosopher in 4th century Alexandria, fights to save the library while facing religious turmoil.',
      imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
      rating: 7.1
    },
    {
      id: 24,
      title: 'Lemon Tree',
      year: 2008,
      director: 'Eran Riklis',
      description: 'A Palestinian widow fights to save her lemon grove when Israel\'s defense minister moves next door.',
      imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784670?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 25,
      title: '300',
      year: 2006,
      director: 'Zack Snyder',
      description: 'King Leonidas and 300 Spartans fight against overwhelming Persian forces at the Battle of Thermopylae.',
      imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop',
      rating: 7.6
    },
    {
      id: 26,
      title: 'Good Will Hunting',
      year: 1997,
      director: 'Gus Van Sant',
      description: 'A janitor at MIT has a genius-level intellect but chooses to work menial jobs until a therapist helps him face his past.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 27,
      title: 'Searching for Bobby Fischer',
      year: 1993,
      director: 'Steven Zaillian',
      description: 'A prepubescent chess prodigy struggles with the pressures of being a potential world champion.',
      imageUrl: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=600&fit=crop',
      rating: 7.4
    },
    {
      id: 28,
      title: 'The Truman Show',
      year: 1998,
      director: 'Peter Weir',
      description: 'An insurance salesman discovers his entire life is actually a reality TV show, with everyone around him being actors.',
      imageUrl: 'https://images.unsplash.com/photo-1574267432644-f00bae5bc03e?w=400&h=600&fit=crop',
      rating: 8.2
    },
    {
      id: 29,
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
      director: 'Michel Gondry',
      description: 'When a couple undergoes a procedure to erase each other from their memories, one man fights to hold onto their relationship.',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 30,
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
      rating: 8.7
    },
    {
      id: 31,
      title: 'Valkyrie',
      year: 2008,
      director: 'Bryan Singer',
      description: 'A dramatization of the July 20, 1944 assassination attempt on Adolf Hitler by a group of German officers.',
      imageUrl: 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?w=400&h=600&fit=crop',
      rating: 7.1
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
