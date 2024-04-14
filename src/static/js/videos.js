class Video {
    constructor(url, attribute) {
        this.url = url;
        this.attribute = attribute;
    }
}


const allVideos = [

 new Video('/static/images/educational/How AIs, like ChatGPT, Learn.jpg', 'educational'),
 new Video('/static/images/educational/How Earth Moves.jpg', 'educational'),
 new Video('/static/images/educational/The Infinite Hotel Paradox - Jeff Dekofsky.jpg', 'educational'),
 new Video('/static/images/educational/The Oldest Unsolved Problem in Math.jpg', 'educational'),

 new Video('static/images/fashionbeauty/Balmain Fall Winter 2024 Fashion Show.jpg', 'fashionbeauty'),
 new Video('static/images/fashionbeauty/CHANEL Spring-Summer 2024 Haute Couture Show — CHANEL Shows.jpg', 'fashionbeauty'),
 new Video('static/images/fashionbeauty/NO MAKEUP MAKEUP Natural Everyday Makeup for Beginners.jpg', 'fashionbeauty'),
 new Video("static/images/fashionbeauty/Troye Sivan's Epic No Makeup-Makeup Routine  Beauty Secrets  Vogue.jpg", 'fashionbeauty'),

 new Video("static/images/gaming/Assassin's Creed Mirage.jpg", 'gaming'),
 new Video('static/images/gaming/Budget Gaming - Scott The Woz.jpg', 'gaming'),
 new Video('static/images/gaming/I Mined for 12 hours in Minecraft.jpg', 'gaming'),
 new Video('static/images/gaming/We made all 78 Breath of the Wild recipes in one day.jpg', 'gaming'),
 
 new Video('static/images/news/ABC World News Tonight with David Muir.jpg', 'news'),
 new Video('static/images/news/Fed Chair Jerome Powell The 2024 60 Minutes Interview.jpg', 'news'),
 new Video('static/images/news/LIVE NBC News NOW.jpg', 'news'),
 new Video('static/images/news/Woman describes near miss with bridge collapse.jpg', 'news'),

 new Video('static/images/sports/3 Key Rule Changes for MLB in 2024!.jpg', 'sports'),
 new Video('static/images/sports/One In A Million Tennis Moments....jpg', 'sports'),
 new Video('static/images/sports/this announcer deserves a raise.jpg', 'sports'),
 new Video('static/images/sports/Top 15 Most Memorable NBA Dunks of All-Time.jpg', 'sports'),
];




export default allVideos
