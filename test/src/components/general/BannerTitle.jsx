function BannerTitle({ children,img=`banner` }){
  return(
    <>
    <div className={`flex justify-center items-center h-80 bg-cover bg-center bg-[url(./img/${img}.jpg)]`} >
      <div className=' text-white text-3xl font-bold uppercase text-center align-middle'>
            {children}
      </div>
    </div>
    </>
    
  )
}

export default BannerTitle;