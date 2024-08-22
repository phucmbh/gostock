type StockListType = {
  name: string;
  image: string;
  code: string;
  price: number;
  percent: number;
};

const stockList: StockListType[] = [
  {
    name: "Spotify",
    code: "SPOT",
    image: "https://ik.imagekit.io/zkent266/spotify.png",
    price: 310.4,
    percent: -1.1,
  },
  {
    name: "Arbnb",
    code: "ABNB",
    image: "https://ik.imagekit.io/zkent266/airbn.png",
    price: 112.22,
    percent: -10.29,
  },
  {
    name: "Shopify",
    code: "SHOP",
    image: "https://ik.imagekit.io/zkent266/shopify.png",
    price: 310.4,
    percent: -1.1,
  },

  {
    name: "Playstation",
    code: "SONY",
    image: "https://ik.imagekit.io/zkent266/playstation.png",
    price: 28.4,
    percent: 0.89,
  },
  {
    name: "Dropbox",
    code: "DRB",
    image: "https://ik.imagekit.io/zkent266/dropbox.png",
    price: 28.4,
    percent: -3.04,
  },
  {
    name: "Paypal",
    code: "PYPL",
    image: "https://ik.imagekit.io/zkent266/paypal.png",
    price: 87.66,
    percent: -3.86,
  },
];

export default stockList;
