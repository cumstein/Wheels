import carsData from "../../data/carsData";

import SearchBar from "@/components/module/SearchBar";
import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
export default Details;
