import { Nav, BannerTitle, ProfilePic, Subtitulo, Parrafo } from "../components/components";

function Home() {
  return (
    <>
      <Nav></Nav>
      <BannerTitle>Titulo de Banner</BannerTitle>
      <div className='lg:px-64 pt-10'>
        <div className='space-y-8'>
          <div className='flex flex-row space-x-3 items-center'>
          <ProfilePic pic="./../img/portrait.jpg" dimension='h-16 w-16'></ProfilePic>
          <Subtitulo>
            Nombre de Autor
          </Subtitulo>
          </div>
          <div className='my-7'>
            <Parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum purus, fermentum sit amet facilisis ut, tincidunt et sem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a orci ipsum. Duis lacinia dapibus nisl lacinia cursus. Pellentesque molestie enim eu enim vehicula, eget egestas purus ultricies. Curabitur in quam augue. Ut dignissim elit ac lacus egestas tempus. Nulla felis nisi, vulputate in lacinia eu, rutrum ac magna. Curabitur in lectus et metus pretium pretium a ut tortor. Pellentesque rhoncus quam ac nibh porta imperdiet.</Parrafo>
            <Parrafo>Proin ac sagittis orci, at malesuada velit. Praesent id congue ante. Nulla ullamcorper elit et imperdiet accumsan. Donec placerat dolor sit amet sapien ultrices, ut lobortis velit placerat. Phasellus at lacus non libero viverra pellentesque. Maecenas eget metus ante. Nunc sit amet odio nisl. In id dolor velit. Maecenas eleifend felis in sem pellentesque congue. Curabitur iaculis enim in erat maximus venenatis.</Parrafo>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;