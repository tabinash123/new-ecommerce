import Asparagus from './vegetable photo/Asparagus.jpg';
import BitterGourd from './vegetable photo/Bitter-gourd.jpg';
import Cabbage from './vegetable photo/cabbage.jpg';
import Carrot from './vegetable photo/carrot.jpg';
import Cauliflower from './vegetable photo/cauliflower.jpg';
import Chilli from './vegetable photo/chilli.jpg';
import Coriander from './vegetable photo/Coriander.jpg';
import Cucumber from './vegetable photo/Cucumber.jpg';
import EggPlant from './vegetable photo/egg-plant.jpg';
import FenugreekLeaves from './vegetable photo/Fenugreek leaves.jpg';
import Garlic from './vegetable photo/Garlic.jpg';
import Ginger from './vegetable photo/Ginger.jpg';
import GreenBeans from './vegetable photo/green beans.jpg';
import Lettuce from './vegetable photo/lettus.jpg';
import Mushroom from './vegetable photo/mushroom.jpg';
import Okra from './vegetable photo/Okra.jpg';
import Onion from './vegetable photo/onion.jpg';
import Potato from './vegetable photo/potato.jpg';
import Pumpkin from './vegetable photo/Pumpkin.jpg';
import Radish from './vegetable photo/raddish.jpg';
import Spinach from './vegetable photo/spinnach.jpg';
import SpringOnions from './vegetable photo/Spring onions.jpg';
import Tomato from './vegetable photo/tomato.jpg';
import Turmeric from './vegetable photo/Turmeric.jpg';

let all_product = [
  {
    id: 1,
    name: "Asparagus (शतावरी)",
    category: "men",
    image: Asparagus,
    new_price: 50.0,
    old_price: 80.5,
    description: "A nutritious and delicious vegetable, Asparagus is known for its unique taste and health benefits. Enjoy it in various dishes!",
    sub_description: "काठमाण्डौको उपान्त्यै उत्पादित शतावरी, स्वास्थ्यका लागि उपयुक्त र स्वादपूर्ण।",
  },
  {
    id: 2,
    name: "Bitter Gourd (तितो करेला)",
    category: "women",
    image: BitterGourd,
    new_price: 85.0,
    old_price: 120.5,
    description: "Bitter Gourd, also known as Tito Karela, is a distinctive vegetable with a bitter taste. It is rich in nutrients and often used in traditional recipes.",
    sub_description: "चितवनको आचामा पुगिएको तितो करेला, कडा रसभरिएको शाकहरूमा सेरो न्यूट्रिएन्ट्स भरिपूर छ।",
  },
  {
    id: 3,
    name: "Cabbage (पात्ता गोभी)",
    category: "kid",
    image: Cabbage,
    new_price: 60.0,
    old_price: 100.5,
    description: "Cabbage, or Patta Gobi in Nepali, is a versatile vegetable used in salads, stir-fries, and various cuisines. It is a good source of vitamins and minerals.",
    sub_description: "धादिङको कास्की बाट आइपुगिएको पात्ता गोभी, झोलमा भुटाइ, गुन्द्रुकको खानीमा प्रयोग हुँदछ।",
  },
  {
    id: 4,
    name: "Carrot (गाजर)",
    category: "men",
    image: Carrot,
    new_price: 100.0,
    old_price: 150.0,
    description: "Carrot, or Gajar in Nepali, is a vibrant orange vegetable loaded with antioxidants and vitamins. It is a popular ingredient in various dishes and snacks.",
    sub_description: "बागलुङको साँठी बाट ल्याइएको गाजर, ब्याचमा सेवागरी, गाजरको हलुवा र भुटाइमा प्रयोग हुँदछ।",
  },
  {
    id: 5,
    name: "Cauliflower (काउली)",
    category: "women",
    image: Cauliflower,
    new_price: 85.0,
    old_price: 120.5,
    description: "Cauliflower, or Kauli in Nepali, is a versatile and nutritious vegetable. It is used in curries, stir-fries, and can be roasted or mashed for various dishes.",
    sub_description: "भक्तपुरको भक्तपुर बाट ल्याइएको काउली, करीमा, झोलमा, रोस्ट गरिएकोमा र विभिन्न विधि अनुसार मिसाइएकोमा प्रयोग हुँदछ।",
  },
  {
    id: 6,
    name: "Chilli (खुर्सानी)",
    category: "kid",
    image: Chilli,
    new_price: 85.0,
    old_price: 120.5,
    description: "Chilli, or Khursani in Nepali, adds spice and flavor to various dishes. It is widely used in Nepali cuisine to enhance the taste of curries and pickles.",
    sub_description: "पोखराको लेक्लाइबाट आइपुगिएको खुर्सानी, नेपाली खाने बाटाहरूमा रुचाइएको, करिको र पिक्लको स्वाद बढाउनको लागि प्रयोग हुँदछ।",
  },
  {
    id: 7,
    name: "Coriander (धनिया)",
    category: "women",
    image: Coriander,
    new_price: 85.0,
    old_price: 120.5,
    description: "Coriander, or Dhaniya in Nepali, is a fragrant herb used in cooking. It adds a fresh and aromatic flavor to various dishes, curries, and chutneys.",
    sub_description: "बुटवलको सन्दृष्टिबाट आइपुगिएको धनिया, विभिन्न विधिमा प्रयोग गरी रोजाइएको, करिमा, चटनीमा खुशबूदार र स्वादपूर्ण रुपमा जोड गर्दछ।",
  },
  {
    id: 8,
    name: "Cucumber (खीरा)",
    category: "men",
    image: Cucumber,
    new_price: 85.0,
    old_price: 120.5,
    description: "Cucumber, or Khira in Nepali, is a refreshing and hydrating vegetable. It is commonly used in salads, sandwiches, and as a healthy snack.",
    sub_description: "सिन्धुपाल्चोकको ललितपुर बाट ल्याइएको खीरा, उपहार रुपमा दिनुपर्ने, भोजनको रुपमा र स्न्याकको रुपमा प्रयोग हुँदछ।",
  },
  {
    id: 9,
    name: "Eggplant (बैँगन)",
    category: "kid",
    image: EggPlant,
    new_price: 85.0,
    old_price: 120.5,
    description: "Eggplant, or Baingan in Nepali, is a versatile vegetable used in various cuisines. It can be grilled, roasted, or used in curries for a rich and smoky flavor.",
    sub_description: "कास्कीको कास्की बाट ल्याइएको बैँगन, विभिन्न विधि अनुसार बनाइएकोमा प्रयोग हुँदछ, स्वादमा रुचाइएको।",
  },
  {
    id: 10,
    name: "Fenugreek Leaves (मेथी पात)",
    category: "women",
    image: FenugreekLeaves,
    new_price: 85.0,
    old_price: 120.5,
    description: "Fenugreek Leaves, or Methi Paat in Nepali, are aromatic greens used in cooking. They add a distinctive flavor to curries, parathas, and Indian dishes.",
    sub_description: "गर्दुवारको सर्लाही बाट ल्याइएको मेथी पात, विभिन्न भारतीय खानामा खुसबूदार स्वाद र सुगन्ध थप्छ।",
  },
  {
    id: 11,
    name: "Garlic (लसुन)",
    category: "men",
    image: Garlic,
    new_price: 85.0,
    old_price: 120.5,
    description: "Garlic, or Lasun in Nepali, is a pungent and flavorful herb used in various cuisines. It is known for its health benefits and strong aroma.",
    sub_description: "रुपन्देहीको पल्पा बाट ल्याइएको लसुन, विभिन्न खानामा प्रयोग हुँदछ, स्वास्थ्यका लागि पनि लाभकारी"
  },
]


export default all_product;
