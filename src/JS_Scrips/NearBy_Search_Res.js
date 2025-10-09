const restaurantImages = [
    "https://images.unsplash.com/photo-1604908177522-04061c9a6c52?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1617196035359-1b0e51b2d8da?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514516870921-624fe82b9b9f?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1571091718767-18e6b3aa2e54?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600891964340-6fcab1de88a7?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1576842637704-947bbeb2ff28?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1617196035028-8c98eb3a6c12?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1601050699183-43a27eb6b72c?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1598514982354-d03f7db5e1da?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1552332386-f8dd00dc0c2e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1571517517891-2f29e6d7b927?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1604908177524-91c6755f8458?auto=format&fit=crop&w=800&q=60"
  ];
  



export default async function getNearbyRestaurants({
    radius = 2000,
    limit = 10,
    category = "catering.restaurant",
    biasType = "proximity",
  } = {}) {
    const API_KEY = import.meta.env.VITE_PLACE_API_KEY;
  
    try {
      //  Get user's current location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      const { latitude, longitude } = position.coords;
  
      //Create cache key
      const cacheKey = `restaurants_${latitude.toFixed(2)}_${longitude.toFixed(2)}_${radius}`;
      const cachedData = localStorage.getItem(cacheKey);
  
      //Return cached data if available
      if (cachedData) {
        console.log("📦 Using cached restaurant data");
        console.log(JSON.parse(cachedData))
        return JSON.parse(cachedData);
      }
  
      // Step 4: Build API URL dynamically
      const API_URL = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${longitude},${latitude},${radius}&bias=${biasType}:${longitude},${latitude}&limit=${limit}&apiKey=${API_KEY}`;
  
      // Step 5: Fetch data from API
      const response = await fetch(API_URL);
      const data = await response.json();
  
      // Step 6: Format data
      const restaurants = data.features.map((place, index) => {
        const prop = place.properties;
        return {
          id: index + 1,
          name: prop.name || "Unknown Restaurant",
          cuisine: prop.categories?.map((c) => c.split(".")[1]) || ["Restaurant"],
          rating: prop.rating || (Math.random() * 2 + 3).toFixed(1),
          priceRange: "₹₹",
          distance: prop.distance
            ? (prop.distance / 1000).toFixed(1) + " km"
            : "N/A",
          address:
            truncateText(prop.address_line2,30) ||
            `${prop.street || ""}`,
          isOpen: prop.datasource?.raw?.opening_hours ? true : false,
          image:
            restaurantImages[index]
        };
      });
  
      // ✅ Step 7: Save to cache
      localStorage.setItem(cacheKey, JSON.stringify(restaurants));
  
      console.log("✅ Fetched fresh data & cached it");
      return restaurants;
    } catch (error) {
      console.error("Error fetching nearby restaurants:", error);
      return [];
    }
}


function truncateText(text, maxLength) {
    if (typeof text !== "string") return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
}
  