import Hotels from "./Pages/Hotels/Hotels";
import ThingsToDo from "./Pages/ThingsToDo/ThingsToDo";
import Restaurans from "./Pages/Restaurants/Restaurans";
import Flights from "./Pages/Flights/Flights";
import Vacations from "./Pages/Vacations/Vacations";
import Cruises from "./Pages/Cruises/Cruises";
import RentalCars from "./Pages/RentalCars/RentalCars";
import Home from "./Pages/Home/Home";
import Formus from "./Pages/Forums/Formus";

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
  {
    element: <RentalCars />,
    path: "/RentalCars",
  },
  {
    element: <Cruises />,
    path: "/Cruises",
  },
];

export default routes;
