import { Button } from '@/components/ui/button'
import { Bookmark, CirclePlay } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'



interface RootObject {
    data: Data;
  }
  interface Data {
    mal_id: number;
    url: string;
    images: Images;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    type: string;
    chapters: number;
    volumes: number;
    status: string;
    publishing: boolean;
    published: Published;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: Author[];
    serializations: Author[];
    genres: Author[];
    explicit_genres: Author[];
    themes: Author[];
    demographics: Author[];
  }
  interface Author {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  interface Published {
    from: string;
    to: string;
    prop: Prop;
  }
  interface Prop {
    from: From;
    to: From;
    string: string;
  }
  interface From {
    day: number;
    month: number;
    year: number;
  }
  interface Title {
    type: string;
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


  function generateRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (randomNumber === 5);
    return randomNumber;
}


type Props = {}

const getAnimeDetails = async() => {
    "use server"
    const apiUrl = process.env.API_URL
    const randomNumber = generateRandomNumber()
    const res = await fetch(`${apiUrl}${randomNumber}` ,{
    cache : 'no-store'
    } )
    const data = await res.json()
    return data
}

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    "use server"
    e.preventDefault()
    const form = e.currentTarget
    console.log("submitted")
}




const HeroCard = async(props: Props) => {
    const mangaInfo : RootObject = await getAnimeDetails()
    if(!mangaInfo.data){
        return <div className='h-[400px] justify-center flex flex-col items-center gap-5'>
            <h1 className='text-3xl'>data not found</h1>
            <p className='text-lg'>please refresh the page</p>
        </div>
    }
  return (
    <div className='flex flex-col items-center justify-center w-full p-2 gap-5 sm:flex-row sm:p-5 sm:gap-10 mb-10'>
    <Image
        src={mangaInfo.data?.images.jpg.image_url}
        alt="hero"
        width={300}
        height={300}
        className='rounded-lg'/>
        <div className=' flex flex-col gap-5 w-full justify-between sm:items-start  sm:h-[400px] items-stretch'>
   
<h1 className=" text-2xl font-bold sm:text-4xl">{mangaInfo.data?.title_english ? mangaInfo.data.title_english : 'not found'}</h1>
        <p className=" font-semibold text-gray-500 sm:text-xl">{mangaInfo.data.title_japanese}</p>

<div className='flex gap-3 w-full justify-center  sm:justify-start'>

    <Link href={mangaInfo.data.url}><Button><div className='flex gap-2 items-center justify-center'><h1>Read</h1><CirclePlay /></div></Button></Link>
    <Button variant={"secondary"}><div className='flex gap-2 items-center justify-center'><h1>Add to list</h1><Bookmark /></div></Button>
    

</div>
<form action="" className='flex flex-col gap-2'>
        <h3>search your favorate anime :     </h3>
        <input type="search" name="search" id="1" className='p-2 bg-transparent border rounded-lg w-full'/>
        <Button type="submit" className='font-bold'>Search</Button>
    </form>

<div className='w-full'>
    <ul className='flex items-center justify-between gap-5'>
        <li className='flex gap-2'><p className=' text-gray-500'>rating:</p><p>{mangaInfo.data.score}</p></li>
        <li className='flex gap-2'><p className=' text-gray-500'>year:</p><p>{mangaInfo.data.published.from}</p></li>
        <li className='flex gap-2'><p className=' text-gray-500'>volumes:</p><p>{mangaInfo.data.volumes}</p></li>

    </ul>
</div>
        </div>

    </div>
  )
}

export default HeroCard