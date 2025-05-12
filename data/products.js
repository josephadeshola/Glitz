import BitterKola from "@/components/BitterKola";
import Cassava from "@/components/Cassava";
import Cocoa from "@/components/Cocoa";
import Garlic from "@/components/Garlic";
import Ginger from "@/components/Ginger";
import GroundNut from "@/components/GroundNut";
import KolaNut from "@/components/KolaNut";
import Maize from "@/components/Maize";
import RawCashew from "@/components/RawCashew";
import SheaNut from "@/components/SheaNut";
import TigerNut from "@/components/TigerNut";
import Yam from "@/components/Yam";

const products = [
  {
    name: "Raw Cashew Nuts",
    title: "Raw Cashew Nuts",
    description: "High-yield RCN for food and industrial use.",
    slug: "raw-cashew-nuts",
    image: "/images/neatcashew.webp",
    detailComp:<RawCashew/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Cashew Kernel",
    title: "Cashew Kernels",
    description: "High-yield RCN for food and industrial use.",
    slug: "kernels",
    image: "/images/chatcashew.webp",
  },
  {
    name: "Cocoa",
    title: "Cocoa",
    description: "Fermented beans for premium chocolate.",
    slug: "cocoa",
    image: "/images/chatcocoa.webp",
    detailComp:<Cocoa/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Cassave-Chips",
    title: "Cassava Chips",
    description: "Sun-dried, high-starch chips for ethanol.",
    slug: "cassava-chips",
    image: "/images/cassava-chips.png",
    detailComp:<Cassava/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Shea-Nut",
    title: "Shea Nuts",
    description: "Organic, butter-grade, traceable origin.",
    slug: "shea-nuts",
    image: "/images/shea-nuts.png",
    detailComp:<SheaNut/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Yam",
    title: "Yam",
    description: "Cleaned & hulled. High oil content.",
    slug: "yam",
    image: "/images/yam.png",
    detailComp:<Yam/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },

  {
    name: "Maize",
    title: "Maize",
    description: "Organic, butter-grade, traceable origin.",
    slug: "maize",
    image: "/images/maize.png",
    detailComp:<Maize/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Tiger-Nut",
    title: "Tiger nut",
    description: "Cleaned & hulled. High oil content.",
    slug: "tiger-nut",
    image: "/images/tiger-nut.png",
    detailComp:<TigerNut/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Bitter-Kola",
    title: "bitter kola",
    description: "GMO-free, protein-rich.",
    slug: "bitter-kola",
    image: "/images/bitter-kola.png",
    detailComp:<BitterKola/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Kola-Nut",
    title: "kola nut",
    description: "Organic, butter-grade, traceable origin.",
    slug: "kola-nut",
    image: "/images/kola-nut.png",
    detailComp:<KolaNut/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Ground-Nut",
    title: "Groundnut",
    description: "Cleaned & hulled. High oil content.",
    slug: "ground-nut",
    image: "/images/groundnut.png",
    detailComp:<GroundNut/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Garlic",
    title: "Garlic",
    description: "GMO-free, protein-rich.",
    slug: "garlic",
    image: "/images/garlic.png",
    detailComp:<Garlic/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
  {
    name: "Ginger",
    title: "Ginger",
    description: "Organic, butter-grade, traceable origin.",
    slug: "ginger",
    image: "/images/ginger1.png",
    detailComp:<Ginger/>,
    details: {
      overview:
        "Still Morris Consults Limited is a leading Raw Cashew Nuts Exporter and Supplier in Nigeria. We offer cashew nuts that surpass expectations in taste, freshness, and quality. Partner with us for a seamless and rewarding cashew nuts export experience. We take fostering relationships with all our clients very seriously, making sure that we deliver Raw Cashew nuts of the highest standard to their businesses. The satisfaction of our clients is foremost in our mind.",
      whatIs:
        "Raw cashew nuts are not technically nuts. In fact, they are the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit, which is why it is often referred to as a nut rather than a seed. The nut is protected by a strong shell and undergoes a series of treatments to remove the shell and toxins before consumption. It is frequently roasted or salted and then processed into various snacks.",
      specs:
        "Export Specifications for Raw Cashew Nuts include:\n- Moisture content below 10%\n- Nut count: 170–190 per kg\n- Out-turn: minimum 48 lbs\n- Foreign matter: less than 1%\n- Packaging: 80kg jute bags",
    },
  },
];

export default products;
