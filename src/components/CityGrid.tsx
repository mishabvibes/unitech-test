interface CityGridProps {
  cities: string[];
}

const CityGrid = ({ cities }: CityGridProps) => {
  return (
    <div className="flex flex-wrap items-center mt-3 gap-x-6 gap-y-2">
      {cities.map((city, index) => (
        <p
          key={index}
          className="text-text-blackSecondary text-body2"
        >
          {city}
        </p>
      ))}
    </div>
  );
};

export default CityGrid;
