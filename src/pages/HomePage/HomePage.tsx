import ExploreProducts from "../../components/ExploreProducts";
import FeatureSection from "../../components/FeatureSection";
import HeroSection from "../../components/HeroSection";
import ProductCategory from "../../components/ProductCategory";
import SalesProduct from "../../components/SalesProduct";
import SellingProduct from "../../components/SellingProduct";
import SupportSection from "../../components/SupportSection";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <SalesProduct />
      <ProductCategory />
      <SellingProduct />
      <ExploreProducts />
      <FeatureSection />
      <SupportSection />
    </Layout>
  );
};
export default HomePage;
