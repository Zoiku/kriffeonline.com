import "../styles/Home.css";
import headerImage from "../assets/Overview/manlookingatphone.4815b53271661be2a51c.png";
import { EventItem, EventItemSkeleton } from "../components/Events/Index";
import {
  MarketplaceProduct,
  MarketplaceProductSeleton,
} from "../components/Marketplace/Index";
import { getProducts } from "../hooks/useMarketplace";
import { getEvents } from "../hooks/useEvents";
import { HomeSectionWithHeading } from "../components/Home/Index";
import { providedServices } from "../utils/about";
import { ProvidedService } from "../components/About/Index";
import { useQuery } from "react-query";
import Button from "../components/Button";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate } from "react-router-dom";
import CenteredSection from "../components/Centered";

const HomePage = () => {
  const navigate = useNavigate();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const eventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return (
    <div className="home-page">
      <CenteredSection mobileWithPadding className="home-page-header">
        <div className="home-page-header-text-container">
          <div className="home-page-header-text">
            The Best Place Where <span className="key-1">Faith</span> Finds{" "}
            <span className="key-1">Products</span> and{" "}
            <span className="key-2">Events</span> Find{" "}
            <span className="key-2">Purpose</span>
          </div>
          <p className="home-page-header-text-helper">
            Discover and sell faith-inspired products, manage memorable events,
            and connect with our Christian community. Experience faith, hope,
            and love in every aspect of your journey with us.
          </p>
          <div className="home-header-buttons">
            <Button
              onClick={() => navigate("/marketplace")}
              startIcon={<StorefrontOutlinedIcon fontSize={"inherit"} />}
              sx={{ padding: 2, fontWeight: 600 }}
              label={"Shop Now"}
            />
            <Button
              onClick={() => navigate("/events")}
              startIcon={<CalendarMonthOutlinedIcon fontSize={"inherit"} />}
              sx={{ padding: 2, fontWeight: 600 }}
              label={"Explore Events"}
              color={"secondary"}
            />
          </div>
        </div>
        <div className="home-page-header-background-image">
          <img src={headerImage} alt="" />
        </div>
      </CenteredSection>
      <div className="home-sections">
        <HomeSectionWithHeading
          heading={"Our Provided Services"}
          to={{ label: "Read more", path: "/about" }}
          headingHelper={
            "Providing services tailored to our different categories of users"
          }
        >
          <div className="home-page-section-row-items">
            {providedServices.slice(0, 4).map((providedService, index) => (
              <ProvidedService key={index} providedService={providedService} />
            ))}
          </div>
        </HomeSectionWithHeading>

        <HomeSectionWithHeading
          heading={"Top Trending Products"}
          to={{ path: "/marketplace", label: "View all" }}
          headingHelper={"Discover the latest and hottest ads and deals"}
        >
          {productsQuery.isLoading ? (
            <div className="home-page-section-row-items">
              {Array.from(Array(4)).map((_, index) => (
                <MarketplaceProductSeleton key={index} />
              ))}
            </div>
          ) : productsQuery.isError ? (
            <>Something went wrong...</>
          ) : productsQuery.data ? (
            productsQuery.data.length > 0 ? (
              <div className="home-page-section-row-items">
                {productsQuery.data
                  ?.sort((a, b) => b.views - a.views)
                  .slice(0, 4)
                  .map((product, index) => (
                    <MarketplaceProduct product={product} key={index} />
                  ))}
              </div>
            ) : (
              <>Coming soon</>
            )
          ) : (
            <>Something went wrong...</>
          )}
        </HomeSectionWithHeading>
        <HomeSectionWithHeading
          heading={"Top Trending Events"}
          to={{ path: "/events", label: "See all" }}
          headingHelper={
            "Discover and purchase your tickets for the latest events"
          }
        >
          {eventsQuery.isLoading ? (
            <div className="home-page-section-row-items">
              {Array.from(Array(4)).map((_, index) => (
                <EventItemSkeleton key={index} />
              ))}
            </div>
          ) : eventsQuery.isError ? (
            <>Something went wrong...</>
          ) : eventsQuery.data ? (
            eventsQuery.data.length > 0 ? (
              <div className="home-page-section-row-items">
                {eventsQuery.data
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 4)
                  .map((event, index) => (
                    <EventItem event={event} key={index} />
                  ))}
              </div>
            ) : (
              <>Coming soon</>
            )
          ) : (
            <>Something went wrong...</>
          )}
        </HomeSectionWithHeading>
      </div>
    </div>
  );
};

export default HomePage;
