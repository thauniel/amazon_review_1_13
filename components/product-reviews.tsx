'use client'
// import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'
import sound_p_review from './sound_ear_sort_with_refe_p.json'
import sound_n_review from './sound_ear_sort_with_refe_n.json'
import ear_p_review from'./ear_ear_sort_with_refe_p.json'
import ear_n_review from'./ear_ear_sort_with_refe_n.json'
import bass_p_review from './bass_ear_sort_with_refe_p.json'
import bass_n_review from './bass_ear_sort_with_refe_n.json'
import fit_p_review from './fit_ear_sort_with_refe_p.json'
import fit_n_review from './fit_ear_sort_with_refe_n.json'
import ANC_p_review from './ANC_ear_sort_with_refe_p.json'
import ANC_n_review from './ANC_ear_sort_with_refe_n.json'
import EQ_p_review from './EQ_ear_sort_with_refe_p.json'
import EQ_n_review from './EQ_ear_sort_with_refe_n.json'
import jbl_p_review from './price_ear_sort_with_refe_p.json'
import jbl_n_review from './price_ear_sort_with_refe_n.json'
import noise_p_review from './noisemode_ear_sort_with_refe_p.json'
import noise_n_review from './noisemode_ear_sort_with_refe_n.json'
import water_p_review from './amazon_water_humidifier_sort_with_refe_p.json'
import water_n_review from './amazon_water_humidifier_sort_with_refe_n.json'
import mist_p_review from './amazon_mist_humidifier_sort_with_refe_p.json'
import mist_n_review from './amazon_mist_humidifier_sort_with_refe_n.json'
import size_p_hum_review from './amazon_size_humidifier_sort_with_refe_p.json'
import size_n_hum_review from './amazon_size_humidifier_sort_with_refe_n.json'
import lights_p_review from './amazon_lights_humidifier_sort_with_refe_p.json'
import lights_n_review from './amazon_lights_humidifier_sort_with_refe_n.json'

import bear_water_p_review from "./bear_water_sort_with_refe_p.json"
import bear_water_n_review from "./bear_water_sort_with_refe_n.json"
import bear_tank_p_review from './bear_tank_sort_with_refe_p.json'
import bear_tank_n_review from './bear_tank_sort_with_refe_n.json'
import bear_mist_p_review from './bear_mist_sort_with_refe_p.json'
import bear_mist_n_review from './bear_mist_sort_with_refe_n.json'
import bear_size_p_review from './bear_size_sort_with_refe_p.json'
import bear_size_n_review from './bear_size_sort_with_refe_n.json'
import bear_air_p_review from './bear_air_sort_with_refe_p.json'
import bear_air_n_review from './bear_air_sort_with_refe_n.json'
import bear_moisture_p_review from './bear_moisture_sort_with_refe_p.json'
import bear_moisture_n_review from './bear_moisture_sort_with_refe_n.json'
import bear_knob_p_review from './bear_knob_sort_with_refe_p.json'
import bear_knob_n_review from './bear_knob_sort_with_refe_n.json'
import bear_lid_p_review from './bear_lid_sort_with_refe_p.json'
import bear_lid_n_review from './bear_lid_sort_with_refe_n.json'
import TRAUST_ear_p_review from "./TRAUSI_sort_with_refe_p.json"
import TRAUST_ear_n_review from "./TRAUSI_sort_with_refe_n.json"
import TRAUST_sound_p_review from "./TRAUSI_sound_sort_with_refe_p.json"
import TRAUST_sound_n_review from "./TRAUSI_sound_sort_with_refe_n.json"
import TRAUST_phone_p_review from "./TRAUSI_phone_sort_with_refe_p.json"
import TRAUST_phone_n_review from "./TRAUSI_phone_sort_with_refe_n.json"
import TRAUST_quality_p_review from "./TRAUSI_quality_sort_with_refe_p.json"
import TRAUST_quality_n_review from "./TRAUSI_quality_sort_with_refe_n.json"
import rc_cooking_p_review from "./ricecooker_B08GCS4T2F_cooking_sort_with_refe_p.json"
import rc_cooking_n_review from "./ricecooker_B08GCS4T2F_cooking_sort_with_refe_n.json"
import rc_bacon_p_review from "./ricecooker_B08GCS4T2F_bacon_sort_with_refe_p.json"
import rc_bacon_n_review from "./ricecooker_B08GCS4T2F_bacon_sort_with_refe_n.json"
import rc_product_p_review from "./ricecooker_B08GCS4T2F_product_sort_with_refe_p.json"
import rc_product_n_review from "./ricecooker_B08GCS4T2F_product_sort_with_refe_n.json"
import rc_lid_p_review from "./ricecooker_B08GCS4T2F_lid_sort_with_refe_p.json"
import rc_lid_n_review from "./ricecooker_B08GCS4T2F_lid_sort_with_refe_n.json"
import src_cooker_p_review from "./ricecooker_B000MAERM0_cooker_sort_with_refe_p.json"
import src_cooker_n_review from "./ricecooker_B000MAERM0_cooker_sort_with_refe_n.json"
import src_rice_p_review from "./ricecooker_B000MAERM0_rice_sort_with_refe_p.json"
import src_rice_n_review from "./ricecooker_B000MAERM0_rice_sort_with_refe_n.json"
import src_lid_p_review from "./ricecooker_B000MAERM0_lid_sort_with_refe_p.json"
import src_lid_n_review from "./ricecooker_B000MAERM0_lid_sort_with_refe_n.json"
import src_cups_p_review from "./ricecooker_B000MAERM0_cups_sort_with_refe_p.json"
import src_cups_n_review from "./ricecooker_B000MAERM0_cups_sort_with_refe_n.json"

import lrc_rice_p_review from "./ricecooker_B07BSNG263_rice_sort_with_refe_p.json"
import lrc_rice_n_review from "./ricecooker_B07BSNG263_rice_sort_with_refe_n.json"
import lrc_water_p_review from "./ricecooker_B07BSNG263_water_sort_with_refe_p.json"
import lrc_water_n_review from "./ricecooker_B07BSNG263_water_sort_with_refe_n.json"
import lrc_cooker_p_review from "./ricecooker_B07BSNG263_cooker_sort_with_refe_p.json"
import lrc_cooker_n_review from "./ricecooker_B07BSNG263_cooker_sort_with_refe_n.json"
import lrc_cup_p_review from "./ricecooker_B07BSNG263_cup_sort_with_refe_p.json"
import lrc_cup_n_review from "./ricecooker_B07BSNG263_cup_sort_with_refe_n.json"
import lrc_pot_p_review from "./ricecooker_B07BSNG263_pot_sort_with_refe_p.json"
import lrc_pot_n_review from "./ricecooker_B07BSNG263_pot_sort_with_refe_n.json"
import lrc_oil_p_review from "./ricecooker_B07BSNG263_oil_sort_with_refe_p.json"
import lrc_oil_n_review from "./ricecooker_B07BSNG263_oil_sort_with_refe_n.json"
import lrc_lid_p_review from "./ricecooker_B07BSNG263_lid_sort_with_refe_p.json"
import lrc_lid_n_review from "./ricecooker_B07BSNG263_lid_sort_with_refe_n.json"
import lrc_waterx_p_review from "./ricecooker_B07BSNG263_waterex_sort_with_refe_p.json"
import lrc_waterx_n_review from "./ricecooker_B07BSNG263_waterex_sort_with_refe_n.json"
import pc_perfume_p_review from "./perfume_B01H6EBRNQ_sort_with_refe_p.json"
import pc_perfume_n_review from "./perfume_B01H6EBRNQ_sort_with_refe_n.json"
import pc_scent_p_review from "./perfume_B01H6EBRNQ_scent_sort_with_refe_p.json"
import pc_scent_n_review from "./perfume_B01H6EBRNQ_scent_sort_with_refe_n.json"
import pc_smelling_p_review from "./perfume_B01H6EBRNQ_smelling_sort_with_refe_p.json"
import pc_smelling_n_review from "./perfume_B01H6EBRNQ_smelling_sort_with_refe_n.json"
import pc_bottle_p_review from "./perfume_B01H6EBRNQ_bottle_sort_with_refe_p.json"
import pc_bottle_n_review from "./perfume_B01H6EBRNQ_bottle_sort_with_refe_n.json"
import pc_air_p_review from "./perfume_B01H6EBRNQ_air_sort_with_refe_p.json"
import pc_air_n_review from "./perfume_B01H6EBRNQ_air_sort_with_refe_n.json"
import pc_laundry_p_review from "./perfume_B01H6EBRNQ_laundry_sort_with_refe_p.json"
import pc_laundry_n_review from "./perfume_B01H6EBRNQ_laundry_sort_with_refe_n.json"
import pc_smell_p_review from "./perfume_B01H6EBRNQ_smell_sort_with_refe_p.json"
import pc_smell_n_review from "./perfume_B01H6EBRNQ_smell_sort_with_refe_n.json"
import pc_shampoo_p_review from "./perfume_B01H6EBRNQ_shampoo_sort_with_refe_p.json"
import pc_shampoo_n_review from "./perfume_B01H6EBRNQ_shampoo_sort_with_refe_n.json"
import lpc_smells_p_review from "./perfume_B01H6EBRNQ_smell_sort_with_refe_p.json"
import lpc_smells_n_review from "./perfume_B01H6EBRNQ_smell_sort_with_refe_n.json"
import lpc_money_p_review from "./perfume_B00CTS08GC_money_sort_with_refe_p.json"
import lpc_money_n_review from "./perfume_B00CTS08GC_money_sort_with_refe_n.json"
import lpc_scent_p_review from "./perfume_B00CTS08GC_scent_sort_with_refe_p.json"
import lpc_scent_n_review from "./perfume_B00CTS08GC_scent_sort_with_refe_n.json"
import lpc_bottle_p_review from "./perfume_B01H6EBRNQ_bottle_sort_with_refe_p.json"
import lpc_bottle_n_review from "./perfume_B01H6EBRNQ_bottle_sort_with_refe_n.json"
import vac_size_p_review from "./B08PYXYDWX_size_sort_with_refe_p.json"
import vac_size_n_review from "./B08PYXYDWX_size_sort_with_refe_n.json"
import vac_product_p_review from "./B08PYXYDWX_product_sort_with_refe_p.json"
import vac_product_n_review from "./B08PYXYDWX_product_sort_with_refe_n.json"
import vac_vacuum_p_review from "./B08PYXYDWX_vacuum_sort_with_refe_p.json"
import vac_vacuum_n_review from "./B08PYXYDWX_vacuum_sort_with_refe_n.json"
import vac_floor_p_review from "./B08PYXYDWX_floor_sort_with_refe_p.json"
import vac_floor_n_review from "./B08PYXYDWX_floor_sort_with_refe_n.json"
import vac_AC_p_review from "./B08PYXYDWX_AC_sort_with_refe_p.json"
import vac_AC_n_review from "./B08PYXYDWX_AC_sort_with_refe_n.json"
import vac_suction_p_review from "./B08PYXYDWX_suction_sort_with_refe_p.json"
import vac_suction_n_review from "./B08PYXYDWX_suction_sort_with_refe_n.json"
import vac_dust_p_review from "./B08PYXYDWX_dust_sort_with_refe_p.json"
import vac_dust_n_review from "./B08PYXYDWX_dust_sort_with_refe_n.json"
import vac_car_p_review from "./B08PYXYDWX_car_sort_with_refe_p.json"
import vac_car_n_review from "./B08PYXYDWX_car_sort_with_refe_n.json"
import v_vacuum_p_review from "./vacuum_B0BJJHYNLN_vacuum_sort_with_refe_p.json"
import v_vacuum_n_review from "./vacuum_B0BJJHYNLN_vacuum_sort_with_refe_n.json"
import v_car_p_review from "./vacuum_B0BJJHYNLN_car_sort_with_refe_p.json"
import v_car_n_review from "./vacuum_B0BJJHYNLN_car_sort_with_refe_n.json"
import v_dirt_p_review from "./vacuum_B0BJJHYNLN_dirt_sort_with_refe_p.json"
import v_dirt_n_review from "./vacuum_B0BJJHYNLN_dirt_sort_with_refe_n.json"
import v_plastic_p_review from "./vacuum_B0BJJHYNLN_plastic_sort_with_refe_p.json"
import v_plastic_n_review from "./vacuum_B0BJJHYNLN_plastic_sort_with_refe_n.json"
// import Modal from "react-modal"




const categories = ["Ricecooker","Vacuum"] as const;
const products = {
  // "Earphone": ["JBL Noise Cancelling Headphones"],
  // "Earphone": ["JBL Noise Cancelling Headphones","TRAUSI Open Ear Headphones"],
  // "Humidifier": ["Bear Humidifier","pure enrichment Cool Mist Humidifier"],
  // "Ricecooker":["pars ricecooker","Kitalma ricecooker","ZojirushiTGC10 ricecooker"],
  "Ricecooker":["ZojirushiTGC10 ricecooker"],
  "Perfume":["CLEAN Perfume","Belcam Perfume"],
  "Vacuum":["VacLife EV-H066 Vacuum","WANTERONG Hand Held Vacuum"]
} as const;

const reviews = {
  "JBL Noise Cancelling Headphones": {
    positive: "These earbuds offer decent noise cancelling for some users and consumer-grade sound quality, better than $20headphones but not as good as $150 IEMs. Controls lack volume adjustment by default, but the JBL app enhancesperformance with an adjustable EQ and ambient sound settings. Fit can be a bit trial and error, but once set up,they provide a solid listening experience.",
    negative: "This JBL earbuds' sound quality harsh and metallic, potentially causing hearing loss due to theirhigh-pitched nature. The fit is less comfortable compared to Sony's, with cheaper silicon ear tips that don'tseal well. Volume controls are missing from the earbuds themselves but can be added via an app, though thisremoves noise mode adjustments. Bass response improves with tighter-fitting ear pieces, but active noisecancellation (ANC) remains mediocre. Despite JBL's reputation, these issues significantly impact user satisfaction."
  },
  "pure enrichment Cool Mist Humidifier": {
    positive: "The product is a well-designed humidifier that fills from the top and holds a significant amount of water withouttaking up much space. It's easy to set up and use, with a compact size and multiple mist settings, including alow setting and a sleep mode (low mist/no lights). The device also features a night light with cool color optionsand the ability to use essential oils. While cleaning required disassembling the lid and soaking parts in bleachwater, the overall experience is positive due to its simplicity, functionality, and versatile features.",
    negative: "The product is missing a crucial rubber piece on the bottom, which causes water to leak out. As a result, the humidifier doesn't function properly, making it unusable until the issue is resolved."
  },
  "Bear Humidifier": {
    positive: "The humidifier features a large, clear one-gallon tank that allows for easy monitoring of water levels and infrequent refills. The device operates silently and has minimal lighting, enhancing its user-friendly design. The fine mist it produces effectively moistens the air, providing relief during colds and benefiting skin health. The humidifier's compact size, attractive color tones, and simple physical knob add to its appeal. Overall, it is a highly effective and aesthetically pleasing device.",
    negative: "The humidifier stopping before the tank is empty, even after cleaning to remove potential calcium buildup from hard water. Despite the large tank capacity, which ensures long-lasting use, the device fails to produce a consistent mist after less than two months of nightly use. This performance is notably worse compared to similar units the user has used in the past, which effectively created a humid atmosphere in the room."
  },
  "TRAUSI Open Ear Headphones": {
    positive: "The reviewer's husband loves these earbuds, as they sit comfortably outside the ear without cords. They charge quickly and have a long battery life. The sound quality is impressive, comparable to more expensive options, and they connect easily to devices. Overall, the earbuds offer great value for their price.",
    negative: "None"
  },
  "CLEAN perfume": {
    positive: "The CLEAN Original Eau de Parfum spray (1FL.oz) is described as having an initially strong scent that evokes thefreshness of clean laundry and fresh air. The fragrance features underlying notes of citrus, musk, and hints offloral scents like honeysuckle and jasmine. While the perfume has a pleasant, clean, and powdery aroma, it can beoverpowering due to its strong floral components. The scent is best adjusted by spraying lightly and stepping intoit. The overall impression is one of freshness and cleanliness, reminiscent of traditional shampoo and ajust-showered feel. However, individual skin oils can affect how the fragrance wears, making personal preference an important factor in enjoying this perfume.",
    negative: "This product is described as having an overwhelmingly strong scent that is highly unpleasant, reminiscent of bug spray or toilet cleaner rather than the expected fresh laundry aroma. Despite many positive reviews, the fragrance is characterized as smelling like cleaning products and is not recommended for those who dislike such scents. The overall assessment suggests that the product fails to meet expectations in terms of both smell and value for money."
  },
  "Belcam perfume": {
    positive: "This fragrance closely mimics the scent of Abercrombie & Fierce, offering a similar aroma at a much more affordable price point. The perfume has a strong, appealing scent that is suitable for men and is described as a great alternative to the original Fierce, which can cost around $100. This version is available for about $10, making it an excellent investment. The only downside mentioned is the limited bottle size; the user wishes a larger 6.7 oz option were available. Overall, this product is highly recommended for those seeking the Fierce smell on a budget.",
    negative: "It is noted for being a very close knock-off of an Abercrombie & Fitch fragrance, which makes it seem less worth the price. The product　is difficult to find in stores and is primarily available on Amazon. Despite its nice smell, the similarity to a　more expensive brand leads to the conclusion that it is not a worthwhile purchase at the higher price point."　},
  "pars ricecooker": {
    positive: "This product is highly praised for its versatility and quality. Kitalma ensures that users are well-informed about the various uses of the item, making it an exceptional choice. The lid design allows steam and grease to escape, which is great for cooking bacon and salmon. The bacon comes out crispy and tasty, and the product is also fantastic for preparing salmon. However, there is a noted issue with the product melting in the microwave after two uses, resulting in red plastic sticking to the bacon. Despite this drawback, the overall quality and performance are highly recommended, and the user plans to recommend it to everyone they know.",
    negative: "This review highlights significant issues with a microwave bacon cooker. Despite initially producing high-quality,crispy, and tasty bacon, the product started to melt after just two uses, with red plastic pieces sticking to the　bacon. The reviewer expresses strong concerns about the safety of the product, suggesting it should be pulled from　the market due to these design flaws. Additionally, the instructions stated that the cooker was dishwasher safe,　but after dishwashing, the lid no longer fit properly. These issues significantly impacted the user's experience　and raised serious doubts about the product's reliability and safety."
  },
  "Kitalma ricecooker": {
    positive: "This specialized rice cooker is designed specifically for making perfect Persian rice, and it excels in deliveringconsistent and delicious results.The cooker makes perfect Persian rice with a deliciously crispy crust called tahdig. It is very easy to clean andsimplifies the process, ensuring consistent results every time. However, it is not suitable for other dishes likesoup or stew due to its heat distribution, which can cause the bottom of the pot to burn. For those looking to perfect their Persian rice, this cooker is highly recommended.",
    negative: "This review discusses the process of making Persian rice using the PARS Persian Rice Cooker, highlighting both the　positive aspects and significant issues with the product. The reviewer notes that while the cooker can produce　good results, the provided instructions are incorrect, leading to dry and hard rice.Despite these issues, the cooker performs reasonably well when the user adjusts the instructions. However, the　nonstick quality and lid fit are significant drawbacks."
  }

}

export function ProductReviewsComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [selectedAspect, setselectedAspect]=useState<string| undefined>(undefined);
  const [showDetails,setShowDetails]=useState(false);
  const [PositiveData,setPositiveData]=useState<string[]>([]);
  const [PositiveReferences,setPositiveReference]=useState<number[]>([]);
  const [NegativeData,setNegativeData]=useState<string[]>([]);
  const [NegativeReferences,setNegativeReference]=useState<number[]>([]);
  const [ClickReceive,setClickReceive]=useState(false);
  const [PReviews,setPositiveReviews]=useState<string[]>([]);
  const [NReviews,setNegativeReviews]=useState<string[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');
  const [expandedIndices, setExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});
  const [expandedRightIndices, setRightExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});

  const toggleExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };
  const toggleRightExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setRightExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };


  useEffect(() => {
    if (selectedCategory) {
      setSelectedProduct(products[selectedCategory as keyof typeof products][0]); // Type assertion
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  // const openModal = (image:string) => {
  //   setSelectedImage(image);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedImage('');
  // };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  
  const buttonClick=(value:string,isDetailVisible: boolean)=>{
    setselectedAspect(value);
    setClickReceive(isDetailVisible)
  };
  const handleShowDetails=(isDetailVisible: boolean)=>{
    setShowDetails(isDetailVisible)
    setselectedAspect(undefined)
  }
  const handleReviewshow =(reviews:string[],references:number[],reviews2:string[],references2:number[])=>{
    setPositiveData(reviews);
    setPositiveReference(references);
    setNegativeData(reviews2);
    setNegativeReference(references2);
  }
  const Reviews=(Previews:string[],Nreviews:string[])=>{
    setPositiveReviews(Previews)
    setNegativeReviews(Nreviews)
  }

  const calculateKength=(Reviews:string[])=>{
    return Reviews.length
  }
  const renderReviewWithRedHighlight = (review:string) => {
    const sentences = review.split(/(?<=\. )/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-red-500 text-white":""}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };

  // const images ={
  //   "JBL Noise Cancelling Headphones": 
  //   [
  //    require("./product_image/rakuten_earphone_1.jpg"),
  //    require("./product_image/rakuten_earphone_2.jpg"),
  //    require("./product_image/rakuten_earphone_3.jpg"),
  //   ],
  // };

  const renderReviewWithBlueHighlight = (review:string) => {
    const sentences = review.split(/(?<=\. )/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-blue-500 text-white" : ''}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };
  
  const showReviewWithclickaspect = (review: string) => {
    const sentences = review.split(/(?<=\. )/);
    const filteredSentences = sentences.filter(sentence => 
      selectedAspect && sentence.includes(selectedAspect)
    );
    
    return (
      <div>
        {filteredSentences.map((sentence, index) => (
          <span key={index}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleProductChange} value={selectedProduct} disabled={!selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Products name" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory && products[selectedCategory as keyof typeof products].map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      <div>
        {/* <div className='flex justify-center items-center mb-4'>
            {selectedProduct === "JBL Noise Cancelling Headphones" && images[selectedProduct]?.map((image, index) => (
            <Image 
            key={index} 
            src={image} 
            alt={`Product Image ${index + 1}`}
            className="w-48 h-48 object-cover cursor-pointer" 
            onClick={()=>openModal(image)}/>
            
          ))}
       </div> */}

      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
        <Image src={selectedImage} alt="Selected Product" className="max-w-[50%] max-h-[50%]" style={{width:'50%',height:'50%'}}/>
        <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-gray-800 rounded p-2'>
          Close
        </button>
      </Modal> */}
    </div>

        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 text-red-500" />
                  Positive Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.positive || "No positive review available."}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsDown className="mr-2 text-blue-500" />
                  Negative Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.negative || "No negative review available."}</p>
              </CardContent>
            </Card>
          </div>
        )}

           {selectedProduct && (
          <div className="text-center">
            <Button size="lg" onClick={()=>handleShowDetails(true)}>more detail</Button>
        </div>
        )}

        <div className="my-4"></div>

        {/* 选择观点界面*/}
        <div className="flex justify-center space-x-4 mb-1">
          {showDetails&&selectedProduct === 'JBL Noise Cancelling Headphones' &&(
          <div>
            <button 
              className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:93 negative:26'
              onClick={() => {
              buttonClick('sound',true);
              Reviews(sound_p_review.reviews,sound_n_review.reviews)
              handleReviewshow(sound_p_review.reviews,sound_p_review.reference,sound_n_review.reviews,sound_n_review.reference);
              }}>
               sound
            </button>

      
        
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
              
              title='positive:27 negative:7'
              onClick={() => {
                buttonClick('bass',true);
                Reviews(bass_p_review.reviews,bass_n_review.reviews)
                handleReviewshow(bass_p_review.reviews,bass_p_review.reference,bass_n_review.reviews,bass_n_review.reference);
              }}>
                bass
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white"
              title='positive:11 negative:7'
            
              onClick={() => {
                buttonClick('fit',true);
                Reviews(fit_p_review.reviews,fit_n_review.reviews)
                handleReviewshow(fit_p_review.reviews,fit_p_review.reference,fit_n_review.reviews,fit_n_review.reference);
              }}>
                fit
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
      
              title='positive:8 negative:5'
              onClick={() => {
                buttonClick('ANC',true);
                Reviews(ANC_p_review.reviews,ANC_n_review.reviews)
                handleReviewshow(ANC_p_review.reviews,ANC_p_review.reference,ANC_n_review.reviews,ANC_n_review.reference);
              }}>
                ANC
            </button>
            
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
         
              title='positive:4 negative:2'
              onClick={() => {
                buttonClick('EQ',true);
                Reviews(EQ_p_review.reviews,EQ_n_review.reviews)
                handleReviewshow(EQ_p_review.reviews,EQ_p_review.reference,EQ_n_review.reviews,EQ_n_review.reference);
              }}>
                EQ
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
     
              title='positive:38 negative:9'
              onClick={() => {
                buttonClick('price',true);
                Reviews(jbl_p_review.reviews,jbl_n_review.reviews)
                handleReviewshow(jbl_p_review.reviews,jbl_p_review.reference,jbl_n_review.reviews,jbl_n_review.reference);
              }}>
                price
            </button>

            <button 
              className="rounded-full py-2 px-4  " 
           
              title='positive:24 negative:35'
              onClick={() => {
                buttonClick('ear',true);
                Reviews(ear_p_review.reviews,ear_n_review.reviews)
                handleReviewshow(ear_p_review.reviews,ear_p_review.reference,ear_n_review.reviews,ear_n_review.reference);
              }}>
              ear
            </button>

            <button className="rounded-full py-2 px-4" 
              title='positive:11 negative:9'
                onClick={() => {
                buttonClick('noise mode',true);
                Reviews(noise_p_review.reviews,noise_n_review.reviews)
                handleReviewshow(noise_p_review.reviews,noise_p_review.reference,noise_n_review.reviews,noise_n_review.reference);
                }}>
                noise mode
              </button>
          </div>
          )}
      {showDetails&&selectedProduct === 'TRAUSI Open Ear Headphones' &&(
            <div>
              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
             
                title='positive:12 negative:2'
                onClick={() => {
                  buttonClick('ear',true);
                  Reviews(TRAUST_ear_p_review.reviews,TRAUST_ear_n_review.reviews);
                  handleReviewshow(TRAUST_ear_p_review.reviews,TRAUST_ear_p_review.reference,TRAUST_ear_n_review.reviews,TRAUST_ear_n_review.reference);
                }}>
                ear
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
       
                title='positive:17 negative:1'
                onClick={() => {
                  buttonClick('sound',true);
                  Reviews(TRAUST_sound_p_review .reviews,TRAUST_sound_n_review .reviews)
                  handleReviewshow(TRAUST_sound_p_review.reviews,TRAUST_sound_p_review .reference,TRAUST_sound_n_review.reviews,TRAUST_sound_n_review .reference);
                }}>
                sound
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:10 negative:0'
                onClick={() => {
                  buttonClick('phone',true);
                  Reviews(TRAUST_phone_p_review.reviews,TRAUST_phone_n_review.reviews)
                  handleReviewshow(TRAUST_phone_p_review.reviews,TRAUST_phone_p_review.reference,TRAUST_phone_n_review.reviews,TRAUST_phone_n_review.reference);
                }}>
                phone
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:9 negative:0'
                onClick={() => {
                  buttonClick('quality',true);
                  Reviews(TRAUST_quality_p_review.reviews,TRAUST_quality_n_review.reviews)
                  handleReviewshow(TRAUST_quality_p_review.reviews,TRAUST_quality_n_review.reference,TRAUST_quality_n_review.reviews,TRAUST_quality_n_review.reference);
                }}>
                quality
              </button>

        </div>)}


      
      {showDetails&&selectedProduct === 'pure enrichment Cool Mist Humidifier' &&(
            <div>
              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
             
                title='positive:8 negative:2'
                onClick={() => {
                  buttonClick('water',true);
                  Reviews(water_p_review.reviews,water_n_review.reviews);
                  handleReviewshow(water_p_review.reviews,water_p_review.reference,water_n_review.reviews,water_n_review.reference);
                }}>
                water
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
       
                title='positive:6 negative:0'
                onClick={() => {
                  buttonClick('mist',true);
                  Reviews(mist_p_review.reviews,mist_n_review.reviews)
                  handleReviewshow(mist_p_review.reviews,mist_p_review.reference,mist_n_review.reviews,mist_n_review.reference);
                }}>
                mist
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:5 negative:0'
                onClick={() => {
                  buttonClick('size',true);
                  Reviews(size_p_hum_review.reviews,size_n_hum_review.reviews)
                  handleReviewshow(size_p_hum_review.reviews,size_p_hum_review.reference,size_n_hum_review.reviews,size_n_hum_review.reference);
                }}>
                size
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:3 negative:0'
                onClick={() => {
                  buttonClick('lights',true);
                  Reviews(lights_p_review.reviews,lights_n_review.reviews)
                  handleReviewshow(lights_p_review.reviews,lights_p_review.reference,lights_n_review.reviews,lights_n_review.reference);
                }}>
                lights
              </button>

        </div>)}
        {showDetails&&selectedProduct === "Bear Humidifier"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:33 negative:20"
               onClick={()=>{
               buttonClick("water",true)
               Reviews(bear_water_p_review.reviews,bear_water_n_review.reviews)
               handleReviewshow(bear_water_p_review.reviews,bear_water_p_review.reference,bear_water_n_review.reviews,bear_water_n_review.reference)  
              }
               }
              >
                water
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:13 negative:7'
              onClick={() => {
                buttonClick("tank",true)
                Reviews(bear_tank_p_review.reviews,bear_tank_n_review.reviews)
                handleReviewshow(bear_tank_p_review.reviews,bear_tank_p_review.reference,bear_tank_n_review.reviews,bear_tank_n_review.reference)
              }}>
              tank
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:17 negative:4'
              onClick={() => {
                buttonClick("mist",true)
                Reviews(bear_mist_p_review.reviews,bear_mist_n_review.reviews)
                handleReviewshow(bear_mist_p_review.reviews,bear_mist_p_review.reference,bear_mist_n_review.reviews,bear_mist_n_review.reference)
              }}>
              mist
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:11 negative:1'
              onClick={() => {
                buttonClick("size",true)
                Reviews(bear_size_p_review.reviews,bear_size_n_review.reviews)
                handleReviewshow(bear_size_p_review.reviews,bear_size_p_review.reference,bear_size_n_review.reviews,bear_size_n_review.reference)
              }}>
              size
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:4 negative:0'
              onClick={() => {
                buttonClick("air",true)
                Reviews(bear_air_p_review.reviews,bear_air_n_review.reviews)
                handleReviewshow(bear_air_p_review.reviews,bear_air_p_review.reference,bear_air_n_review.reviews,bear_air_n_review.reference)
              }}>
              air
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:5 negative:0'
              onClick={() => {
                buttonClick("moisture",true)
                Reviews(bear_moisture_p_review.reviews,bear_moisture_n_review.reviews)
                handleReviewshow(bear_moisture_p_review.reviews,bear_moisture_p_review.reference,bear_moisture_n_review.reviews,bear_moisture_n_review.reference)
              }}>
              moisture
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:6 negative:0'
              onClick={() => {
                buttonClick("knob",true)
                Reviews(bear_knob_p_review.reviews,bear_knob_n_review.reviews)
                handleReviewshow(bear_knob_p_review.reviews,bear_knob_p_review.reference,bear_knob_n_review.reviews,bear_knob_n_review.reference)
              }}>
              knob
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
               title='positive:3 negative:1'
              onClick={() => {
                buttonClick("lid",true)
                Reviews(bear_lid_p_review.reviews,bear_lid_n_review.reviews)
                handleReviewshow(bear_lid_p_review.reviews,bear_lid_p_review.reference,bear_lid_n_review.reviews,bear_lid_n_review.reference)
              }}>
              lid
            </button>
            </div> )}

            {showDetails&&selectedProduct === 'ZojirushiTGC10 ricecooker' &&(
            <div>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
                  title='positive:61 negative:0'
                  onClick={() => {
                    buttonClick('rice',true);
                    Reviews(src_rice_p_review.reviews,src_rice_n_review.reviews);
                    handleReviewshow(src_rice_p_review.reviews,src_rice_p_review.reference,src_rice_n_review.reviews,src_rice_n_review.reference);
                  }}>
                  rice
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
                  
                  title='positive:9 negative:0'
                  onClick={() => {
                    buttonClick('cooker',true);
                    Reviews(src_cooker_p_review.reviews,src_cooker_n_review.reviews)
                    handleReviewshow(src_cooker_p_review.reviews,src_cooker_p_review.reference,src_cooker_n_review.reviews,src_cooker_n_review.reference);
                  }}>
                  cooker
              </button>

              <button className="rounded-full py-2 px-4  text-white bg-red-500" 
        
                title='positive:4 negative:0'
                onClick={() => {
                  buttonClick('cups',true);
                  Reviews(src_cups_p_review.reviews,src_cups_n_review.reviews)
                  handleReviewshow(src_cups_p_review.reviews,src_cups_p_review.reference,src_cups_n_review.reviews,src_cups_n_review.reference);
                }}>
                cups
              </button>

              <button className="rounded-full py-2 px-4  text-black" 
        
                title='positive:5 negative:4'
                onClick={() => {
                  buttonClick('lid',true);
                  Reviews(src_lid_p_review.reviews,src_lid_n_review.reviews)
                  handleReviewshow(src_lid_p_review.reviews,src_lid_p_review.reference,src_lid_n_review.reviews,src_lid_n_review.reference);
                }}>
                lid
              </button>

        </div>)}
        {showDetails&&selectedProduct === "pars ricecooker"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:153 negative:22"
               onClick={()=>{
               buttonClick("rice",true)
               Reviews(lrc_rice_p_review.reviews,lrc_rice_n_review.reviews)
               handleReviewshow(lrc_rice_p_review.reviews,lrc_rice_p_review.reference,lrc_rice_n_review.reviews,lrc_rice_n_review.reference)  
              }
               }
              >
                rice
              </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:34 negative:5'
              onClick={() => {
                buttonClick("cooker",true)
                Reviews(lrc_cooker_p_review.reviews,lrc_cooker_n_review.reviews)
                handleReviewshow(lrc_cooker_p_review.reviews,lrc_cooker_p_review.reference,lrc_cooker_n_review.reviews,lrc_cooker_n_review.reference)
              }}>
              cooker
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:16 negative:12'
              onClick={() => {
                buttonClick("cup",true)
                Reviews(lrc_cup_p_review.reviews,lrc_cup_n_review.reviews)
                handleReviewshow(lrc_cup_p_review.reviews,lrc_cup_p_review.reference,lrc_cup_n_review.reviews,lrc_cup_n_review.reference)
              }}>
              cup
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:14 negative:12'
              onClick={() => {
                buttonClick("pot",true)
                Reviews(lrc_pot_p_review.reviews,lrc_pot_n_review.reviews)
                handleReviewshow(lrc_pot_p_review.reviews,lrc_pot_p_review.reference,lrc_pot_n_review.reviews,lrc_pot_n_review.reference)
              }}>
              pot
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:5 negative:0'
              onClick={() => {
                buttonClick("oil",true)
                Reviews(lrc_oil_p_review.reviews,lrc_oil_n_review.reviews)
                handleReviewshow(lrc_oil_p_review.reviews,lrc_oil_p_review.reference,lrc_oil_n_review.reviews,lrc_oil_n_review.reference)
              }}>
              oil
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:12 negative:7'
              onClick={() => {
                buttonClick("water",true)
                Reviews(lrc_water_p_review.reviews,lrc_water_n_review.reviews)
                handleReviewshow(lrc_water_p_review.reviews,lrc_water_p_review.reference,lrc_water_n_review.reviews,lrc_water_n_review.reference)
              }}>
              water
            </button>


            <button
              className="rounded-full py-2 px-4 bg-blue-500  text-white" 
               title='positive:0 negative:1'
              onClick={() => {
                buttonClick("water ex",true)
                Reviews(lrc_waterx_p_review.reviews,lrc_waterx_n_review.reviews)
                handleReviewshow(lrc_waterx_p_review.reviews,lrc_waterx_p_review.reference,lrc_waterx_n_review.reviews,lrc_waterx_n_review.reference)
              }}>
              water ex
            </button>

            <button
              className="rounded-full py-2 px-4  text-black" 
              title='positive:6 negative:6'
              onClick={() => {
                buttonClick("lid",true)
                Reviews(lrc_lid_p_review.reviews,lrc_lid_n_review.reviews)
                handleReviewshow(lrc_lid_p_review.reviews,lrc_lid_p_review.reference,lrc_lid_n_review.reviews,lrc_lid_n_review.reference)
              }}>
              lid
            </button>

            </div> )}
            {showDetails&&selectedProduct === "CLEAN perfume"&& (
            <div className='flex flex-wrap justify-center'>

              <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:106 negative:12'
              onClick={() => {
                buttonClick("scent",true)
                Reviews(pc_scent_p_review.reviews,pc_scent_n_review.reviews)
                handleReviewshow(pc_scent_p_review.reviews,pc_scent_p_review.reference,pc_scent_n_review.reviews,pc_scent_n_review.reference)
              }}>
              scent
            </button>

              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:70 negative:8"
               onClick={()=>{
               buttonClick("perfume",true)
               Reviews(pc_perfume_p_review.reviews,pc_perfume_n_review.reviews)
               handleReviewshow(pc_perfume_p_review.reviews,pc_perfume_p_review.reference,pc_perfume_n_review.reviews,pc_perfume_n_review.reference)  
              }
               }
              >
               perfume
              </button>

              <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
               title='positive:52 negative:12'
              onClick={() => {
                buttonClick("smell",true)
                Reviews(pc_smell_p_review.reviews,pc_smell_n_review.reviews)
                handleReviewshow(pc_smell_p_review.reviews,pc_smell_p_review.reference,pc_smell_n_review.reviews,pc_smell_n_review.reference)
              }}>
              smell
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:21 negative:2'
              onClick={() => {
                buttonClick("laundry",true)
                Reviews(pc_laundry_p_review.reviews,pc_laundry_n_review.reviews)
                handleReviewshow(pc_laundry_p_review.reviews,pc_laundry_p_review.reference,pc_laundry_n_review.reviews,pc_laundry_n_review.reference)
              }}>
              laundry
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:16 negative:6'
              onClick={() => {
                buttonClick("bottle",true)
                Reviews(pc_bottle_p_review.reviews,pc_bottle_n_review.reviews)
                handleReviewshow(pc_bottle_p_review.reviews,pc_bottle_p_review.reference,pc_bottle_n_review.reviews,pc_bottle_n_review.reference)
              }}>
              bottle
            </button>
            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:3 negative:0'
              onClick={() => {
                buttonClick("air",true)
                Reviews(pc_air_p_review.reviews,pc_air_n_review.reviews)
                handleReviewshow(pc_air_p_review.reviews,pc_air_p_review.reference,pc_air_n_review.reviews,pc_air_n_review.reference)
              }}>
              air
            </button>



            <button
              className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:2 negative:0'
              onClick={() => {
                buttonClick("shampoo",true)
                Reviews(pc_shampoo_p_review.reviews,pc_shampoo_n_review.reviews)
                handleReviewshow(pc_shampoo_p_review.reviews,pc_shampoo_p_review.reference,pc_shampoo_n_review.reviews,pc_shampoo_n_review.reference)
              }}>
              shampoo
            </button>
            
            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:1 negative:0'
              onClick={() => {
                buttonClick("smelling",true)
                Reviews(pc_smelling_p_review.reviews,pc_smelling_n_review.reviews)
                handleReviewshow(pc_smelling_p_review.reviews,pc_smelling_p_review.reference,pc_smelling_n_review.reviews,pc_smelling_n_review.reference)
              }}>
              smelling
            </button>

            </div> )}
            {showDetails&&selectedProduct === "Belcam perfume"&& (
            <div className='flex flex-wrap justify-center'>

              <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:52 negative:12'
              onClick={() => {
                buttonClick("smell",true)
                Reviews(lpc_smells_p_review.reviews,lpc_smells_n_review.reviews)
                handleReviewshow(lpc_smells_p_review.reviews,lpc_smells_p_review.reference,lpc_smells_n_review.reviews,lpc_smells_n_review.reference)
              }}>
              smell
              </button>


              <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
               title='positive:16 negative:6'
              onClick={() => {
                buttonClick("bottle",true)
                Reviews(lpc_bottle_p_review.reviews,lpc_bottle_n_review.reviews)
                handleReviewshow(lpc_bottle_p_review.reviews,lpc_bottle_p_review.reference,lpc_bottle_n_review.reviews,lpc_bottle_n_review.reference)
              }}>
              bottle
              </button>

             


            <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:6 negative:1'
              onClick={() => {
                buttonClick("scent",true)
                Reviews(lpc_scent_p_review.reviews,lpc_scent_n_review.reviews)
                handleReviewshow(lpc_scent_p_review.reviews,lpc_scent_p_review.reference,lpc_scent_n_review.reviews,lpc_scent_n_review.reference)
              }}>
              scent
            </button>

              <button
               className="rounded-full py-2 px-4 bg-blue-500 text-white"
               title="positive:1 negative:2"
               onClick={()=>{
               buttonClick("money",true)
               Reviews(lpc_money_p_review.reviews,lpc_money_n_review.reviews)
               handleReviewshow(lpc_money_p_review.reviews,lpc_money_p_review.reference,lpc_money_n_review.reviews,lpc_money_n_review.reference)  
              }
               }
              >
               money
              </button>
            </div> )}
            {showDetails&&selectedProduct === 'VacLife EV-H066 Vacuum' &&(
          <div>
            <button className="rounded-full py-2 px-4 bg-red-500 text-white"
              title='positive:120 negative:9'
            
              onClick={() => {
                buttonClick('vacuum',true);
                Reviews(vac_vacuum_p_review.reviews,vac_vacuum_n_review.reviews)
                handleReviewshow(vac_vacuum_p_review.reviews,vac_vacuum_p_review.reference,vac_vacuum_n_review.reviews,vac_vacuum_n_review.reference);
              }}>
                vacuum
            </button>
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
     
              title='positive:71 negative:14'
              onClick={() => {
                buttonClick('suction',true);
                Reviews(vac_suction_p_review.reviews,vac_suction_n_review.reviews)
                handleReviewshow(vac_suction_p_review.reviews,vac_suction_p_review.reference,vac_suction_n_review.reviews,vac_suction_n_review.reference);
              }}>
                suction
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:70 negative:7'
                onClick={() => {
                buttonClick('car',true);
                Reviews(vac_car_p_review.reviews,vac_car_n_review.reviews)
                handleReviewshow(vac_car_p_review.reviews,vac_car_p_review.reference,vac_car_n_review.reviews,vac_car_n_review.reference);
                }}>
                car
              </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:31 negative:5'
              onClick={() => {
                buttonClick('product',true);
                Reviews(vac_product_p_review.reviews,vac_product_n_review.reviews)
                handleReviewshow(vac_product_p_review.reviews,vac_product_p_review.reference,vac_product_n_review.reviews,vac_product_n_review.reference);
              }}>
                product
            </button>

            <button 
              className="rounded-full py-2 px-4 bg-red-500 text-white" 
              title='positive:19 negative:1'
              onClick={() => {
              buttonClick('size',true);
              Reviews(vac_size_p_review.reviews,vac_size_n_review.reviews)
              handleReviewshow(vac_size_p_review.reviews,vac_size_p_review.reference,vac_size_n_review.reviews,vac_size_n_review.reference);
              }}>
               size
            </button>
            <button 
              className="rounded-full py-2 px-4 bg-red-500 text-white" 
           
              title='positive:12 negative:4'
              onClick={() => {
                buttonClick('dust',true);
                Reviews(vac_dust_p_review.reviews,vac_dust_n_review.reviews)
                handleReviewshow(vac_dust_p_review.reviews,vac_dust_p_review.reference,vac_dust_n_review.reviews,vac_dust_n_review.reference);
              }}>
              dust
            </button>

            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
      
              title='positive:5 negative:2'
              onClick={() => {
                buttonClick('floor',true);
                Reviews(vac_floor_p_review.reviews,vac_floor_n_review.reviews)
                handleReviewshow(vac_floor_p_review.reviews,vac_floor_p_review.reference,vac_floor_n_review.reviews,vac_floor_n_review.reference);
              }}>
                floor
            </button>
            
            <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
         
              title='positive:4 negative:2'
              onClick={() => {
                buttonClick('AC',true);
                Reviews(vac_AC_p_review.reviews,vac_AC_n_review.reviews)
                handleReviewshow(vac_AC_p_review.reviews,vac_AC_p_review.reference,vac_AC_n_review.reviews,vac_AC_n_review.reference);
              }}>
                AC
            </button>

          </div>
          )}
          {showDetails&&selectedProduct === 'WANTERONG Hand Held Vacuum' &&(
            <div>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
                  title='positive:70 negative:7'
                  onClick={() => {
                    buttonClick('vac',true);
                    Reviews(vac_car_p_review.reviews,vac_car_n_review.reviews)
                    handleReviewshow(vac_car_p_review.reviews,vac_car_p_review.reference,vac_car_n_review.reviews,vac_car_n_review.reference);
                  }}>
                  vac
              </button>
              <button className="rounded-full py-2 px-4 bg-red-500 text-white"
             
                title='positive:21 negative:2'
                onClick={() => {
                  buttonClick('vacuum',true);
                  Reviews(v_vacuum_p_review.reviews,v_vacuum_n_review.reviews);
                  handleReviewshow(v_vacuum_p_review.reviews,v_vacuum_p_review.reference,v_vacuum_n_review.reviews,v_vacuum_n_review.reference);
                }}>
                vacuum
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:8 negative:1'
                onClick={() => {
                  buttonClick('dirt',true);
                  Reviews(v_dirt_p_review.reviews,v_dirt_n_review.reviews)
                  handleReviewshow(v_dirt_p_review.reviews,v_dirt_p_review.reference,v_dirt_n_review.reviews,v_dirt_n_review.reference);
                }}>
                dirt
              </button>

              <button className="rounded-full py-2 px-4 bg-red-500 text-white" 
        
                title='positive:1 negative:0'
                onClick={() => {
                  buttonClick('plastic',true);
                  Reviews(v_plastic_p_review.reviews,v_plastic_n_review.reviews)
                  handleReviewshow(v_plastic_p_review.reviews,v_plastic_p_review.reference,v_plastic_n_review.reviews,v_plastic_n_review.reference);
                }}>
                plastic
              </button>

        </div>)}
      </div>

      {showDetails&&ClickReceive&&
        <div className="w-full flex justify-between ">
          <div className='flex items-center'>
          <ThumbsUp className="text-red-500" />
           <div className="text-red-500 text-left ml-0">{selectedAspect}{calculateKength(PReviews)}件(Positive)
           
           </div>
          </div>
          <div className='flex items-center'>
          <ThumbsDown className="text-blue-500" />
          <div className="text-blue-500 text-right mr-0">{selectedAspect}{calculateKength(NReviews)}件(Negative)</div>
          </div>
        </div>}


        {showDetails&&ClickReceive&&
        <div className="w-full mb-4 h-[600px] flex space-x-4">
        <ScrollArea className="border border-red-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4 ">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {PositiveData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                    <div>
                     {!expandedIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithRedHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleExpand(selectedAspect!,index)}>
                          {expandedIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {PositiveReferences[index]}
                  </div>
                </div>
              </div>
      
            ))}
          </div>
          </ScrollArea>
          <ScrollArea className="border border-blue-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {NegativeData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                   <div>
                     {!expandedRightIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedRightIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithBlueHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleRightExpand(selectedAspect!,index)}>
                          {expandedRightIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {NegativeReferences[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollArea>
        </div>}


      </div>
    </div>
  )
}
