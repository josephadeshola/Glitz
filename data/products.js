import BitterKola from "@/components/BitterKola";
import Cassava from "@/components/Cassava";
import Cocoa from "@/components/Cocoa";
import Garlic from "@/components/Garlic";
import Ginger from "@/components/Ginger";
import GroundNut from "@/components/GroundNut";
import KolaNut from "@/components/KolaNut";
import Maize from "@/components/Maize";
import RawCashew from "@/components/RawCashew";
import CashewKernels from "@/components/CashewKernels";
import SheaNut from "@/components/SheaNut";
import TigerNut from "@/components/TigerNut";
import Yam from "@/components/Yam";
import Soyabeans from "@/components/Soyabeans";

const products = [
  {
    name: "Raw Cashew Nuts",
    title: "Raw Cashew Nuts",
    description: "High-yield RCN for food and industrial use.",
    slug: "raw-cashew-nuts",
    image: "/images/neatcashew.webp",
    detailComp:<RawCashew/>,
  
  },
  {
    name: "Cashew Kernel",
    title: "Cashew Kernels",
    description: "High-yield RCN for food and industrial use.",
    slug: "kernels",
    image: "/images/chatcashew.webp",
    detailComp:<CashewKernels/>
  },
  {
    name: "Cocoa",
    title: "Cocoa",
    description: "Fermented beans for premium chocolate.",
    slug: "cocoa",
    image: "/images/chatcocoa.webp",
    detailComp:<Cocoa/>,

  },
  {
    name: "Cassave-Chips",
    title: "Cassava Chips",
    description: "Sun-dried, high-starch chips for ethanol.",
    slug: "cassava-chips",
    image: "/images/cassava-chips.png",
    detailComp:<Cassava/>,
  },
  {
    name: "Shea-Nut",
    title: "Shea Nuts",
    description: "Organic, butter-grade, traceable origin.",
    slug: "shea-nuts",
    image: "/images/shea-nuts.png",
    detailComp:<SheaNut/>,
  },
  {
    name: "Yam",
    title: "Yam",
    description: "Cleaned & hulled. High oil content.",
    slug: "yam",
    image: "/images/yam.png",
    detailComp:<Yam/>,
  },

  {
    name: "Maize",
    title: "Maize",
    description: "Organic, butter-grade, traceable origin.",
    slug: "maize",
    image: "/images/maize.png",
    detailComp:<Maize/>,
  },
  {
    name: "Tiger-Nut",
    title: "Tiger nut",
    description: "Cleaned & hulled. High oil content.",
    slug: "tiger-nut",
    image: "/images/tiger-nut.png",
    detailComp:<TigerNut/>,
  },
  {
    name: "Bitter-Kola",
    title: "bitter kola",
    description: "GMO-free, protein-rich.",
    slug: "bitter-kola",
    image: "/images/bitter-kola.png",
    detailComp:<BitterKola/>,
  },
  {
    name: "Kola-Nut",
    title: "kola nut",
    description: "Organic, butter-grade, traceable origin.",
    slug: "kola-nut",
    image: "/images/kola-nut.png",
    detailComp:<KolaNut/>,
  },
  {
    name: "Ground-Nut",
    title: "Groundnut",
    description: "Cleaned & hulled. High oil content.",
    slug: "ground-nut",
    image: "/images/groundnut.png",
    detailComp:<GroundNut/>,
  },
  {
    name: "Garlic",
    title: "Garlic",
    description: "GMO-free, protein-rich.",
    slug: "garlic",
    image: "/images/garlic.png",
    detailComp:<Garlic/>,
  },
  {
    name: "Ginger",
    title: "Ginger",
    description: "Organic, butter-grade, traceable origin.",
    slug: "ginger",
    image: "/images/ginger1.png",
    detailComp:<Ginger/>,
  },
  {
    name: "Soya Beans",
    title: "Soya Beans",
    description: "Organic, butter-grade, traceable origin.",
    slug: "soya-beans",
    image: "/images/neatsoya.jpg",
    detailComp:<Soyabeans/>,
  },
];

export default products;
