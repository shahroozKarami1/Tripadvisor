import Hotels from "./Pages/Hotels/Hotels";
import ThingsToDo from "./Pages/ThingsToDo/ThingsToDo";
import Restaurans from "./Pages/Restaurants/Restaurans";
import Flights from "./Pages/Flights/Flights";
import Vacations from "./Pages/Vacations/Vacations";
import Cruises from "./Pages/Cruises/Cruises";
import RentalCars from "./Pages/RentalCars/RentalCars";
import Home from "./Pages/Home/Home";
import Formus from "./Pages/Forums/Formus";
import UserReview from "./Pages/UserReview/UserReview";
import PostPhotos from "./Pages/PostPhotos/PostPhotos";
import CreateingListing from "./Pages/CreateingListing/CreateingListing";
import NotFound from "./Pages/NotFound/NotFound";
import Trips from "./Pages/Trips/Trips";
import TravelersChoice from "./Pages/TravelersChoice/TravelersChoice";
import TravelersChoiceHotels from "./Pages/TravelersChoiceHotels/TravelersChoiceHotels";
import Article from "./Pages/Article/Article";

let routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Hotels />,
    path: "/Hotels",
  },
  {
    element: <ThingsToDo />,
    path: "/Attractions",
  },
  {
    element: <Restaurans />,
    path: "/Restaurants",
  },
  {
    element: <Flights />,
    path: "/CheapFlightsHome",
  },
  {
    element: <Vacations />,
    path: "/Rentals",
  },
  {
    element: <Formus />,
    path: "/ForumHome",
  },
  // {
  //   element: <RentalCars />,
  //   path: "/RentalCars",
  // },
  {
    element: <Cruises />,
    path: "/Cruises",
  },
  {
    element: <UserReview />,
    path: "/UserReview",
  },
  {
    element: <PostPhotos />,
    path: "/PostPhotos",
  },
  {
    element: <CreateingListing />,
    path: "/CreateListing",
  },
  {
    element: <Trips />,
    path: "/Trips",
  },
  {
    element: <TravelersChoice />,
    path: "/TravelersChoice",
  },
  {
    element: <TravelersChoiceHotels />,
    path: "TravelersChoice/TravelersChoice-Hotels",
  },
  {
    element: <Article />,
    path: "Articles",
  },
  {
    element: <NotFound />,
    path: "/*",
  },
];

export default routes;
