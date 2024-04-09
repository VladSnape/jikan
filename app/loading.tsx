import { Skeleton } from "@/components/ui/skeleton"

type Props = {}
const map = [1,1,1,1,1,]


const Loading = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-xl">

    
<div className="flex space-y-3 p-5 w-full gap-5 flex-col sm:flex-row items-center sm:items-start">
          <Skeleton className="h-[400px] w-[300px] rounded-xl" />
          <div className=" flex flex-col gap-20">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <Skeleton className=" h-20 w-[400px]" />
          </div>
         <div>

         </div>
      
        </div>
        <div className=" flex-col flex gap-5 m-5 items-center sm:flex-row">
        {map.map((item,index)=>(
    <Skeleton className="h-[250px] w-[200px] rounded-xl" key={index} />
))}
        </div>
      
   </div>
    
  )
}

export default Loading