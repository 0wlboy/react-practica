function Slider(){
  return(
    <>
    <section>
      <Card />
      <Card />
      <Card />
    </section>
    </>
  )
}

function Card(){
  return(
    <div>
      <h2>Titulo</h2>
      <p>Parrafo</p>
    </div>
  )
}

export {Slider, Card}