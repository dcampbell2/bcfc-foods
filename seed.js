const mongoose = require("mongoose");
const IzlandFood = require("./models/izland.js")

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/bcfc-foods", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

let menuSeed = [
    {
        title: "Chive Crab Cakes",
        description: "Fresh jumbo lump, mixed with minced chives, served with  a  chili lime sauce.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276143/Aquaman/Chive-Crab-Cakes_gg9iiw.jpg",
        price: "8.99",
    },
    {
        title: "Fried Pickles",
        description: "Dill pickles spears fried with seasoned batter and served with a cajun dipping sauce.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276299/Aquaman/Fried-Pickles_ayogug.jpg",
        price: "4.50",
    },
    {
        title: "Tortellini & Shrimp Skewers",
        description: "Grilled shrimp and tortellini filled with cheese and smoked peppers. Served with a Sun-Dried Tomato Sauce.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276476/Aquaman/Tortellini-Shrimp-Skewers_zm76yw.jpg",
        price: "7.50",
    },
    {
        title: "Smoked Salmon Deviled Eggs",
        description: "Traditional Deviled eggs with the added flair of smoked salmon",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276679/Aquaman/Smoked-Salmon-Deviled-Egg_lsgnts.jpg",
        price: "4.00",
    },
    {
        title: "Chesapeake Crab Dip",
        description: "A warm combination of cheeses, seasoning, creams and fresh lump crab served with garlic roasted chips",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612276791/Aquaman/Chesapeake-Crab-Dip_cqlkhy.jpg",
        price: "6.50",
    },
    {
        title: "Creamy Shrimp Pasta",
        description: "Light grilled shrimp served on a bed of pasta with our house made creamy parmesan sauce.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277203/Aquaman/Shrimp-Pasta_odsh05.jpg",
        price: "13.00",
    },
    {
        title: "Classic Blackened Salmon",
        description: "Our ultimate salmon blackened to perfection with tastes of citrus. Sides include seasonal veggies and grilled potatoes.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277439/Aquaman/Blackened-Salmon_azh4ci.jpg",
        price: "16.50",
    },
    {
        title: "Epic Fish Tacos",
        description: "Grilled Mahi Mahi tacos served on tasted tortillas, cabbage, and fresh cilantro topped with a baja sauce.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277705/Aquaman/Fish-Tacos_ulflcj.jpg",
        price: "12.75",
    },
    {
        title: "Pan Fried Cod",
        description: "Coated in paprika and other seasonings and fried to a crispy perfection.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277861/Aquaman/Pan-Fried-Cod_uflmmx.jpg",
        price: "13.25",
    },
    {
        title: "Shrimp and Broccoli",
        description: "A light alternative to give you the fresh pop of shrimp and broccoli. Flavored with your choice of a spicy chilli sauce or garlic butter.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612277985/Aquaman/Shrimp-and-Broccoli_fdz5xt.jpg",
        price: "11.50",
    },
    {
        title: "Pan Seared Scallops",
        description: "Perfectly Seared crisp outside. Served with asparagus and mashed potatoes.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278040/Aquaman/Pan-Seared-Scallops_tq5qna.jpg",
        price: "18.00",
    },
    {
        title: "Salmon Bowl",
        description: "Grilled Salmon served in a bowl with Wild rice, broccoli and a tahini dressing.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278380/Aquaman/Salmon-Bowl_jp7fka.jpg",
        price: "15.50",
    },
    {
        title: "Veggie Cove",
        description: "Fresh Roasted Vegetables on a bed of quinoa.  A robust collection of potatoes, squash, brocoli, chickpeas, and onions to hit all your taste buds.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612278767/Aquaman/Veggie-Cove_qxfcfo.jpg",
        price: "13.00",
    },
    {
        title: "Shrimp Curry",
        description: "All the classic flavor you would expect from a curry. This meal is splendidly balanced between spicy and savory with a Thai red curry paste.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279412/Aquaman/Shrimp-Curry_vv5p77.jpg",
        price: "14.40",
    },
    {
        title: "Seared Ahi Tuna",
        description: "Our tuna is seared with a  custom house collection of seasoning seared onto a crispy skin. Served with seasonal veggies and potatoes.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279559/Aquaman/Ahi_Tuna_biabwg.jpg",
        price: "16.50",
    },
    {
        title: "Quinoa Stuffed Peppers",
        description: "Roasted peppers filled with quinoa and grilled vegetables",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279688/Aquaman/Quinoa-Stuffed-Peppers_wsbezl.jpg",
        price: "12.50",
    },
    {
        title: "Skillet Chocolate Chip Cookie",
        description: "The classic chocolate chip cooking cooked in our cast iron skillet.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612279892/Aquaman/Skillet-Cookie_qdlmjt.jpg",
        price: "4.00",
    },
    {
        title: "Peanut Butter Balls",
        description: "A basket of peanut butter and date balls dipped in warm chocolate. Perfect for sharing",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280049/Aquaman/Peanut-Butter-Balls_luhyzx.jpg",
        price: "7.00",
    },
    {
        title: "Iced Applesauce Cookies",
        description: "Oatmeal and apple sauce come together to make this perfectly chewy cookies.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280177/Aquaman/Applesauce-Cookies_cnmzxa.jpg",
        price: "3.50",
    },
    {
        title: "Grilled Pineapple",
        description: "Juicy slices of pineapple with a smoky grilled taste",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1612280236/Aquaman/Grilled-Pineapple_bb7li2.jpg",
        price: "4.50",
    },
    {
        title: "Citrus Salad",
        description: "It stars all the beautiful, vibrant citrus: tangy grapefruit, navel oranges, and sweet blood oranges. They’re drizzled with a zingy dressing, then topped crushed pistachios and fresh mint.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1613007478/Aquaman/Citrus-Salad_uoz0dy.jpg",
        price: "3.00",
    },
    {
        title: "Smoked Gouda Mac",
        description: "Ooey, gooey mac and cheese is the perfect comfort food.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1613007478/Aquaman/Smoked-Gouda-Mac_cufddc.jpg",
        price: "3.00",
    },
    {
        title: "Southwest Sweet Potatoes",
        description: "Start with a baked sweet potato. Then add black bean salsa, corn, and drizzle with creamy cilantro sauce!",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1613007478/Aquaman/SouthWest-Sweet-Potatoes_qtfxve.jpg",
        price: "3.00",
    },
    {
        title: "Tossed Salad",
        description: "This salad features a rainbow of veggies: radishes, carrots, red and green onion, and tangy jarred pepperoncini. Add your choice of dressing: Honey Mustard, Balsamic Vinaigrette, House Caesar.",
        imageURL: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1613007478/Aquaman/Tossed-Salad_zmlusg.jpg",
        price: "3.00",
    },
]


IzlandFood.deleteMany({})
  .then(() => IzlandFood.collection.insertMany(menuSeed))
// db.restaurantMenu.collection.insertMany(menuSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });