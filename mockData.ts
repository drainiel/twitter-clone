// ============================================
// mockData.ts - Update with comments
// full AI generated NOT reviewed at all.
// ============================================
import { Comment, Post } from './types';

export const mockComments: Comment[] = [
  // Comments for Post 1 (Original Example)
  {
    id: 'c1',
    name: 'Sarah Johnson',
    username: 'sarahj',
    text: 'This is so true! Thanks for sharing this perspective.',
    timestamp: '30m',
  },
  {
    id: 'c2',
    name: 'Mike Chen',
    username: 'mikechen',
    text: 'Couldn\'t agree more with this take.',
    timestamp: '45m',
  },
  // Comments for Post 3 (AI/Tech)
  {
    id: 'c3',
    name: 'David Lee',
    username: 'dlee_dev',
    text: 'This is the future, whether we like it or not. The implementation details are key.',
    timestamp: '5m',
  },
  {
    id: 'c4',
    name: 'Emily B.',
    username: 'emilyb_ethicist',
    text: 'I\'m more worried about the training data bias. How are they addressing that?',
    timestamp: '12m',
  },
  {
    id: 'c5',
    name: 'Karl Schmidt',
    username: 'karl_s',
    text: 'It\'s just sophisticated autocomplete. Change my mind.',
    timestamp: '28m',
  },
  {
    id: 'c6',
    name: 'Jasmine K.',
    username: 'jask',
    text: 'Incredible tool for developers, though. My productivity has skyrocketed.',
    timestamp: '32m',
  },
  // Comments for Post 4 (Science/JWST)
  {
    id: 'c7',
    name: 'Dr. Eva Rostova',
    username: 'eva_astro',
    text: 'The clarity is just breathtaking. We\'re seeing structures we only theorized about.',
    timestamp: '1h',
  },
  {
    id: 'c8',
    name: 'Tom Bishop',
    username: 'tombishop',
    text: 'I can\'t even comprehend the distances involved. Makes you feel tiny.',
    timestamp: '1h',
  },
  {
    id: 'c9',
    name: 'Anya Sharma',
    username: 'anyasharma',
    text: 'What\'s the next target for the telescope?',
    timestamp: '2h',
  },
  // Comments for Post 5 (Food/Baking)
  {
    id: 'c10',
    name: 'Ben M.',
    username: 'ben_bakes',
    text: 'That looks delicious! Recipe? 🙏',
    timestamp: '15m',
  },
  {
    id: 'c11',
    name: 'Chloe T.',
    username: 'chloet',
    text: 'Mine always turns out flat. What\'s the secret to that oven spring?',
    timestamp: '18m',
  },
  // Comments for Post 6 (Travel)
  {
    id: 'c12',
    name: 'Liam G.',
    username: 'liam_goes',
    text: 'Added to my bucket list! What an incredible view.',
    timestamp: '50m',
  },
  {
    id: 'c13',
    name: 'Sophia Chen',
    username: 'sophiac',
    text: 'Is it safe for solo travelers? Looks a bit remote.',
    timestamp: '52m',
  },
  {
    id: 'c14',
    name: 'Ryan K.',
    username: 'ryank',
    text: 'I was there last year, it\'s even better in person! Did you try the local market?',
    timestamp: '55m',
  },
  // Comments for Post 7 (Funny/WFH)
  {
    id: 'c15',
    name: 'Marcus Cole',
    username: 'mcole',
    text: 'My \'coworker\' is my cat. He\'s a terrible typist but great at reminders (for food).',
    timestamp: '4h',
  },
  {
    id: 'c16',
    name: 'Jenna W.',
    username: 'jenna_w',
    text: 'I miss the office snacks, not gonna lie.',
    timestamp: '4h',
  },
  // Comments for Post 8 (News/Local)
  {
    id: 'c17',
    name: 'LocalResident',
    username: 'citydweller82',
    text: 'Finally! That pothole on 5th has been there for months.',
    timestamp: '10h',
  },
  // Comments for Post 9 (Books)
  {
    id: 'c18',
    name: 'Bookworm Beth',
    username: 'beths_books',
    text: 'It hits so different reading it as an adult. So many layers I missed as a teen.',
    timestamp: '22m',
  },
  {
    id: 'c19',
    name: 'AlexReader',
    username: 'alexreads',
    text: 'I still think it\'s overrated. The pacing is just too slow for me.',
    timestamp: '30m',
  },
  // Comments for Post 10 (Movies)
  {
    id: 'c20',
    name: 'Cinephile Carl',
    username: 'carl_movies',
    text: 'The visual effects were insane, but the plot was so weak. All style, no substance.',
    timestamp: '3d',
  },
  {
    id: 'c21',
    name: 'FilmFanatic',
    username: 'filmfan1',
    text: 'Unpopular opinion: it was a masterpiece and the plot was intentionally subtle.',
    timestamp: '3d',
  },
  // Comments for Post 11 (Gaming)
  {
    id: 'c22',
    name: 'GamerX11',
    username: 'gx11',
    text: 'Logged 80 hours in the first week. Send help. (And snacks).',
    timestamp: '1d',
  },
  {
    id: 'c23',
    name: 'IndieDev',
    username: 'indiedev_j',
    text: 'The story is great, but the mechanics are so clunky. Hope they patch it.',
    timestamp: '1d',
  },
  // Comments for Post 12 (Fitness)
  {
    id: 'c24',
    name: 'RunnerGirl',
    username: 'run_r_g',
    text: 'That\'s amazing! Great job! Consistency is everything.',
    timestamp: '2h',
  },
  // Comments for Post 13 (Music)
  {
    id: 'c25',
    name: 'MusicMav',
    username: 'mav_tunes',
    text: 'YES! Their second album is a no-skip classic. So underrated.',
    timestamp: '7h',
  },
  // Comments for Post 14 (Art/Design)
  {
    id: 'c26',
    name: 'DesignStudent',
    username: 'design_liv',
    text: 'I love brutalism. So honest and powerful.',
    timestamp: '1h',
  },
  {
    id: 'c27',
    name: 'ArtCritic',
    username: 'art_c',
    text: 'It just looks like an unfinished parking garage to me. Cold and uninviting.',
    timestamp: '1h',
  },
  // Comments for Post 15 (History)
  {
    id: 'c28',
    name: 'HistoryBuff',
    username: 'hist_buff_dan',
    text: 'Mind-blowing. Why don\'t they teach this in school? It changes the whole context.',
    timestamp: '5h',
  },
  // More comments for Post 6 (Travel)
  {
    id: 'c29',
    name: 'Wanderlust',
    username: 'wanderer_99',
    text: 'How were the crowds?',
    timestamp: '58m',
  },
  {
    id: 'c30',
    name: 'TravelTom',
    username: 'tom_travels',
    text: 'What\'s the best time of year to go?',
    timestamp: '1h',
  },
  {
    id: 'c31',
    name: 'backpack_bella',
    username: 'bella_bp',
    text: 'Did you need a visa for this?',
    timestamp: '1h',
  },
  {
    id: 'c32',
    name: 'fly_away',
    username: 'fly_away_jess',
    text: 'This makes me want to book a flight right now.',
    timestamp: '1h',
  },
  {
    id: 'c33',
    name: 'BudgetTravel',
    username: 'budget_tips',
    text: 'Any budget tips for this area?',
    timestamp: '2h',
  },
  {
    id: 'c34',
    name: 'ParadiseSeeker',
    username: 'paradise_s',
    text: 'Looks like actual paradise.',
    timestamp: '2h',
  },
  {
    id: 'c35',
    name: 'FoodieTravels',
    username: 'foodie_travels',
    text: 'Was the food as good as the views?',
    timestamp: '2h',
  },
  {
    id: 'c36',
    name: 'PhotoGuy',
    username: 'photo_guy',
    text: 'Incredible shot! What lens did you use?',
    timestamp: '3h',
  },
  {
    id: 'c37',
    name: 'simple_s',
    username: 'simon',
    text: 'Wow!',
    timestamp: '3h',
  },
  {
    id: 'c38',
    name: 'anna_g',
    username: 'anna_g',
    text: 'Nice!',
    timestamp: '3h',
  },
  {
    id: 'c39',
    name: 'martin_p',
    username: 'martin_p',
    text: 'Stunning.',
    timestamp: '4h',
  },
  {
    id: 'c40',
    name: 'travel_bug',
    username: 't_bug',
    text: 'So jealous!',
    timestamp: '4h',
  },
];

export const mockPosts: Post[] = [
  // 1. Original Example 1 (2 comments)
  {
    id: '1',
    name: 'Asha Rangappa',
    username: 'asharangappa.b...',
    timestamp: '1h',
    text: 'If the National Guard is really in D.C. to protect federal property, they should probably have been at 1600 Pennsylvania Ave. two days ago',
    likes: 4500,
    isLiked: false,
    comments: mockComments.slice(0, 2), // c1, c2
    commentCount: 78,
  },
  // 2. Original Example 2 (0 comments)
  {
    id: '2',
    name: 'zay',
    username: 'indigof...',
    timestamp: '15h',
    text: "I don't let myself be ashamed for reading fanfiction because what do you mean I get to be blessed by diverse array of extremely talented authors writing extended stories about my comfort characters and shows for free? Why would I be ashamed of that?",
    likes: 1000,
    isLiked: false,
    comments: [], // 0 comments
    commentCount: 20,
  },
  // 3. Tech/AI (4 comments)
  {
    id: '3',
    name: 'TechForward',
    username: 'tech_fwd',
    timestamp: '45m',
    text: 'Just demoed the new multi-modal AI from OmniCorp. It can generate coherent code, images, and music from a single prompt. This is going to change everything.',
    likes: 1204,
    isLiked: false,
    comments: mockComments.slice(2, 6), // c3, c4, c5, c6
    commentCount: 92,
  },
  // 4. Science/JWST (3 comments)
  {
    id: '4',
    name: 'NASA Webb Telescope',
    username: 'NASAWebb',
    timestamp: '3h',
    text: 'NEW IMAGE: Webb captures the "Pillars of Creation" in stunning, unprecedented detail. This near-infrared view shows newly formed stars glistening within the dense clouds of gas and dust.',
    likes: 245000,
    isLiked: false,
    comments: mockComments.slice(6, 9), // c7, c8, c9
    commentCount: 4200,
  },
  // 5. Food/Baking (2 comments)
  {
    id: '5',
    name: 'SourdoughSam',
    username: 'sourdough_sam',
    timestamp: '30m',
    text: 'After a month of trying, I finally got the perfect crumb! Look at that ear! 🍞 #sourdough #baking',
    likes: 312,
    isLiked: false,
    comments: mockComments.slice(9, 11), // c10, c11
    commentCount: 22,
  },
  // 6. Travel (15 comments)
  {
    id: '6',
    name: 'Wanderlust Kate',
    username: 'kate_explores',
    timestamp: '2h',
    text: 'Found this hidden gem in the mountains of northern Vietnam. The rice terraces are unreal. Absolutely no tourists here.',
    likes: 8300,
    isLiked: false,
    comments: mockComments.slice(11, 14).concat(mockComments.slice(28, 40)), // 15 comments
    commentCount: 134,
  },
  // 7. Funny/WFH (2 comments)
  {
    id: '7',
    name: 'Alex at Home',
    username: 'alex_wfh',
    timestamp: '5h',
    text: 'My WFH setup is just me moving my laptop from the desk, to the couch, to the bed, and back to the desk in a cycle of diminishing productivity.',
    likes: 562,
    isLiked: false,
    comments: mockComments.slice(14, 16), // c15, c16
    commentCount: 31,
  },
  // 8. News/Local (1 comment)
  {
    id: '8',
    name: 'City News Daily',
    username: 'city_news',
    timestamp: '11h',
    text: 'City council has approved the budget for the new downtown revitalization project. Construction is set to begin in Q2 of next year.',
    likes: 98,
    isLiked: false,
    comments: mockComments.slice(16, 17), // c17
    commentCount: 14,
  },
  // 9. Books (2 comments)
  {
    id: '9',
    name: 'Laura\'s Library',
    username: 'laura_reads_alot',
    timestamp: '45m',
    text: 'Just re-read "The Great Gatsby" for the first time since high school. It\'s amazing how much my perspective on the characters has changed.',
    likes: 240,
    isLiked: false,
    comments: mockComments.slice(17, 19), // c18, c19
    commentCount: 29,
  },
  // 10. Movies (2 comments)
  {
    id: '10',
    name: 'Movie Buff',
    username: 'movie_buff_91',
    timestamp: '3d',
    text: 'Just saw "Dune: Part Two". I\'m speechless. A cinematic achievement. They absolutely nailed the adaptation.',
    likes: 11200,
    isLiked: false,
    comments: mockComments.slice(19, 21), // c20, c21
    commentCount: 812,
  },
  // 11. Gaming (2 comments)
  {
    id: '11',
    name: 'PixelWizard',
    username: 'pixel_wiz',
    timestamp: '2d',
    text: 'The new "Elder Scrolls VI" trailer just dropped. My expectations are dangerously high. The hype is real.',
    likes: 3400,
    isLiked: false,
    comments: mockComments.slice(21, 23), // c22, c23
    commentCount: 450,
  },
  // 12. Fitness (1 comment)
  {
    id: '12',
    name: 'FitLife Chris',
    username: 'chris_fit',
    timestamp: '2h',
    text: 'Just hit a new PR on my deadlift! 405 lbs! 💪 Hard work and consistency finally paying off. Don\'t give up on your goals!',
    likes: 722,
    isLiked: false,
    comments: mockComments.slice(23, 24), // c24
    commentCount: 55,
  },
  // 13. Music (1 comment)
  {
    id: '13',
    name: 'IndieHead',
    username: 'indie_mike',
    timestamp: '8h',
    text: 'Been listening to the band "Glass Animals" non-stop. "Dreamland" is such a vibe. How did I sleep on them for so long?',
    likes: 410,
    isLiked: false,
    comments: mockComments.slice(24, 25), // c25
    commentCount: 42,
  },
  // 14. Art/Design (2 comments)
  {
    id: '14',
    name: 'Architecture Daily',
    username: 'arch_daily',
    timestamp: '1h',
    text: 'The sheer, unapologetic concrete of the Barbican Estate in London. A perfect example of brutalist architecture. What are your thoughts? Love it or hate it?',
    likes: 1900,
    isLiked: false,
    comments: mockComments.slice(25, 27), // c26, c27
    commentCount: 215,
  },
  // 15. History (1 comment)
  {
    id: '15',
    name: 'History Facts',
    username: 'history_facts',
    timestamp: '6h',
    text: 'Fascinating fact: The Vikings were the first Europeans to reach North America, landing in what is now Canada around 1000 AD, nearly 500 years before Columbus.',
    likes: 2200,
    isLiked: false,
    comments: mockComments.slice(27, 28), // c28
    commentCount: 199,
  },
];