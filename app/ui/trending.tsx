import { Button } from '@/components/ui/button'
import Link from 'next/link';
import Image from "next/image"
type Props = {}



interface RootObject {
    data: Datum[];
  }
  interface Datum {
    entry: Entry;
  }
  interface Entry {
    mal_id: number;
    url: string;
    images: Images;
    title: string;
  }
  interface Images {
    jpg: Jpg;
    webp: Jpg;
  }
  interface Jpg {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }

const getRecomandations = async( ) => {
    "use server"
    const id = "1"
    const apiUrl = process.env.API_URL

    const data = await fetch(`${apiUrl}1/recommendations`  ,{
      cache : 'no-store'
      } )
    return data.json()
}


const Trending = async(props: Props) => {
    const recomandations : RootObject = await getRecomandations()
      return (
    <div className='w-full p-3'>
        <div className='w-full flex justify-between text-2xl text-gray-400'>
            <h1 className=' font-bold'>Trending now:</h1>
            <Button variant={"outline"}>See all</Button>
        </div>
        <div className='flex overflow-x-auto space-x-4 mt-5'>
            {
                recomandations.data.map((item) => (
                   <Link href={item.entry.url} key={item.entry.mal_id}><div className='flex-shrink-0 w-[200px] text-center flex flex-col gap-2 truncate'>
                   <Image height={200} width={200} src={item.entry.images.jpg.image_url} alt='ds' className='rounded-lg' />
                   <p>{item.entry.title}</p>
               </div></Link> 
                ))
            }
</div>
    </div>
  )
}

export default Trending