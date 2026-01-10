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
      imageUrl: 'https://images.unsplash.com/photo-1553729784-e91953dec042?w=400&h=600&fit=crop',
      rating: 8.4
    },
    {
      id: 2,
      title: 'The King\'s Speech',
      year: 2010,
      director: 'Tom Hooper',
      description: 'The story of King George VI, his unexpected ascension to the throne, and the speech therapist who helped him overcome his stammer.',
      imageUrl: 'https://images.unsplash.com/photo-1560932526-a5b2b8c8c5be?w=400&h=600&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop',
      rating: 9.0
    },
    {
      id: 5,
      title: '1917',
      year: 2019,
      director: 'Sam Mendes',
      description: 'Two young British soldiers during WWI are given a mission to deliver a message that will stop a deadly attack on hundreds of soldiers.',
      imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25f753?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 6,
      title: 'The Card Counter',
      year: 2021,
      director: 'Paul Schrader',
      description: 'An ex-military interrogator turned gambler is haunted by his past and seeks redemption by helping a young man seeking revenge.',
      imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=600&fit=crop',
      rating: 6.9
    },
    {
      id: 7,
      title: '12 Years a Slave',
      year: 2013,
      director: 'Steve McQueen',
      description: 'In the antebellum South, a free Black man is kidnapped and sold into slavery, enduring years of brutal treatment.',
      imageUrl: 'https://images.unsplash.com/photo-1502224562085-639556652f87?w=400&h=600&fit=crop',
      rating: 8.1
    },
    {
      id: 8,
      title: 'Lincoln',
      year: 2012,
      director: 'Steven Spielberg',
      description: 'As the Civil War rages, President Lincoln struggles with opposition as he pursues a course of action to end slavery.',
      imageUrl: 'https://images.unsplash.com/photo-1563306406-e66174fa3787?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 9,
      title: 'Girl, Interrupted',
      year: 1999,
      director: 'James Mangold',
      description: 'A young woman\'s 18-month stay at a mental institution in the 1960s, based on Susanna Kaysen\'s memoir.',
      imageUrl: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 10,
      title: 'The Resistance Banker',
      year: 2018,
      director: 'Joram Lürsen',
      description: 'In Nazi-occupied Amsterdam, banker brothers use their financial expertise to fund the Dutch resistance movement.',
      imageUrl: 'https://images.unsplash.com/photo-1459679749680-18eb1eb37418?w=400&h=600&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
      rating: 7.8
    },
    {
      id: 13,
      title: 'Stalingrad',
      year: 1993,
      director: 'Joseph Vilsmaier',
      description: 'German soldiers face the brutal reality of war on the Eastern Front during the Battle of Stalingrad.',
      imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop',
      rating: 7.5
    },
    {
      id: 14,
      title: 'The Theory of Everything',
      year: 2014,
      director: 'James Marsh',
      description: 'The life story of physicist Stephen Hawking, his groundbreaking work, and his relationship with his wife Jane.',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop',
      rating: 7.7
    },
    {
      id: 15,
      title: 'The Imitation Game',
      year: 2014,
      director: 'Morten Tyldum',
      description: 'Alan Turing and his team work to crack the German Enigma code during WWII, changing the course of history.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop',
      rating: 8.0
    },
    {
      id: 16,
      title: 'All Quiet on the Western Front',
      year: 2022,
      director: 'Edward Berger',
      description: 'A young German soldier faces the realities of war on the Western Front during WWI. A harrowing anti-war film.',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop',
      rating: 7.8
    },
    {
      id: 17,
      title: 'Inglourious Basterds',
      year: 2009,
      director: 'Quentin Tarantino',
      description: 'In Nazi-occupied France, a group of Jewish-American soldiers plan to assassinate Nazi leaders.',
      imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 18,
      title: 'The Monuments Men',
      year: 2014,
      director: 'George Clooney',
      description: 'An unlikely WWII platoon is tasked with rescuing art masterpieces from Nazi thieves and returning them to their owners.',
      imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=600&fit=crop',
      rating: 6.1
    },
    {
      id: 19,
      title: 'Hacksaw Ridge',
      year: 2016,
      director: 'Mel Gibson',
      description: 'WWII medic Desmond Doss saves 75 men in Okinawa without firing a shot, becoming the first conscientious objector to receive the Medal of Honor.',
      imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=400&h=600&fit=crop',
      rating: 8.1
    },
    {
      id: 20,
      title: 'Belfast',
      year: 2021,
      director: 'Kenneth Branagh',
      description: 'A young boy\'s childhood in Belfast during the tumultuous late 1960s, amid the beginning of the Troubles.',
      imageUrl: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=400&h=600&fit=crop',
      rating: 7.2
    },
    {
      id: 21,
      title: 'Darkest Hour',
      year: 2017,
      director: 'Joe Wright',
      description: 'Winston Churchill faces a defining moment during the early days of WWII as Nazi forces sweep across Western Europe.',
      imageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&h=600&fit=crop',
      rating: 7.4
    },
    {
      id: 22,
      title: 'The Man Who Knew Infinity',
      year: 2015,
      director: 'Matt Brown',
      description: 'The story of Indian mathematician Srinivasa Ramanujan and his friendship with his mentor G.H. Hardy at Cambridge.',
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=600&fit=crop',
      rating: 7.2
    },
    {
      id: 23,
      title: 'Agora',
      year: 2009,
      director: 'Alejandro Amenábar',
      description: 'Hypatia, a philosopher in 4th century Alexandria, fights to save the library while facing religious turmoil.',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 7.1
    },
    {
      id: 24,
      title: 'Lemon Tree',
      year: 2008,
      director: 'Eran Riklis',
      description: 'A Palestinian widow fights to save her lemon grove when Israel\'s defense minister moves next door.',
      imageUrl: 'https://images.unsplash.com/photo-1590502160462-1b5e3c4f5253?w=400&h=600&fit=crop',
      rating: 7.3
    },
    {
      id: 25,
      title: '300',
      year: 2006,
      director: 'Zack Snyder',
      description: 'King Leonidas and 300 Spartans fight against overwhelming Persian forces at the Battle of Thermopylae.',
      imageUrl: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&h=600&fit=crop',
      rating: 7.6
    },
    {
      id: 26,
      title: 'Good Will Hunting',
      year: 1997,
      director: 'Gus Van Sant',
      description: 'A janitor at MIT has a genius-level intellect but chooses to work menial jobs until a therapist helps him face his past.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 27,
      title: 'Searching for Bobby Fischer',
      year: 1993,
      director: 'Steven Zaillian',
      description: 'A prepubescent chess prodigy struggles with the pressures of being a potential world champion.',
      imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=600&fit=crop',
      rating: 7.4
    },
    {
      id: 28,
      title: 'The Truman Show',
      year: 1998,
      director: 'Peter Weir',
      description: 'An insurance salesman discovers his entire life is actually a reality TV show, with everyone around him being actors.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
      rating: 8.2
    },
    {
      id: 29,
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
      director: 'Michel Gondry',
      description: 'When a couple undergoes a procedure to erase each other from their memories, one man fights to hold onto their relationship.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      rating: 8.3
    },
    {
      id: 30,
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop',
      rating: 8.7
    },
    {
      id: 31,
      title: 'Valkyrie',
      year: 2008,
      director: 'Bryan Singer',
      description: 'A dramatization of the July 20, 1944 assassination attempt on Adolf Hitler by a group of German officers.',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop',
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
