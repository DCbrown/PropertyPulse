import PropertyCard from "@/components/PropertyCard";

async function fetchProperties() {
  try {
    const response = await fetch(`http://localhost:3000/api/properties`);
    if (!response.ok) {
      throw new Error("Error fetching properties");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching properties: ", error);
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // sort properties by date
  properties.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties?.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties &&
              properties.map((property) => (
                <PropertyCard property={property} key={property._id} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
