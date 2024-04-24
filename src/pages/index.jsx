import Header from "@/components/layouts/header/Header";
import SideBar from "@/components/layouts/header/SideBar/SideBar";
import Footer from "@/components/layouts/footer/Footer";
import TopSlider from "@/components/patterns/topSlider/TopSlider";
import CategorySlider from "@/components/patterns/categorySlider/CategorySlider";
import NewArrival from "@/components/patterns/newArrivals/NewArrival";
import BestDeals from "@/components/patterns/bestDeals/BestDeals";

export async function getServerSideProps() {
  // Fetch categories from an API
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const results = await fetch("https://fakestoreapi.com/products/category/electronics");
  const data = await results.json();

  // Return the categories as props
  return {
    props: {
      categories,
      products,
      data
    },
  };
}

const Index = ({ categories, products, data }) => {
  return (
    <main className="main-container">
      <SideBar />
      <Header />
      <TopSlider />
      <CategorySlider categories={categories} />
      <NewArrival products={products} />
      <BestDeals products={data} categories={categories}/>
      <Footer />
    </main>
  );
};

export default Index;
