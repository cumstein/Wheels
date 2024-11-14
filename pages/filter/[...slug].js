import styles from "./FilterSlug.module.css";

import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";

import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filteredData.length)
    return (
      <div className={styles.container}>
        <h3>No Results Found</h3>
      </div>
    );

  return <CarsList data={filteredData} />;
}
export default FilteredCars;
