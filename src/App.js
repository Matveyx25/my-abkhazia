import Main from "./pages/Main/Main";
import HousingCatalog from "./pages/HousingCatalog/HousingCatalog";
import Tours from "./pages/Tours/Tours";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities/Cities";
import Transfer from "./pages/Transfer/Transfer";
import CarRent from "./pages/CarRent/CarRent";
import Cooking from "./pages/Сooking/Cooking";
import TransferAutomobile from "./pages/TransferAutomobile/TransferAutomobile";
import TransferCatalog from "./pages/TransferCatalog/TransferCatalog";
import HousingCard from "./pages/HousingCard/HousingCard";
import HotelCard from "./pages/HotelCard/HotelCard";
import TourCard from "./pages/TourCard/TourCard";
import ImpressionCard from "./pages/ImpressionCard/ImpressionCard";
import CarCard from "./pages/CarCard/CarCard";
import RestaurantCard from "./pages/RestaurantCard/RestaurantCard";
import TownCard from "./pages/TownCard/TownCard";
import SentenceForm from "./pages/SentenceForm/SentenceForm";
import ReportProblem from "./pages/ReportProblem/ReportProblem";
import CheckData from "./pages/CheckData/CheckData";
import { AccountHotel } from './pages/AccountHotel/AccountHotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/housing-catalog" element={<HousingCatalog />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer-catalog" element={<TransferCatalog />} />
          <Route path="/transfer-automobile" element={<TransferAutomobile />} />
          <Route path="/car-rent" element={<CarRent />} />
          <Route path="/cooking" element={<Cooking />} />

          <Route path="/housing-card" element={<HousingCard />} />
          <Route path="/hotel-card" element={<HotelCard />} />
          <Route path="/tour-card" element={<TourCard />} />
          <Route path="/impression-card" element={<ImpressionCard />} />
          <Route path="/car-card" element={<CarCard />} />
          <Route path="/restaurant-card" element={<RestaurantCard />} />
          <Route path="/town-card" element={<TownCard />} />

          <Route path="/sentence-form" element={<SentenceForm />} />
          <Route path="/report-problem" element={<ReportProblem />} />
          <Route path="/check-data" element={<CheckData />} />   

          <Route path="/hotel-account/*" element={<AccountHotel />} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
