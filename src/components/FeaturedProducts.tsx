
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      title: "High Ticket Email System - Automate Email Campaigns",
      url: "https://www.checkout-ds24.com/redir/599347/Rogayah/"
    },
    {
      title: "AI Resume Screening System - Automate CV Screening",
      url: "https://www.checkout-ds24.com/redir/599345/Rogayah/"
    },
    {
      title: "AI Sales Agent",
      url: "https://www.checkout-ds24.com/redir/600558/Rogayah/"
    },
    {
      title: "Content Creation Generator - Automate your Content Creation",
      url: "https://www.checkout-ds24.com/redir/599341/Rogayah/"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured AI Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular automation solutions that are transforming businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              url={product.url}
              featured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
