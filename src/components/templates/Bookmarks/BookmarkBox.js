import Image from "next/image"

export default function BookmarkBox({imgSrc}) {
  return (
    <article className='relative hover:scale-105 duration-200 w-[260px] h-[400px] rounded-xl cursor-pointer'>
       <div>
        <Image src={'/images/video.svg'} className="w-14 h-14 absolute top-2 right-2 z-10  "
        width={300} height={300} alt="vedio" />
       </div>
       <Image className="w-full h-full rounded-xl object-cover" 
       src={imgSrc} width={1000} height={1000} alt="vedio"/>
       <div className="w-full h-full absolute inset-0 z-30 bg-black/10"></div>
    </article>
  )
}
