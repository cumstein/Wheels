import carsData from "@/data/carsData";

import SearchBar from "@/components/module/SearchBar";
import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import AllButton from "@/components/module/AllButton";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </>
  );
}

export default Index;
