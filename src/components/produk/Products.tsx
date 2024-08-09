import ProductCard from "./ProductCard";

const products = [
  {
    name: "Smartwatch Model 1",
    img: "/asset/product/jam2.jpg",
    description:
      "Elevate your lifestyle with the Smartwatch Model 1, a fusion of cutting-edge technology and contemporary design. Engineered to seamlessly integrate into your daily routine.",
  },
  {
    name: "Smartwatch Model 1 pro",
    img: "/asset/product/jam3.jpg",
    description:
      "Experience the pinnacle of wearable technology with the Smartwatch Model 1 Pro. Designed for those who demand the best, the Smartwatch Model 1 Pro combines top-of-the-line features, exceptional performance, and a sophisticated design to keep you connected, informed, and in control.",
  },
  {
    name: "Smartwatch Model 2 'Oval'",
    img: "/asset/product/jam222.png",
    description:
      "Discover a blend of elegance and cutting-edge technology with the Smartwatch Model 2 Oval. Designed to complement your style while keeping you connected and informed, this smartwatch offers a unique oval shape that sets it apart from the rest.",
  },
];

export default function Products() {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem]">
      <h1 className="text-[36px] font-Oswald font-bold text-center justify-center items-center">
        Best Product
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div>
          <ProductCard
            name="Smartwatch Model 1"
            desc="A smartwatch Model 1 is a wearable device that combines the functionality of a traditional wristwatch with the advanced features of a smartphone. Typically, it connects to a smartphone via Bluetooth or Wi-Fi,
             allowing users to access notifications, messages, and apps directly from their wrist. Smartwatches often come with various sensors that enable health and fitness tracking, such as heart rate monitoring, 
             step counting, sleep analysis, and GPS for outdoor activities."
            price="$399"
            image="/asset/product/produk22.png"
          />
        </div>
        <div>
          <ProductCard
            name="Smartwatch Model 1 Pro"
            desc="The Smartwatch Model 1 Pro is equipped with the latest processor and enhanced memory,
             ensuring smooth performance and quick response times. Its vibrant,
              high-resolution display offers crystal-clear visuals, making it easy to navigate apps
              and features.Tailor your Smartwatch Pro to your lifestyle with a wide range of apps and customization options.
              From fitness tracking and health monitoring to productivity tools and entertainment, the Smartwatch Pro adapts to your needs.

"
            price="$425"
            image="/asset/product/produk11.png"
          />
        </div>
        <div>
          <ProductCard
            name="Smartwatch Model 2 'Oval' "
            desc="A smartwatch Model 2 'Oval' is a wearable device that Navigate through features effortlessly
             with the intuitive touchscreen interface. The customizable watch faces and interchangeable bands
              allow you to personalize your smartwatch to match any outfit or occasion.
              Powered by the latest technology, the Model 2 Oval delivers fast and responsive performance.
              Its robust processor and ample memory ensure smooth operation, whether you're using fitness apps,
               checking notifications, or exploring new features."
            price="$449"
            image="/asset/product/produk33.png"
          />
        </div>
        <div>{/* product card */}</div>
      </div>
    </div>
  );
}
