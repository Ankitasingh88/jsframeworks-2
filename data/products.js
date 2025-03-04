function Products(type, name, size, material, price, brand, description, availability, image) {
    this.type = type; // Added type to distinguish between all products
    this.name = name; // Added name of the products
    this.size = size; //size of clothing item(e.g "M", "L")
    this.material = material; //Fabric or material(e.g "Cotton", "Leather")
    this.price = price; // Price of items
    this.brand = brand; // Brand name(e.g, "H&M", "NIKE")
    this.description = description; //Brief product description
    this.availability = availability; //Whether the items is in stock or not
    this.image = image; //Images URL of the product
}

let women = [
    new Products("Women", "TOPS", "S,M,L,XXL", "cotton","100","H&M","Women’s tops come in various styles, fabrics, and designs to suit different occasions and preferences. From casual t-shirts and tank tops to elegant blouses and formal shirts, they offer versatility and comfort. Popular styles include crop tops, off-shoulder tops, peplum tops, tunics, and wrap tops. They can be made from cotton, silk, chiffon, or synthetic blends, catering to different seasons and fashion trends. Whether paired with jeans, skirts, or trousers, women’s tops enhance personal style and confidence.","All over Sweden","../images/topsWomen.png"),

    new Products("Women", "DRESS", "XXS-XXL", "shiffon","300", "ZARA","Dresses are crafted from materials like cotton, chiffon, silk, and lace, adding to their aesthetic and functional appeal. Whether for casual wear, office settings, or special events, women's dresses remain a timeless and essential part of fashion", "Only MOS", "../images/dressWomen.jpg"),

    new Products("Women", "JEANS", "28-42", "denim", "200", "Levi's", "Women’s jeans are a versatile and stylish wardrobe staple, available in various fits, cuts, and washes to suit different body types and fashion preferences. From classic skinny and straight-leg jeans to trendy wide-leg, flared, and boyfriend styles, they offer comfort and durability. Popular materials include stretch denim for flexibility and rigid cotton for a structured look. Whether high-waisted for a flattering silhouette or low-rise for a casual vibe, women’s jeans can be dressed up or down for any occasion", "all over in Sweden", "../images/jeans2.jpeg"),
];

let men = [
    new Products("Men", "T-SHIRT's", "M,L,XL", "Cotton", "250", "Levi's", "Men's T-shirts are casual, comfortable, and versatile clothing items made from soft fabrics like cotton, polyester, or blends. They come in various styles, including crew neck, V-neck, and polo, with options for short or long sleeves. T-shirts can be plain, printed, or graphic, making them suitable for everyday wear, sports, or layering under jackets and shirts. They are a staple in every wardrobe, offering a balance of style and practicality", "available online", "../images/levis.jpg"),
    
    new Products("Men", "HOODIES", "M, XL, XXL", "Cotton", "350", "H&M", "Men's hoodies are versatile, comfortable, and stylish wardrobe essentials. They come in various styles, including pullover and zip-up designs, and are made from materials like cotton, fleece, or polyester for warmth and durability. Hoodies are perfect for casual wear, workouts, or layering in cooler weather. They often feature pockets, adjustable hoods, and trendy graphics or minimalist designs, making them a go-to choice for fashion and function.", "available on MOS", "../images/hood2.png"),

    new Products("Men", "MEN'S-JEANS", "32-44", "denim", "450", "Tommy Hilfiger", "Men's jeans are versatile and durable pants made from denim fabric, designed for casual and semi-formal wear. They come in various styles, including slim fit, skinny, straight, bootcut, and relaxed fit, catering to different preferences and body types. Available in multiple washes, colors, and distressed or classic designs, jeans are a staple in every man's wardrobe, offering comfort and timeless fashion appeal.", "available online","../images/menJeans.png"),
];

let kids = [
    new Products("KIDS", "JACKETS", "28-32cm", "Polyster", "400", "Bjorn-borg", "Children's jackets are essential for keeping kids warm and comfortable in various weather conditions. They come in different styles, such as lightweight windbreakers, insulated puffer jackets, and waterproof raincoats. Designed with soft, breathable fabrics and fun colors or patterns, children's jackets combine functionality with style. Many feature hoods, zip closures, and pockets for added convenience. Whether for winter chills or breezy autumn days, a good jacket ensures kids stay cozy and protected.", "online available","../images/kidsjacket2.png"),

    new Products("KIDS", "FROCKS", "19-35cm", "Rayon and Cotton mixed", "299", "ZARA", "Children's frocks are stylish and comfortable outfits designed for young girls. They come in various designs, fabrics, and colors, ranging from casual cotton dresses to elegant party wear with lace, frills, and embroidery. These frocks are perfect for different occasions like birthdays, weddings, and festive celebrations, ensuring both comfort and charm for little ones.", "At Barkarby shop", "../images/frocks.webp"),

    new Products("KIDS", "SHIRTS AND PANTS", "21-42cm", "Cotton", "500", "H&M", "Children's shirts and pants are essential wardrobe staples designed for comfort, style, and practicality. Shirts for kids come in a variety of fabrics, such as cotton, denim, and jersey, often featuring fun prints, vibrant colors, or playful designs. They are tailored to allow ease of movement for active little ones. Children’s pants are available in various styles, including jeans, leggings, cargo pants, and shorts, ensuring comfort for all seasons. Both shirts and pants are made to withstand the wear and tear of children's energetic lifestyles while keeping them looking stylish.", "All over in Sweden", "../images/sandpImages.webp"),
];

let beauty = [
    new Products("BEAUTY", "FACE-CREAM", "200ml", "Herbal" ,"150", "Kama", "Face cream is a skincare product designed to hydrate, nourish, and protect the skin. It helps maintain the skin’s moisture balance, prevent dryness, and improve texture. Depending on the formula, face creams can also target specific concerns like aging, acne, or pigmentation. They typically contain a blend of ingredients like vitamins, antioxidants, and oils to enhance skin health and promote a smoother, more youthful appearance. Daily use of a suitable face cream can improve skin elasticity and provide a protective barrier against environmental stressors." , "online", "../images/facecream.png"),

    new Products("BEAUTY", "FRAGRANCE", "150ml", "Rose" ,"299", "Rituals", "Fragrances are crafted through a blend of essential oils, aromatic compounds, and other ingredients, and are commonly found in perfumes, lotions, candles, and cleaning products. Whether subtle or bold, fragrance has been a part of human culture for centuries, symbolizing elegance, luxury, or even nostalgia.", "all over in shop", "../images/fragrance2.png"),

    new Products("BEAUTY", "GLASSES", "1 PAIR", "UV PROTECTION" ,"1999", "Ray-Ban", "Glasses can be prescribed to address nearsightedness, farsightedness, astigmatism, or presbyopia. In addition to improving vision, they can also serve as a fashion statement or a means of protecting the eyes from harmful UV rays, glare, or digital screens. With advancements in technology, glasses now come in a variety of styles, designs, and special features like anti-reflective coatings and blue light filters." , "MOS", "../images/glasses2.png"),
];

function Content (subHeading,maincontent){
    this.subHeading = subHeading,
    this.maincontent = maincontent
}

let homeContent = [
    new Content("Experience the World of Fashion like never before!!",
        "Steps into Fashion Outlet, where you can get beautiful and colorful dresses for yourself and for your loveone at any age and also get beauty products which enhance your beauty and make you more stylish you get products at best price and size!!"
    ),
    new Content("Women - The heart of the world",
        "From the single place to whole world you saw women, they used different colors and patterns of clothes which any how suits her."
    ),
    new Content("Men - Men are very simple and kind heart",
        "Enter the world smartness with simplicity, men always want to make himself simple and elegent but they spend more money on acessories, here you got everything on your buget!",
    ),
    new Content("Children - Love and more love no other thing to say",
        "Waking into new journey of life, growing up kids everytime needs clothes very frequently!",
    ),
    new Content("Beauty - Beauty is in the eye of the beholder",
        "Some appreciate natural beauty, while others embrace enhancements like makeup, fashion, and cosmetic procedures.Standards of beauty vary across cultures and time periods, reflecting societal values and traditions."
    ),
]

let womenContent = [
    new Content("Shopping for women is more than just a transaction—it's an experience filled with excitement, self-expression, and personal care."),
     
    new Content("Tops- When selecting a top, consider factors like fabric, fit, and occasion. Lightweight cotton and linen tops work well for summer, while heavier knits are ideal for winter. Fitted tops create a sleek silhouette, while loose styles offer comfort and ease"),

    new Content("Dresses- Women’s dresses continue to evolve with fashion trends, offering endless options for expressing individuality and grace. Whether you prefer a timeless little black dress or a trendy midi dress, there's a perfect dress for every woman and every moment"),

    new Content("Jeans- No matter the style, women's jeans remain a timeless fashion essential evolving with trends while staying true to their classic appeal"),
]

let menContent = [
    new Content("Men's shopping includes a variety of fashion, accessories, and grooming essentials, ranging from casual wear to formal attire. With online and in-store options, men can explore brands that suit their style, budget, and comfort preferences."),

    new Content("T-Shirt's - Men's t-shirts are versatile wardrobe staples, offering comfort and style for any occasion. Available in various fits, fabrics, and designs, they suit casual and smart-casual looks effortlessly."),

    new Content("Hoodies - Men's hoodies are versatile, comfortable, and perfect for casual wear or layering in colder weather. They come in various styles, from zip-up to pullover, offering both warmth and streetwear appeal."),

    new Content("Jeans - Men's jeans are versatile, durable, and stylish, making them a wardrobe essential for any occasion. They come in various fits like slim, straight, and relaxed, offering comfort and a timeless look."),
]

let kidsContent = [
    new Content("Kids shopping is an exciting adventure where they get to pick out toys, clothes, or snacks that catch their eye. It's a fun, colorful experience filled with curiosity and joy as they explore store aisles"),

    new Content("Jackets - Kid's jackets are designed to keep little ones warm and comfortable during normal to harsh weather, offering both style and functionality. With fun colors and playful designs, they provide a perfect blend of warmth and protection for active kids."),

    new Content("Frocks - Kid's frocks are colorful and comfortable dresses designed for young girls, offering both style and ease for everyday wear. With playful patterns and soft fabrics, they make dressing up fun and effortless for little ones."),

    new Content("Shirt & Pants - Kid's shirts are designed for comfort and style, offering playful patterns and soft fabrics. Paired with matching pants, they provide easy mobility and a cute, coordinated look for everyday wear."),
]

let beautyContent = [
    new Content("Beauty is found in the simplicity of a moment, where the soul connects with what it sees. It's not just in appearance, but in the light that radiates from within."),

    new Content("Face-Cream - Face cream is a skincare product designed to hydrate and nourish the skin, keeping it soft and smooth. It helps to protect the skin from environmental stressors while maintaining its moisture balance."),

    new Content("Fragrance - Fragrance is the art of capturing emotions and memories in a scent, transforming the air into a sensory experience. It has the power to evoke feelings, transport us to distant places, and leave lasting impressions."),

    new Content("Glasses - Glasses are optical devices designed to correct vision and enhance clarity. They come in various styles, offering both functionality and fashion."),
]

const allProducts = [...women, ...men, ...kids, ...beauty]; //spread operator

export {allProducts,women,men,kids,beauty, homeContent,womenContent,menContent,kidsContent,beautyContent};
