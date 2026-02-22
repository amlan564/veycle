import { CarFilters } from "./_components/car-filters";
import { getCarFilters } from "@/actions/car-listing";
import { CarListings } from "./_components/cars-listing";

export const metadata = {
  title: "Cars | Veycle",
  description: "Browse and search for your dream car",
};

export default async function CarsPage() {
  const filtersData = await getCarFilters();

  return (
    <div className="container mx-auto px-4 md:px-28 py-12">
      <h1 className="text-2xl md:text-4xl mb-4 gradient-title">Browse Cars</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Section */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <CarFilters filters={filtersData.data} />
        </div>

        {/* Car Listings Section */}
        <div className="flex-1">
          <CarListings />
        </div>
      </div>
    </div>
  );
}
