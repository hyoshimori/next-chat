import { useAxios } from "./useAxios"
import { useEffect, useState } from "react"
import { Channel } from "@/types/Channel";

export const useChannels = () => {
  const { axios } = useAxios()
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const fetch = async() => {
      const data = await axios.get('/channels.json')
      setChannels(data.data)
    }

    fetch();
  }, [])

  return { channels };
}
