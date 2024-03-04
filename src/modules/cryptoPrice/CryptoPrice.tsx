import Api from "@/routes/api";
import { useEffect, useState } from "react"

const CryptoPrice = () => {
  const [coins, setCoins] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await Api.getCoins();
        setCoins(result.data.data);
      }
      catch(error:any) {
        console.log(error?.message || error);
      }
    }
    fetchData();
  }, []);

  console.log(coins)
  return (
    <div
    className="flex items-center justify-center h-full"
    >
      <div>
        <div>
          search
        </div>

        <ul 
        className="
        h-[400px] overflow-y-scroll
        "
        >
          {
            coins?.length
            ?(
              coins.map((el:any) => (
                <li key={el.id}>
                  {el.id}
                </li>
              ))
            ):'loading...'
          }
        </ul>
      </div>
    </div>
  )
}

export default CryptoPrice