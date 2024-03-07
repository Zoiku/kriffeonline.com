import "../styles/Home.css";
import headerImage from "../assets/Overview/manlookingatphone.4815b53271661be2a51c.png";
import { EventItem, EventItemSkeleton } from "../components/Events/Index";
import {
  MarketplaceProduct,
  MarketplaceProductSeleton,
} from "../components/Marketplace/Index";
import useMarketplace from "../hooks/useMarketplace";
import useEvents from "../hooks/useEvents";
import { HomeSectionWithHeading } from "../components/Home/Index";
import { providedServices } from "../utils/about";
import { ProvidedService } from "../components/About/Index";

const HomePage = () => {
  const { events, isFetchingEvents, isFetchingEventsError } = useEvents();
  const { products, isFetchingProducts, isFetchingProductsError } =
    useMarketplace();

  return (
    <div className="home-page">
      <div className="home-page-header">
        <div className="home-page-header-text-container"></div>
        <div className="home-page-header-background-image">
          <img src={headerImage} alt="" />
        </div>
      </div>
      <div className="home-sections">
        <HomeSectionWithHeading
          heading={"Our Provided Services"}
          to={{ label: "Read more", path: "/about" }}
          headingHelper={
            "Providing services tailored to our different categories of users"
          }
        >
          <div className="home-page-provided-services">
            {providedServices.slice(0, 4).map((providedService, index) => (
              <ProvidedService key={index} providedService={providedService} />
            ))}
          </div>
        </HomeSectionWithHeading>

        <HomeSectionWithHeading
          heading={"Top Trending Products"}
          to={{ path: "/marketplace", label: "View all products" }}
          headingHelper={"Discover the latest and hottest ads and deals"}
        >
          <div className="home-page-section-trending-grid">
            {isFetchingProducts ? (
              Array.from(Array(4)).map((_, index) => (
                <MarketplaceProductSeleton key={index} />
              ))
            ) : isFetchingProductsError ? (
              <>Something went wrong...</>
            ) : products ? (
              products.length === 0 ? (
                <>New products coming soon</>
              ) : (
                products
                  ?.sort((a, b) => b.views - a.views)
                  .slice(0, 4)
                  .map((product, index) => (
                    <MarketplaceProduct product={product} key={index} />
                  ))
              )
            ) : (
              <>Something went wrong...</>
            )}
          </div>
        </HomeSectionWithHeading>
        <HomeSectionWithHeading
          heading={"Top Trending Events"}
          to={{ path: "/events", label: "See all events" }}
          headingHelper={
            "Discover and purchase your tickets for the latest events"
          }
        >
          <div className="home-page-section-trending-grid">
            {isFetchingEvents ? (
              Array.from(Array(4)).map((_, index) => (
                <EventItemSkeleton key={index} />
              ))
            ) : isFetchingEventsError ? (
              <>Something went wrong...</>
            ) : events ? (
              events.length === 0 ? (
                <>New events coming soon</>
              ) : (
                events
                  ?.sort((a, b) => b.views - a.views)
                  .slice(0, 4)
                  .map((event, index) => (
                    <EventItem event={event} key={index} />
                  ))
              )
            ) : (
              <>Something went wrong...</>
            )}
          </div>
        </HomeSectionWithHeading>
      </div>
    </div>
  );
};

export default HomePage;
