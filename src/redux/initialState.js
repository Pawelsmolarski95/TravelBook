
const initialState = {
    posts: [
        {
            image:'https://media.istockphoto.com/id/538866390/pl/zdj%C4%99cie/rzym-i-koloseum-w%C5%82ochy.jpg?s=612x612&w=0&k=20&c=Ndjc1SBC8ilNDNQYNijgnwO639aMFY3P9HrDHm1sahk=',
            id: '1',
            destination: 'Italy',
            title: 'Hello Italy',
            shortDescription: 'Italy is one of our favorite countries to visit...',
            content: 'Main content of the article',
            publishedData:  new Date('02-02-2022'),
            author: 'John Doe',
            mainDescription: 'Italy is one of our favorite countries to visit. It is a must-see country and. Boasting a rich cultural heritage and picturesque landscapes, Italy is easily a favorite among solo travelers, families, and kids alike. After all, who can resist the Tuscan wine lands, the Arno River in Florence, the historic beauty of Rome, and of course, lots of pasta and wine.Even an entire month can fall short if you plan to get lost in the beautiful streets of Italy, exploring every nook and corner. But we understand if you don t have a lot of time in hand. At the end of the day, most of us are corporate slaves who don t really have a say once a meager number of leaves are sanctioned '
        },
        { 
            image:'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            id: '2',
            destination: 'Spain',
            title: 'Hola España ',
            shortDescription: 'Spain is one of our favorite countries to visit...',
            content: 'Main content of the article',
            publishedData: new Date('02-02-2022'),            
            author: 'Jack Sparrow',
            mainDescription: 'No matter how much you have read or how many pictures you have seen of Granadas Alhambra palaces this Moorish pleasure palace will still take your breath away. The Nasrid dynastys royal palace is the artistic highlight of Spains Islamic period, when Al-Andalus - as they called Andalucía - represented the epitome of culture and civilization in medieval Europe The Alhambra complex includes several buildings towers walls, gardens, and a mosque but its the indescribably intricate stone carvings, the delicate filigrees, the magnificent tile-lined ceilings, the graceful arches, and serene courtyards of the Nasrid palace that will haunt your dreams That said, the adjoining palace built for the Emperor Charles V, even in its unfinished state is the finest example of High Renaissance architecture in Spain. And Generalifs terraced gardens offer a peaceful respite from the grandeur, and splendid views back at the rest of the Alhambra.'
        },
        {   
            image:'https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            id: '3',
            destination: 'USA',
            title: 'Good Morning America!',
            shortDescription: 'Not merely a nation but a nation of nations.',
            content: 'Main content of the article',
            publishedData:  new Date('02-02-2022'),
            author: 'Lyndon B Johnson',
            mainDescription: 'One of Californias most formidable natural landscapes, Yosemite National Park features nearly 1,200 square miles of sheer awe: towering waterfalls, millennia-old sequoia trees, striking, daunting cliff faces and some of the most unique rock formations in the United States. But despite its enormous size, most of the tourist activity takes place within the 8-square-mile area of Yosemite Valley. Here youll find the parks most famous landmarks Half Dome and El Capitan – as well as excellent hiking trails through the natural monuments. Even inexperienced hikers can enjoy Yosemite: Guided tours and climbing lessons are available from local adventure outfitters (such as those featured on our list of the best California tours). Just don t expect to experience it by yourself. Like so many other American tourist destinations, crowds are the biggest obstacles to an enjoyable Yosemite vacation – approximately 4 million people visit each year. But if you go at the right time (and start your day a little earlier than usual), Mother Natures wonders will reveal themselves to you in a miraculous and serene way.'
        },
        {   
            image:'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            id: '4',
            destination: 'Greece',
            title: 'Amazing time in sunny Greece',
            shortDescription: 'Enjoy the flora of the main island...',
            content: 'Main content of the article',
            publishedData:  new Date('02-02-2022'),
            author: 'John Doe',
            mainDescription: 'Andros, the northernmost island of the Cyclades, has a long maritime tradition. Explore sandy beaches, rocky coastlines, water springs, hills and green plains The capital of the island Chra (which means “main village) is home to many famous Greek captains and ship owners; Take a look at the remarkable combination of medieval, neoclassical and island style houses. Walk the village down the flights of stairs, around the public square and its narrow streets, visit some remarkable churches and museums, and take a break in its beautiful shops, cafes and restaurants. Dont miss the Frankish castle located on an islet across the main island connected with an arched stone bridge dating back to the 13th century. '
        },
        {   
            image:'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            id: '5',
            destination: 'Netherlands ',
            title: 'Live in the Netherlands!',
            shortDescription: 'Examples best campsites in the Netherlands...',
            content: 'Main content of the article',
            publishedData:  new Date('02-02-2022'),
            author: 'Jan Kowalski',
            mainDescription: 'The Netherlands is a small country sandwiched between Belgium and Germany in Western Europe. The North Sea, located to the north and west of the Netherlands, is continually battering the land The Netherlands is larger than the state of Maryland, but smaller than West Virginia. The Dutch have a saying God made the Earth, but the Dutch made Holland The North Sea would have washed away the Netherlands if the Dutch had not erected defenses to protect their land. Over the centuries, the Dutch have built series of canals, dams, dikes, and pumping stations to keep the sea and rivers back. Today more than 1,491 miles (2,400 kilometers) of dikes shield the low, flat land—almost half of which lies below sea level—from the North Sea. Without the existing dikes 65 percent of the country would be flooded daily '
        }    
    ]
}

export default initialState;