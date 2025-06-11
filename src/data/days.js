const days = [
    {
        day: 1,
        title: "Shibuya Crossing & Sushi",
        city: "Tokyo",
        description: "Arrive in Tokyo and explore the world's busiest crossing, then try authentic sushi.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/2177/"
    },
    {
        day: 2,
        title: "Akihabara & Temples",
        city: "Tokyo",
        description: "Visit Senso-ji Temple, Tokyo Skytree, and Akihabara.",
        image: "https://images.unsplash.com/photo-1713917457116-f0b5d968a238?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/2178/"
    },
    {
        day: 3,
        title: "Nature & Shrines",
        city: "Nikko",
        description: "Day trip to Nikko for waterfalls, mountains, and ornate shrines.",
        image: "https://images.unsplash.com/photo-1598420328973-18484a664428?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/"
    },
    {
        day: 4,
        title: "Hot Springs",
        city: "Hakone",
        description: "Take a scenic train and enjoy an onsen (hot spring bath).",
        image: "https://images.unsplash.com/photo-1706189767508-8df45439f92c?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/itineraries/outdoor-art-hot-spring-resorts-and-fuji-views-in-hakone/"
    },
    {
        day: 5,
        title: "Temples & Tea",
        city: "Kyoto",
        description: "Visit Fushimi Inari and enjoy a traditional tea ceremony.",
        image: "https://images.unsplash.com/photo-1539036982489-398455e43248?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/1128/"
    },
    {
        day: 6,
        title: "Arashiyama Bamboo Forest",
        city: "Kyoto",
        description: "Stroll through the bamboo grove and visit monkey park.",
        image: "https://images.unsplash.com/photo-1625904835711-fa25795530e8?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/1141/"
    },
    {
        day: 7,
        title: "Giant Buddha",
        city: "Nara",
        description: "See the Daibutsu and feed friendly deer in Nara Park.",
        image: "https://images.unsplash.com/photo-1689295046186-5a42620047aa?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/1588/"
    },
    {
        day: 8,
        title: "Street Food Tour",
        city: "Osaka",
        description: "Try takoyaki and okonomiyaki in Dotonbori.",
        image: "https://images.unsplash.com/photo-1590495620659-162d9966d7ad?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/2207/"
    },
    {
        day: 9,
        title: "Castle Visit",
        city: "Himeji",
        description: "Tour the iconic white Himeji Castle.",
        image: "https://images.unsplash.com/photo-1573416033034-e42e14b545d2?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/1030/"
    },
    {
        day: 10,
        title: "Souvenirs & Departure",
        city: "Tokyo",
        description: "Return to Tokyo for final shopping and departure.",
        image: "https://images.unsplash.com/photo-1726669217393-ee74997f5deb?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/destinations/kanto/tokyo/"
    }
];

export default days;



/*
const days = [
    {
        day: 1,
        title: "Shibuya Crossing & Sushi",
        city: "Tokyo",
        description: "Arrive in Tokyo and explore the world's busiest crossing, then try authentic sushi.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/2177/"
    },
    {
        day: 2,
        title: "Akihabara & Temples",
        city: "Tokyo",
        description: "Visit Senso-ji Temple, Tokyo Skytree, and Akihabara.",
        image: "https://images.unsplash.com/photo-1713917457116-f0b5d968a238?auto=format&fit=crop&w=400&q=80",
        link: "https://www.japan.travel/en/spot/2178/"
    },
    {
        day: 3,
        title: "Nature & Shrines",
        city: "Nikko",
        description: "Day trip to Nikko for waterfalls, mountains, and ornate shrines.",
        link: "https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/"
    },
    {
        day: 4,
        title: "Hot Springs",
        city: "Hakone",
        description: "Take a scenic train and enjoy an onsen (hot spring bath).",
        link: "https://www.japan.travel/en/itineraries/outdoor-art-hot-spring-resorts-and-fuji-views-in-hakone/"
    },
    {
        day: 5,
        title: "Temples & Tea",
        city: "Kyoto",
        description: "Visit Fushimi Inari and enjoy a traditional tea ceremony.",
        link: "https://www.japan.travel/en/spot/1128/"
    },
    {
        day: 6,
        title: "Arashiyama Bamboo Forest",
        city: "Kyoto",
        description: "Stroll through the bamboo grove and visit monkey park.",
        link: "https://www.japan.travel/en/spot/1141/"
    },
    {
        day: 7,
        title: "Giant Buddha",
        city: "Nara",
        description: "See the Daibutsu and feed friendly deer in Nara Park.",
        link: "https://www.japan.travel/en/spot/1588/"
    },
    {
        day: 8,
        title: "Street Food Tour",
        city: "Osaka",
        description: "Try takoyaki and okonomiyaki in Dotonbori.",
        link: "https://www.japan.travel/en/spot/2207/"
    },
    {
        day: 9,
        title: "Castle Visit",
        city: "Himeji",
        description: "Tour the iconic white Himeji Castle.",
        link: "https://www.japan.travel/en/spot/1030/"
    },
    {
        day: 10,
        title: "Souvenirs & Departure",
        city: "Tokyo",
        description: "Return to Tokyo for final shopping and departure.",
        link: "https://www.japan.travel/en/destinations/kanto/tokyo/"
    }
];

export default days; */