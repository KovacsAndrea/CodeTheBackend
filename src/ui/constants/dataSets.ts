import { InfoCardData, PageData, QandA } from "./models";

export const cardsList: InfoCardData[] = [
  {
    title: "Emilia Romagna Race",
    info: "Held at the legendary Imola circuit, this race is known for its historic corners and passionate fans. The circuit, officially named Autodromo Enzo e Dino Ferrari, is deeply rooted in Formula 1 history and was the scene of both triumph and tragedy. Its high-speed chicanes and tight layout demand precision, while the surrounding hills and Tifosi add an unmistakable Italian charm.",
    imagePath: "/images/EmiliaRomagna.jpg", 
    routePath: "/emilia-romagna",
  },
  {
    title: "Monaco Race",
    info: "The crown jewel of Formula 1, Monaco’s narrow streets and glamorous atmosphere create a unique racing challenge. Drivers thread their cars through the twisty layout with millimeter precision, brushing barriers in every sector. Beyond the racing, the event is a spectacle of luxury, heritage, and prestige — the very soul of Grand Prix racing in its purest, most elite form.",
    imagePath: "/images/Monaco.jpg",
    routePath: "/monaco",
  },
  {
    title: "Spain Race",
    info: "A classic race held at the Circuit de Barcelona-Catalunya, famous for its fast straights and technical corners. The track is a benchmark for car development, often used in pre-season testing. The Spanish Grand Prix frequently reveals true car performance due to its aerodynamic demands, and its sweeping turns are a favorite among engineers and seasoned fans alike.",
    imagePath: "/images/Spain.jpg",
    routePath: "/spain",
  },
];

export const NavBarPageList: PageData[] = [
  {
    pageName: "HOME",
    pagePath: '/home'
  },
  {
    pageName: "ABOUT",
    pagePath: '/about'
  },
  {
    pageName: "EMILIA ROMAGNA",
    pagePath: '/emilia-romagna'
  },
  {
    pageName: "MONACO",
    pagePath: '/monaco'
  },
  {
    pageName: "SPAIN",
    pagePath: '/spain'
  },
]

export const QandAs: QandA[] = [
  {
    question: "Tell me about yourself!",
    answer: "Right, introductions then. I’m No. 283. Bit of an odd name, maybe — but let’s just say it carries a touch of racing heritage, if you know where to look. I was built for the Atlassian x Williams Racing hackathon — designed to help you predict the race outcomes for Alex Albon, Carlos Sainz, and the team’s Constructors’ points. Three races, high stakes, and just enough code to keep things spicy. Whether you’re here for stats, predictions, or a bit of history - I’m ready on the grid!"
  },
  {
    question: "Tell me about your name!",
    answer: "Ah, yes! ‘No. 283’ — that’s not just for show! My name is a nod to 283 Pinner Road in Harrow, northwest London, where Sir Frank Williams kicked off his racing dreams. Back in the mid-60s, that little house was buzzing with energy. Frank lived there with a whole crew of young racers — names like Piers Courage and Bubbles Horsley — proper characters, all of them. They turned that place into a base of operations, fixing up their cars in the drive, loading them onto battered vans, and heading off across Europe chasing trophies and prize money. It wasn’t glamorous — it was guts, grease, and grit. That’s where the Williams spirit was born. So yes, I carry the name No. 283 with a bit of pride. It reminds me that world-class legacies can start in the most unassuming places."
  },
  {
    question: "How do you work?",
    answer: "Ah, you're curious how I tick, are you? Well then, let’s talk linear regression — the bread and butter of predictive models. Picture this: you’ve got a scatter of past race results — position, lap times, weather, tyre choices — all floating about. Linear regression draws a neat little line through that cloud, trying to best fit the data and spot a pattern. That line? It's essentially saying, ‘Given these past ingredients, here's where I reckon the next result will fall.’ If you'd like to dive even deeper, you can take a look at my 'ABOUT' page!"
  },
]

export const EmiliaRomagnaPageData = {
  pageinfo: "Alright, here’s what I’ve cooked up for Emilia-Romagna. Picture this: Imola’s tight corners, high-speed stretches, and that cheeky Variante Alta chicane — it’s not exactly a Sunday drive. I ran the data, the drama, the weather, the whispers... maybe even a bit of luck. These are my best guesses for how Alex, Carlos, and the team will fare when the lights go out.",
  pageHistory: "Here I'll throw in a little bit about the Emilia Romagna race, history presented in a really cool way, maybe a bit of Williams' history on this track.",
  pageData: "I'll talk a little bit about the factors that influenced my predictions, such as weather, tyres, strategies, pit stops, track type, and so on. I'd love to make a graph in mathlab or octave to have a visual display of the linear regression we are applying. Also, I really want this stuff to be dynamic. Weather is taken automatically from the web, last race positions are also taken automatically."
}

export const MonacoPageData = {
  pageinfo: "This is the Monaco Page, and we're not there quite yet. I'm still waiting on the results on the Impla track, to cook up the numbers more accurately. Untill then, hold tight, warm up your tyres, and stay tuned!",
  pageHistory: "Monaco's legendary circuit, find all about it here!",
  pageData: "I'll talk a little bit about the factors that influenced my predictions, such as weather, tyres, strategies, pit stops, track type, and so on. I'd love to make a graph in mathlab or octave to have a visual display of the linear regression we are applying. Also, I really want this stuff to be dynamic. Weather is taken automatically from the web, last race positions are also taken automatically."
}

export const SpainPageData = {
  pageinfo: "Two more races to go untill we get here! See you then! Let's write a lot so we know how it looks and if the page is done right. We don't want to have our writing go all over the place now, don't we? All this text will be neatly wrapped in its MUI containers. It's actually the first time I'm really using MUI. Sure, I used it in the past, but just for components that were too time consuming to code manually, like charts and all that. In my previous projects, I focused on coding and styling everything from scratch. Here, however, I wanted to make my web applicaiton responsive. Yep, all screen sizes, from an Iphone XE to 4k. \n Honestly, it was a pain, but I'm glad I did it. MUI was a great help in that regard. Doubt I could have done it without the breakpoints it offers, which I all updated in a module in my project, setting everything from xs to xl to false, then adding my own, such as phones, tablets, desktops, and so on. Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  pageHistory: "Spain's marvelous circuit with its tight corners and straight lalala partea aia dreapta geniala, si mai punem un pic de istorie aici. Mai mult scriu sa vad cum arata cu niste paragrafe ca lumea.",
  pageData: "I'll talk a little bit about the factors that influenced my predictions, such as weather, tyres, strategies, pit stops, track type, and so on. I'd love to make a graph in mathlab or octave to have a visual display of the linear regression we are applying. Also, I really want this stuff to be dynamic. Weather is taken automatically from the web, last race positions are also taken automatically."
}