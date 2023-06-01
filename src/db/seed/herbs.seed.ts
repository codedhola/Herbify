import { Herb } from "@db/models/herbs.model";

export const Herb_Seed:Array<Pick<Herb, "id" | "name" | "description" | "botanicalName" | "effect" | "image" >> = [

    // MEDICINAL HERBS
    {
        id: "372ffb05-cad2-4aeb-b881-46aac3362c78",
        name: "Ginger",
        description:"Ginger is a spice and herbal remedy that has been used for centuries in various cultures for its medicinal properties. Which helps in digestion, Anti-inflammatory, Pain Relief, Antioxidant, Blood Sugar Regulation, Immune Support. It's worth noting that while ginger has many potential health benefits, it is not a substitute for professional medical advice. If you have any specific health concerns or conditions, it's best to consult with a healthcare provider before incorporating ginger into your routine or using it as a medical treatment.",
        botanicalName: "Zingiber officinale",
        effect: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Koeh-146-no_text.jpg/800px-Koeh-146-no_text.jpg"
    },
    {
        id: "e99b8380-d14a-43c9-adc7-62e7d5a4423c",
        name: "Sage",
        description:"Sage  is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers. Sage has antimicrobial properties that may help fight against certain bacteria and fungi, making it beneficial for oral health. It is commonly found in natural mouthwashes and toothpaste to promote gum health and prevent oral infections.  Sage is widely used as a culinary herb, known for its distinct aroma and flavor. It is commonly used in cooking to enhance the taste of various dishes, particularly in Mediterranean cuisine",
        botanicalName: "Salvia officinalis",
        effect: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Salvia_officinalis0.jpg"

    },
    {
        id: "721bcbf2-7b0a-42bb-a3c4-64742fb2f383",
        name: "Tumeric",
        description:"Turmeric plants (Curcuma longa) are highly valued for their rhizomes, which are commonly used as a spice and for their medicinal properties.  Turmeric has been used in traditional skincare practices for its potential benefits for the skin. It may help reduce inflammation, support wound healing, and improve the overall appearance of the skin.",
        botanicalName: "Zingiberaceae",
        effect: 7,
        image: "https://t3.ftcdn.net/jpg/02/70/09/88/360_F_270098811_CzjDTNmRXoQg78CKORlTe8oJDtR3WVTZ.jpg"

    },
    {
        id: "99c667d6-7caf-45c5-aef2-aa4f7e92d20c",
        name: "Garlic",
        description:"Garlic is a species of bulbous flowering plant in the genus Allium. Garlic has been traditionally used as a natural antimicrobial agent. It may help combat bacterial, viral, and fungal infections. It is sometimes used as a topical remedy for skin infections and as a natural remedy for respiratory tract infections. Garlic has been discovered to help in Cancer Prevention",
        botanicalName: "Allium sativum",
        effect: 7,
        image: "https://www.thespruceeats.com/thmb/6_fmgarRiHlvwbYJoSM_Wf2C6mI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all-about-garlic-995693-hero-05-9cce07461e1a42cbbcfd3349e9506d48.jpg"

    },
    {
        id: "90a86e17-9a7a-42e4-a446-f9e56a454402",
        name: "Peppermint",
        description:"Peppermint is a hybrid species of mint, a cross between watermint and spearmint.  Peppermint oil applied topically or inhaled as a vapor has been found to provide relief from tension headaches and migraines. It may help relax muscles and improve blood flow in the head and neck area. Peppermint has a cooling and soothing effect on the respiratory system. It may help relieve symptoms of respiratory conditions such as coughs, congestion, sinusitis, and bronchitis. Peppermint oil vapor is often used in inhalation therapy or as an ingredient in cough syrups and chest rubs.",
        botanicalName: "Mentha x piperita",
        effect: 8,
        image: "https://previews.123rf.com/images/volff/volff1205/volff120500028/13585459-leaves-of-mint-on-a-white-background.jpg"

    },
    {
        id: "68740e17-759b-4794-bac5-7c40085eeda7",
        name: "Echinacea",
        description:"Echinacea is a genus of herbaceous flowering plants in the daisy family. It has ten species, which are commonly called coneflowers. Echinacea is often used to support and stimulate the immune system. It is believed to enhance the activity of immune cells, such as white blood cells, and promote the production of antibodies. It is commonly used as a natural remedy for the prevention and treatment of the common cold and other respiratory infections.",
        botanicalName: "coneflowers",
        effect: 5,
        image: "https://cdn.shopify.com/s/files/1/0072/0909/1117/products/Echinacea-vendor-unknown-1630679472.jpg"

    },
    {
        id: "8c5da7a4-c64d-4064-98e0-f9518fa4f933",
        name: "FeverFew",
        description:"feverfew, is a flowering plant in the daisy family. Feverfew is commonly used as a natural remedy for migraines. It may help reduce the frequency, severity, and duration of migraine attacks. Some research suggests that feverfew may help prevent migraines by inhibiting the release of certain chemicals in the brain that can trigger migrain. Feverfew has been used to alleviate symptoms associated with menstruation, such as menstrual cramps and discomfort. It may help reduce the intensity and duration of menstrual pain.",
        botanicalName: "Tanacetum parthenium",
        effect: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Feverfew_Flowers.jpg"

    },
    {
        id: "be6b96d6-7cb0-4236-9462-db83767edd36",
        name: "Holy Basil",
        description:"Holy Basil is an aromatic perennial plant in the family Lamiaceae. It is native to the Indian subcontinent and widespread as a cultivated plant throughout the Southeast Asian tropics.Holy basil is commonly used to support respiratory health. It may help alleviate symptoms of respiratory conditions like cough, cold, bronchitis, and asthma. Holy basil leaves are often used in herbal teas and remedies for respiratory relief. Also known for its positive effects on mood and cognitive function. It may help improve focus, concentration, and memory",
        botanicalName: "Allium sativum",
        effect: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Tulsi_or_Tulasi_Holy_basil.jpg"

    },
    {
        id: "ab971794-753d-4eb2-83e5-517ab099e231",
        name: "Ginko",
        description:"Ginkgo or ginkgo, also known as the maidenhair tree, is a species of gymnosperm tree native to China. Ginkgo has been widely studied for its potential cognitive-enhancing effects. It may help improve memory, attention, and cognitive performance, particularly in older adults. Ginkgo is believed to enhance blood flow and oxygen supply to the brain, as well as possess antioxidant properties that protect against neuronal damage. Ginkgo has vasodilatory effects, meaning it helps widen blood vessels and improve blood flow.",
        botanicalName: "Ginkgo Biloba",
        effect: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ginkgo_biloba_scanned_leaf.jpg/1200px-Ginkgo_biloba_scanned_leaf.jpg"

    },
    {
        id: "92dade7f-1d26-41b9-ab34-d20c2f958a50",
        name: "Lemon Balm",
        description:"Lemon balm is a perennial herbaceous plant in the mint family and native to south-central Europe, the Mediterranean Basin, Iran, and Central Asia, but now naturalised elsewhere. Lemon balm is known for its calming effects on the nervous system. It may help reduce anxiety, promote relaxation, and improve sleep quality. Lemon balm is often used in herbal teas and aromatherapy for its soothing properties. Lemon balm has antiviral properties that may be beneficial in managing conditions caused by the herpes simplex virus, including cold sores (oral herpes). ",
        botanicalName: "Melissa officinalis",
        effect: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lemon_balm_2.JPG/800px-Lemon_balm_2.JPG"

    },
    {
        id: "b00e4f7e-796c-4d86-ba4c-1404788f86cb",
        name: "Rosemary",
        description:"Rosemary is a shrub with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region. Rosemary has been studied for its potential cognitive-enhancing effects. Inhalation or ingestion of rosemary aroma or extracts may help improve memory, concentration, and mental performance. Some research suggests that rosemary may have a positive impact on age-related cognitive decline and neurodegenerative disorders like Alzheimer's disease. Rosemary has been used traditionally to promote healthy hair and scalp.",
        botanicalName: "Salvia rosmarinus",
        effect: 7,
        image: "https://t3.ftcdn.net/jpg/03/80/58/52/360_F_380585291_6vARA4vxRyWAhUkdMExarlXNppMqOsoK.jpg"

    },
    {
        id: "51cc3339-1839-45ad-adef-2b543739d133",
        name: "Lavender",
        description:"Lavandula is a genus of 47 known species of flowering plants in the mint family. Lavender is widely recognized for its calming and relaxation-inducing properties. Inhalation of lavender essential oil or using lavender products, such as bath oils or candles, may help reduce stress, anxiety, and promote relaxation. It is often used in aromatherapy for its soothing effects. Lavender is commonly used to improve sleep quality.",
        botanicalName: "Lavandula",
        effect: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lavender.JPG/1200px-Lavender.JPG"

    },
    {
        id: "520bff6c-2227-4ef5-9f16-4fb3e79c9981",
        name: "Thyme",
        description:"Thyme has been used to support digestive health and promote healthy digestion. It may help relieve indigestion, gas, and bloating. Thyme tea or infused water can be consumed for its digestive benefits. Thyme may have potential benefits for heart health. Thyme is known for its expectorant properties, which may help promote the clearance of mucus and phlegm from the airways.",
        botanicalName: "Thymus vulgaris",
        effect: 7,
        image: "https://previews.123rf.com/images/margo555/margo5551303/margo555130300057/18533937-thyme-fresh-herb-isolated-on-white-background.jpg"

    },

    // CULINARY HERBS

    
    {
        id: "50a8aa82-ecef-4354-8c0e-2c3dc96c5655",
        name: "Cilantro",
        description:"Coriander has areas of strength that are sometimes depicted as “lathery.” It works out positively for zesty food varieties. Cilantro is utilized in salsas, sautés, and curries. Cilantro doesn’t cook well and ought to be added just before serving for the best taste.",
        botanicalName: "Coriandrum sativum",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Cilantro-1-672x420.jpg"

    },
    {
        id: "dc8cb98b-786c-4226-9755-bc6614868acb",
        name: "Basil",
        description:"Basil is perhaps the leading culinary spice. Sweet basil, the most widely recognized type, is aromatic of licorice and cloves. It is utilized in sauces, sandwiches, soups, mixed greens, etc. It makes food delicious.",
        botanicalName: "Ocimum basilicum",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Cilantro-1-672x420.jpg"

    },
    {
        id: "fe496235-37fe-4191-803b-ef81ab71c73c",
        name: "Lemon Grass",
        description:"Lemongrass has a sharp lemon flavor and scent. It is typically used to enhance teas and soups and is often tracked down in Thai and Vietnamese cooking. To utilize lemongrass, cut off the top and base, and eliminate the external layers. It is an excellent herb for cooking and making food fantastic.",
        botanicalName: "Cymbopogon citratus",
        effect: 7,
        image: ""

    },
    {
        id: "af45d835-8a81-4a48-afce-babcccc1ebd0",
        name: "Mint",
        description:"Mint isn’t a tiny bit of twig that decorates your sweet plate. It can be used in sweet and flavorful dishes. Though there are numerous assortments, spearmint is liked for cooking. You can add it to a gathering of dishes and beverages like peas, carrots, frozen yogurt, tea, and mojitos.",
        botanicalName: "Mentha",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Mint.jpg"

    },
    {
        id: "eddb6b52-ac7f-43dc-94aa-880505d94293",
        name: "Parsley",
        description:"Parsley is a marginally peppery, new enhanced spice used to prepare various dishes and is often used for trimming. Search for level leaf or Italian parsley, which gives more flavor than wavy. Dried herb doesn’t have a severe serious taste, so utilize it whenever the situation allows.",
        botanicalName: "Petroselinum crispum",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Parsley.webp"

    },
    {
        id: "d7e5d290-22d7-4a1a-8f3e-b306ed83c29e",
        name: "Tarragon",
        description:"Tarragon frequently added to white wine vinegar, loaning sweet, fragile fragrance and flavor. It coordinates well with fish, omelets, and chicken cooked with mustard, and it’s a pivotal part of the sauce. Tarragon is generally challenging to track down; however, when you get it, you’ll adore the ambivalent, peppery taste it grants.",
        botanicalName: "Artemisia dracunculus",
        effect: 7,
        image: "https://www.crazymasalafood.com/wp-content/images/2022/09/8.-Marjoram-1-2.png"

    },
    {
        id: "5e8bba63-aed0-46ce-87e6-b2b7961c2a9a",
        name: "Marjoram",
        description:"Marjoram is like oregano, yet it is better and milder. Marjoram works out positively for meats like pork, sheep, and veal. Its flavor is best when added close to the furthest limit of the cooking system. It is an excellent, flavorful herb.",
        botanicalName: "Origanum majorana",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Tarragon.webp"

    },
    {
        id: "fa8b4269-fe47-41f2-b7b1-e32b688d32b0",
        name: "Oregano",
        description:"Oregano’s Greek name signifies “delight of the mountain.” The Greeks love oregano sprinkled on plates of mixed greens, while the Italians shower it on pizza and slip it into pureed tomatoes. Add hacked oregano to vinaigrette, or use it in poultry, game, or fish dishes when you need to take them in a Greek or Italian heading.",
        botanicalName: "Origanum vulgare",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Oregano.jpg.webp"

    },
    {
        id: "e3a07b62-8d50-484f-aa77-c84a92cd91aa",
        name: "Savory",
        description:"This is one more individual herb from the mint family, alongside oregano and marjoram — is a fragile spice with little, light green leaves and a near plant-like appearance. There are two kinds of delicious— winter and summer exquisite — and both taste unique.",
        botanicalName: "Satureja",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Savory.webp"

    },
    {
        id: "6a6d12cb-63e8-4fe8-8bae-3ac20f688acc",
        name: "Curry Leaves",
        description:"The leaves have an appearance like narrows leaves; however, marginally more modest in size is, additionally, named Indian straight leaves. Curry leaves have a particularly unpleasant and impactful taste with acidic undercurrents. The leaves are not just pursued their sweet-smelling flavor in the food varieties but also upgrade the medical advantages of the feast, making it seriously engaging.",
        botanicalName: "Murraya koenigii",
        effect: 7,
        image: "https://crazymasalafood.com/wp-content/images/2023/01/Curry-Leaves.webp"

    },


    // AROMATIC HERBS


    {
        id: "0b77ef11-6736-4989-aea1-854a797c9eda",
        name: "Gardenia",
        description:`Gardenia are one of the most well-known and loved fragrances in the garden and are always a good choice for both their scent and their beautiful blooms and foliage.

        These heat-loving evergreen shrubs don’t do well in cold weather though, so they are best grown in moderate year-round climates, or planted in pots and brought indoors once it starts to get chilly.
        
        Gardenias generally prefer partial shade and moist, yet well-drained acidic soil when outside and bright light and humidity when kept inside.`,
        botanicalName: "",
        effect: 7,
        image: "https://www.gardenia.net/storage/app/public/guides/detail/U29oJlIbExvlWUd1VFRvKt3kxZqHzGnDGrStWW7T.webp"

    },
    {
        id: "95102cdf-9ff8-4b76-aa0f-94427226d981",
        name: "Dianthus",
        description:`There are over 300 varieties of dianthus, including Sweet William, pinks, and carnations.

        Many types of this genus have flowers with a fragrant, spicy smell similar to cinnamon or clove and most dianthus have pink, red or white flowers with notched petals.
        
        You can source hardy annual, biennial or perennial dianthus varieties.
        
        They are most often used in borders or potted displays and should be planted in full sun, with well-drained soil.`,
        botanicalName: "",
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2016/03/Dianthus-600x399.jpg.webp"

    },
    {
        id: "52ec94bc-5684-4cd5-8231-bf956b91af2f",
        name: "Sweet Autumn Clematis",
        description:`This hardy climber grows quickly, and features handsome, deep green leaves and a mass of star-shaped, fragrant white flowers.

        The sweet autumn clematis is easy to grow but due to its invasive nature will require regular pruning.
        
        Position it in full sun and moist, yet well-drained soil.`,
        botanicalName: "",
        effect: 7,
        image: "https://images.finegardening.com/app/uploads/2018/01/23141920/clematisterniflora_mg_2_lg-main-500x500.jpg"

    },
    {
        id: "18deef12-bf5f-4cfa-8bb9-200c8131c4bb",
        name: "Nicotiana",
        description: `Nicotiana exists in variety of whites, pinks, reds and pastels – to fill your garden with a strong, sweet fragrance.

        Because the trumpet-shaped flowers usually open in the evening or night, that’s when the scent will be strongest, so grow them on your patio or wherever you enjoy al fresco evening dining.
        
        Keep in mind they prefer full sun to partial shade and moist soil with good drainage.`,
        botanicalName: "",
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2020/06/Nicotiana-768x512.jpg.webp"

    },
    {
        id: "b3517864-fd5c-4dc4-9ca6-f6d7ed9b61a5",
        name: "Oriental Lily",
        description:`With a powerful scent, and beautiful speckled flower, Oriental lilies come in shades of white, pink and yellow.

        Growing up to six feet, they often bloom in late summer when most other bulbs have finished.`,
        botanicalName: "",
        effect: 7,
        image: "https://www.gardenia.net/storage/app/public/uploads/images/detail/7lGr6yvaQFvY9ZkhQYYp1Y8cisrKZhEQmf8FnJQq.webp"

    },
    {
        id: "86f2cfa2-9e63-4b69-bbd6-bfc6b618367b",
        name: "Calendula",
        description:"",
        botanicalName: `Calendula not only has a simple beauty, but it is edible, easy to maintain and offers numerous therapeutic uses.
        Also known as ‘pot marigolds’, these annuals bloom constantly throughout the growing season.
        The leaves are fragrant, and the flowers have a sweet, resin-like aroma … unlike most other plants traditionally grown for fragrance.
        While calendula prefer full sun, they will tolerate light shade in warmer areas.`,
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2016/03/pot-marigold-600x399.jpg.webp"

    },
    {
        id: "17aeaa5c-60b6-4bf1-99e1-461ce0c06101",
        name: "Jasmine",
        description:"Jasmine is as good as valium at calming the nerves…and with none of the side effects! To enjoy a truly relaxing backyard experience, a jasmine plant or two is a must!. It’s also an important ingredient in the perfume industry, with 83% of all women’s perfumes containing the fragrance.",
        botanicalName: "",
        effect: 7,
        image: "https://st.depositphotos.com/1434090/4418/i/600/depositphotos_44186817-stock-photo-jasmine-flower-on-white-background.jpg"

    },
    {
        id: "7eb41e5a-3db8-4b81-a659-80f7ec6d153c",
        name: "Roses",
        description:"Roses are undeniably beautiful. There are so many roses to choose from, but some of the best in terms of scent include the strongly fragrant ‘Honey Perfume’, the sweet and lemony ‘Heritage’, the rich and sweet ‘Fragrant Plum’",
        botanicalName: "",
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2016/03/Yellow-Roses-600x399.jpg.webp"

    },
    {
        id: "cbc7c195-df77-4146-857f-98c67627a18b",
        name: "Scented Geraniums",
        description:"These flowers are best placed along hedging, borders, or in your favorite place to sit in the garden – the leaves of these plants need to be touched or brushed in order to release their rich smell.",
        botanicalName: "",
        effect: 7,
        image: "https://gardenerspath.com/wp-content/uploads/2021/06/Best-Scented-Geranium-Varieties-Cover.jpg"

    },
    {
        id: "eb636a98-866b-49d2-9754-d10bf6db2e77",
        name: "Juniper",
        description:"Juniper shrubs don’t need to be pruned to maintain their shape, making them a low maintenance option for a boundary hedge. The National Wildlife Federation counts juniper shrubs as one of the top 10 plants for wildlife because they provide food, shelter and nesting sites for birds.",
        botanicalName: "",
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2016/03/Juniper-600x398.jpg.webp"

    },
    {
        id: "eb86e8b5-006a-4be5-bcf5-a0bf87bb561b",
        name: "Eucalyptus",
        description:"Eucalyptus, with its silvery aromatic leaves and bark which smells like a blend of menthol and sage, is a great addition to any fragranced garden. It prefers warmer climates – as it hails from Australia – although it thrives in moist, well-drained soil. Those who live in colder regions should grow eucalyptus in patio containers, and move indoors for the winter.",
        botanicalName: "",
        effect: 7,
        image: "https://t4.ftcdn.net/jpg/01/98/72/11/360_F_198721162_0YqRFISNYBKBI82yPKYPBRPr9gq8G7p7.jpg"

    },
    {
        id: "eb86e8b5-006a-4be5-bcf5-a0bf87bb561b",
        name: "Bay Laurel",
        description:"Bay has a sweet and strong scent with notes of warming nutmeg. Today, it is most well-known as a flavoring for soups and stews but it was once made into wreaths to crown the winners of ancient Greek games. Bay doesn’t do well in most regions as it is sensitive to frost, but it’s easy to grow in a pot and bring indoors when temperatures dip.",
        botanicalName: "",
        effect: 7,
        image: "https://www.naturallivingideas.com/wp-content/uploads/2020/06/Bay-laurel-768x587.jpg.webp"

    },


    // ORNAMENTAL HERBS

    {
        id: "1a136288-f67a-43e1-b4ac-4cb717df98bf",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "6300d641-60e1-4587-a630-5cab09a82e8b",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "b146971a-900a-4d1a-815c-9c0de429ea57",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "20dab937-e79a-423b-a4c3-400d54dc1a9e",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "deb74e1e-8e3e-458c-bca4-3cf0e99c9267",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "e2fea679-7df2-4844-a761-ba1d6abd80bb",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "80df0e94-07a5-4d93-8cf5-f9a1e37a1248",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "556376e1-8236-4924-86c1-21213cd3e111",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "e09abe8d-da6a-4c63-9f02-a6c524bbe07e",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
    {
        id: "c4fcd621-25f0-41c4-be59-8b9f93110d9b",
        name: "",
        description:"",
        botanicalName: "",
        effect: 7,
        image: ""

    },
  ];
