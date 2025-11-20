// Album data with songs
const albumsData = {
    1: {
        id: 1,
        title: "Ruby",
        artist: "Jennie",
        cover: "src/assets/albums/1.jpg",
        songs: [
            { id: 1, title: "Intro: JANE (with FKJ)", duration: "1:38" },
            { id: 2, title: "like JENNIE", duration: "2:03" },
            { id: 3, title: "start a war", duration: "2:45" },
            { id: 4, title: "Handlebars (feat. Dua Lipa)", duration: "3:04" },
            { id: 5, title: "with the IE (way up)", duration: "2:43" },
            { id: 6, title: "ExtraL (feat. Doechii)", duration: "2:48" },
            { id: 7, title: "Mantra", duration: "2:16" },
            { id: 8, title: "Love Hangover (with Dominic Fike)", duration: "3:00" },
            { id: 9, title: "ZEN", duration: "3:21" },
            { id: 10, title: "Damn Right (feat. Childish Gambino & Kali Uchis)", duration: "3:50" },
            { id: 11, title: "F.T.S.", duration: "2:32" },
            { id: 12, title: "Filter", duration: "2:31" },
            { id: 13, title: "Seoul City", duration: "2:44" },
            { id: 14, title: "Starlight", duration: "2:48" },
            { id: 15, title: "twin", duration: "3:28" }
        ]
    },
    2: {
        id: 2,
        title: "Amortage",
        artist: "Jisoo",
        cover: "src/assets/albums/2.jpg",
        songs: [
            { id: 1, title: "earthquake", duration: "3:10" },
            { id: 2, title: "Your Love", duration: "2:53" },
            { id: 3, title: "TEARS", duration: "3:02" },
            { id: 4, title: "Hugs & Kisses", duration: "3:09" }
        ]
    },
    3: {
        id: 3,
        title: "Drip",
        artist: "Babymonster",
        cover: "src/assets/albums/3.jpg",
        songs: [
            { id: 1, title: "CLIK CLAK", duration: "2:49" },
            { id: 2, title: "DRIP", duration: "3:01" },
            { id: 3, title: "Love, Maybe", duration: "3:08" },
            { id: 4, title: "Really Like You", duration: "3:18" },
            { id: 5, title: "BILLIONAIRE", duration: "2:37" },
            { id: 6, title: "Love In My Heart", duration: "3:12" },
            { id: 7, title: "Woke Up In Tokyo", duration: "2:24" },
            { id: 8, title: "FOREVER", duration: "3:33" },
            { id: 9, title: "BATTER UP (Remix)", duration: "3:47" }

        ]
    },
    4: {
        id: 4,
        title: "Me",
        artist: "Jisoo",
        cover: "src/assets/albums/4.jpg",
        songs: [
            { id: 1, title: "Flower (꽃)", duration: "2:54" },
            { id: 2, title: "All Eyes On Me", duration: "2:44" }

        ]
    },
    5: {
        id: 5,
        title: "Square Up",
        artist: "BlackPink",
        cover: "src/assets/albums/5.jpg",
        songs: [
            { id: 1, title: "DDU-DU DDU-DU", duration: "3:29" },
            { id: 2, title: "Forever Young", duration: "3:56" },
            { id: 3, title: "Really", duration: "3:37" },
            { id: 4, title: "See U Later", duration: "3:28" },
            { id: 5, title: "As If It’s Your Last", duration: "3:33" }
        ]
    },
    6: {
        id: 6,
        title: "The Album",
        artist: "BlackPink",
        cover: "src/assets/albums/6.jpg",
        songs: [
            { id: 1, title: "How You Like That", duration: "3:02" },
            { id: 2, title: "Ice Cream (with Selena Gomez)", duration: "2:56" },
            { id: 3, title: "Pretty Savage", duration: "3:28" },
            { id: 4, title: "Bet You Wanna (feat. Cardi B)", duration: "3:27" },
            { id: 5, title: "Lovesick Girls", duration: "3:12" },
            { id: 6, title: "Crazy Over You", duration: "3:04" },
            { id: 7, title: "Love To Hate Me", duration: "3:37" },
            { id: 8, title: "You Never Know", duration: "3:28" }
        ]
    },
    7: {
        id: 7,
        title: "Born Pink",
        artist: "BlackPink",
        cover: "src/assets/albums/7.jpg",
        songs: [
            { id: 1, title: "Pink Venom", duration: "3:07" },
            { id: 2, title: "Shut Down", duration: "2:55" },
            { id: 3, title: "Typa Girl", duration: "2:57" },
            { id: 4, title: "Yeah Yeah Yeah", duration: "3:16" },
            { id: 5, title: "Hard To Love", duration: "3:04" },
            { id: 6, title: "The Happiest Girl", duration: "3:34" },
            { id: 7, title: "Tally", duration: "3:03" },
            { id: 8, title: "Ready For Love", duration: "3:02" }
        ]
    },
    8: {
        id: 8,
        title: "AlterEgo",
        artist: "Lisa",
        cover: "src/assets/albums/8.jpg",
        songs: [
            { id: 1, title: "Born Again (feat. Doja Cat & RAYE)", duration: "3:51" },
            { id: 2, title: "Rockstar", duration: "2:18" },
            { id: 3, title: "Elastigirl", duration: "2:57" },
            { id: 4, title: "Thunder", duration: "2:48" },
            { id: 5, title: "New Woman (feat. ROSALÍA)", duration: "2:59" },
            { id: 6, title: "Fxck Up The World (feat. Future)", duration: "3:04" },
            { id: 7, title: "Rapunzel (feat. Megan Thee Stallion)", duration: "2:45" },
            { id: 8, title: "Moonlit Floor (Kiss Me)", duration: "2:35" },
            { id: 9, title: "When I'm With You (feat. Tyla)", duration: "2:52" },
            { id: 10, title: "Badgrrrl", duration: "2:12" },
            { id: 11, title: "Lifestyle", duration: "2:41" },
            { id: 12, title: "Chill", duration: "2:39" },
            { id: 13, title: "Dream", duration: "3:43" },
            { id: 14, title: "Fxck Up The World (Vixi Solo Version)", duration: "2:55" },
            { id: 15, title: "Rapunzel (Kiki Solo Version)", duration: "2:19" }

        ]
    },
    9: {
        id: 9,
        title: "Rosie",
        artist: "Rose",
        cover: "src/assets/albums/9.jpg",
        songs: [
            { id: 1, title: "number one girl", duration: "3:36" },
            { id: 2, title: "3am", duration: "2:34" },
            { id: 3, title: "two years", duration: "2:47" },
            { id: 4, title: "toxic till the end", duration: "2:36" },
            { id: 5, title: "drinks or coffee", duration: "2:13" },
            { id: 6, title: "APT. (feat. Bruno Mars)", duration: "2:49" },
            { id: 7, title: "gameboy", duration: "2:46" },
            { id: 8, title: "stay a little longer", duration: "4:06" },
            { id: 9, title: "not the same", duration: "3:04" },
            { id: 10, title: "call it the end", duration: "2:21" },
            { id: 11, title: "too bad for us", duration: "3:56" },
            { id: 12, title: "dance all night", duration: "3:34" }

        ]
    },
    10: {
        id: 10,
        title: "Fancy You",
        artist: "Twice",
        cover: "src/assets/albums/10.jpg",
        songs: [
            { id: 1, title: "Fancy", duration: "3:38" },
            { id: 2, title: "Stuck In My Head", duration: "3:20" },
            { id: 3, title: "Girls Like Us", duration: "3:15" },
            { id: 4, title: "Hot", duration: "3:28" },
            { id: 5, title: "Turn It Up", duration: "3:07" },
            { id: 5, title: "Strawberry", duration: "3:12" }
        ]
    },
    11: {
        id: 11,
        title: "Air",
        artist: "Yeji",
        cover: "src/assets/albums/11.jpg",
        songs: [
            { id: 1, title: "Air", duration: "3:14" },
            { id: 2, title: "Invasion", duration: "2:47" },
            { id: 3, title: "Can’t Slow Me, No", duration: "2:58" },
            { id: 4, title: "258", duration: "3:13" }
        ]
    },
    12: {
        id: 12,
        title: "I Feel",
        artist: "Idle",
        cover: "src/assets/albums/12.jpg",
        songs: [
            { id: 1, title: "Queencard", duration: "2:48" },
            { id: 2, title: "Allergy", duration: "2:48" },
            { id: 3, title: "Lucid", duration: "2:45" },
            { id: 4, title: "All Night", duration: "3:14" },
            { id: 5, title: "Paradise", duration: "2:45" },
            { id: 6, title: "Peter Pan", duration: "3:19" }
        ]
    }
};
