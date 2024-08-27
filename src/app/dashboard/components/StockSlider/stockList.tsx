


type StockListType = {
  name: string,
  image: string,
  total_share: number,
  total_return: number,
  data: number[]
}

const stockList: StockListType[] = [
  {
    name: "Apple",
    image: "https://ik.imagekit.io/zkent266/apple.png",
    total_share: 312.4,
    total_return: -1.1,
    data: [
      435, 321, 532, 801, 1431, 1098, 732, 621, 551, 782, 513, 400, 435, 621,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 5,
    ],
  },
  {
    name: "Meta",
    image: "https://ik.imagekit.io/zkent266/facebook.png",
    total_share: 140.2,
    total_return: -1.1,
    data: [
      435, 321, 532, 801, 800, 900, 732, 621, 451, 482, 513, 600, 435, 321,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 5,
    ],
  },
  {
    name: "Microsoft",
    image: "https://ik.imagekit.io/zkent266/microsoft.png",
    total_share: 240.4,
    total_return: 0.85,
    data: [
      435, 321, 532, 801, 1231, 1098, 732, 621, 451, 482, 513, 500, 435, 321,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 732,
    ],
  },
  {
    name: "Google",
    image: "https://ik.imagekit.io/zkent266/google.png",
    total_share: 99.1,
    total_return: -1.1,
    data: [
      435, 321, 532, 801, 1231, 1098, 732, 621, 451, 482, 513, 200, 435, 321,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 5,
    ],
  },
  {
    name: "Telegram",
    image: "https://ik.imagekit.io/zkent266/telegram.png",
    total_share: 312.4,
    total_return: -1.1,
    data: [
      435, 321, 532, 801, 1231, 1098, 732, 621, 451, 482, 513, 200, 435, 321,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 5,
    ],
  },
  {
    name: "Instagram",
    image: "https://ik.imagekit.io/zkent266/instagram.png",
    total_share: 312.4,
    total_return: -1.1,
    data: [
      435, 321, 532, 801, 1231, 1098, 732, 621, 451, 482, 513, 200, 435, 321,
      532, 801, 1231, 1098, 732, 321, 451, 482, 513, 5,
    ],
  },
];

export default stockList