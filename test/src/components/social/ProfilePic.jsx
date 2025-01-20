function ProfilePic({pic, dimension='h-12 w-12'}){
  return(
    <img src={pic} alt="" className={`${dimension} rounded-full`} />
  )
}

export default ProfilePic;