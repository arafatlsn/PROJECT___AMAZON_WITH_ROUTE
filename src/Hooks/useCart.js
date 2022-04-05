import { useEffect, useState } from "react"
import { loadData } from "../LocalStorage/LocalStorage";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if(loadData()){
      setCart(loadData())
    }
  }, [cart])
  return [cart, setCart]
}

export default useCart