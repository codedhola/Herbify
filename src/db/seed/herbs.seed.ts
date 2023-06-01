import { Herb } from "@db/models/herbs.model";

export const Herb_Seed:Array<Pick<Herb, "id" | "name" | "description" | "botanicalName" | "effect" | "image" >> = [

    // MEDICINAL HERBS
    {
        id: "372ffb05-cad2-4aeb-b881-46aac3362c78",
        name: "Ginger",
        description:"Ginger is a spice and herbal remedy that has been used for centuries in various cultures for its medicinal properties. Which helps in digestion, Anti-inflammatory, Pain Relief, Antioxidant, Blood Sugar Regulation, Immune Support. It's worth noting that while ginger has many potential health benefits, it is not a substitute for professional medical advice. If you have any specific health concerns or conditions, it's best to consult with a healthcare provider before incorporating ginger into your routine or using it as a medical treatment.",
        botanicalName: "Zingiber officinale",
        effect: 8,
        image: ""
    },
    {
        id: "e99b8380-d14a-43c9-adc7-62e7d5a4423c",
        name: "Sage",
        description:"Sage  is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers. Sage has antimicrobial properties that may help fight against certain bacteria and fungi, making it beneficial for oral health. It is commonly found in natural mouthwashes and toothpaste to promote gum health and prevent oral infections.  Sage is widely used as a culinary herb, known for its distinct aroma and flavor. It is commonly used in cooking to enhance the taste of various dishes, particularly in Mediterranean cuisine",
        botanicalName: "Salvia officinalis",
        effect: 5,
        image: ""

    },
    {
        id: "721bcbf2-7b0a-42bb-a3c4-64742fb2f383",
        name: "Tumeric",
        description:"Turmeric plants (Curcuma longa) are highly valued for their rhizomes, which are commonly used as a spice and for their medicinal properties.  Turmeric has been used in traditional skincare practices for its potential benefits for the skin. It may help reduce inflammation, support wound healing, and improve the overall appearance of the skin.",
        botanicalName: "Zingiberaceae",
        effect: 7,
        image: ""

    },
    {
        id: "99c667d6-7caf-45c5-aef2-aa4f7e92d20c",
        name: "Garlic",
        description:"Garlic is a species of bulbous flowering plant in the genus Allium. Garlic has been traditionally used as a natural antimicrobial agent. It may help combat bacterial, viral, and fungal infections. It is sometimes used as a topical remedy for skin infections and as a natural remedy for respiratory tract infections. Garlic has been discovered to help in Cancer Prevention",
        botanicalName: "Allium sativum",
        effect: 7,
        image: ""

    },
    {
        id: "90a86e17-9a7a-42e4-a446-f9e56a454402",
        name: "Peppermint",
        description:"Peppermint is a hybrid species of mint, a cross between watermint and spearmint.  Peppermint oil applied topically or inhaled as a vapor has been found to provide relief from tension headaches and migraines. It may help relax muscles and improve blood flow in the head and neck area. Peppermint has a cooling and soothing effect on the respiratory system. It may help relieve symptoms of respiratory conditions such as coughs, congestion, sinusitis, and bronchitis. Peppermint oil vapor is often used in inhalation therapy or as an ingredient in cough syrups and chest rubs.",
        botanicalName: "Mentha x piperita",
        effect: 8,
        image: ""

    },
    {
        id: "68740e17-759b-4794-bac5-7c40085eeda7",
        name: "Echinacea",
        description:"Echinacea is a genus of herbaceous flowering plants in the daisy family. It has ten species, which are commonly called coneflowers. Echinacea is often used to support and stimulate the immune system. It is believed to enhance the activity of immune cells, such as white blood cells, and promote the production of antibodies. It is commonly used as a natural remedy for the prevention and treatment of the common cold and other respiratory infections.",
        botanicalName: "coneflowers",
        effect: 5,
        image: ""

    },
    {
        id: "8c5da7a4-c64d-4064-98e0-f9518fa4f933",
        name: "FeverFew",
        description:"feverfew, is a flowering plant in the daisy family. Feverfew is commonly used as a natural remedy for migraines. It may help reduce the frequency, severity, and duration of migraine attacks. Some research suggests that feverfew may help prevent migraines by inhibiting the release of certain chemicals in the brain that can trigger migrain. Feverfew has been used to alleviate symptoms associated with menstruation, such as menstrual cramps and discomfort. It may help reduce the intensity and duration of menstrual pain.",
        botanicalName: "Tanacetum parthenium",
        effect: 7,
        image: ""

    },
    {
        id: "be6b96d6-7cb0-4236-9462-db83767edd36",
        name: "Holy Basil",
        description:"Holy Basil is an aromatic perennial plant in the family Lamiaceae. It is native to the Indian subcontinent and widespread as a cultivated plant throughout the Southeast Asian tropics.Holy basil is commonly used to support respiratory health. It may help alleviate symptoms of respiratory conditions like cough, cold, bronchitis, and asthma. Holy basil leaves are often used in herbal teas and remedies for respiratory relief. Also known for its positive effects on mood and cognitive function. It may help improve focus, concentration, and memory",
        botanicalName: "Allium sativum",
        effect: 7,
        image: ""

    },
    {
        id: "ab971794-753d-4eb2-83e5-517ab099e231",
        name: "Ginko",
        description:"Ginkgo or ginkgo, also known as the maidenhair tree, is a species of gymnosperm tree native to China. Ginkgo has been widely studied for its potential cognitive-enhancing effects. It may help improve memory, attention, and cognitive performance, particularly in older adults. Ginkgo is believed to enhance blood flow and oxygen supply to the brain, as well as possess antioxidant properties that protect against neuronal damage. Ginkgo has vasodilatory effects, meaning it helps widen blood vessels and improve blood flow.",
        botanicalName: "Ginkgo Biloba",
        effect: 7,
        image: ""

    },
    {
        id: "92dade7f-1d26-41b9-ab34-d20c2f958a50",
        name: "Lemon Balm",
        description:"Lemon balm is a perennial herbaceous plant in the mint family and native to south-central Europe, the Mediterranean Basin, Iran, and Central Asia, but now naturalised elsewhere. Lemon balm is known for its calming effects on the nervous system. It may help reduce anxiety, promote relaxation, and improve sleep quality. Lemon balm is often used in herbal teas and aromatherapy for its soothing properties. Lemon balm has antiviral properties that may be beneficial in managing conditions caused by the herpes simplex virus, including cold sores (oral herpes). ",
        botanicalName: "Melissa officinalis",
        effect: 7,
        image: ""

    },
    {
        id: "b00e4f7e-796c-4d86-ba4c-1404788f86cb",
        name: "Rosemary",
        description:"Rosemary is a shrub with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region. Rosemary has been studied for its potential cognitive-enhancing effects. Inhalation or ingestion of rosemary aroma or extracts may help improve memory, concentration, and mental performance. Some research suggests that rosemary may have a positive impact on age-related cognitive decline and neurodegenerative disorders like Alzheimer's disease. Rosemary has been used traditionally to promote healthy hair and scalp.",
        botanicalName: "Salvia rosmarinus",
        effect: 7,
        image: ""

    },
    {
        id: "51cc3339-1839-45ad-adef-2b543739d133",
        name: "Lavender",
        description:"Lavandula is a genus of 47 known species of flowering plants in the mint family. Lavender is widely recognized for its calming and relaxation-inducing properties. Inhalation of lavender essential oil or using lavender products, such as bath oils or candles, may help reduce stress, anxiety, and promote relaxation. It is often used in aromatherapy for its soothing effects. Lavender is commonly used to improve sleep quality.",
        botanicalName: "Lavandula",
        effect: 7,
        image: ""

    },
    {
        id: "520bff6c-2227-4ef5-9f16-4fb3e79c9981",
        name: "Thyme",
        description:"Thyme has been used to support digestive health and promote healthy digestion. It may help relieve indigestion, gas, and bloating. Thyme tea or infused water can be consumed for its digestive benefits. Thyme may have potential benefits for heart health. Thyme is known for its expectorant properties, which may help promote the clearance of mucus and phlegm from the airways.",
        botanicalName: "Thymus vulgaris",
        effect: 7,
        image: ""

    }

    // 
  ];
