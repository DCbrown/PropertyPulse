// fetch all properties

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

// fetch single property

async function fetchProperty(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/properties/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching properties");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching properties: ", error);
  }
}

export { fetchProperties, fetchProperty };
