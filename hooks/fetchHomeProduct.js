import { useEffect, useState } from "react";

export const fetchHomeProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const timer = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Product 1", "product two", "product three");
        }, 2000);
        return () => clearTimeout(timer);
      });

      const result = await timer;
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, error, data };
};
