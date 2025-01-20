function Button({texto ='Boton',estilos='text-white bg-red-600'}){
  return(
    <button className={`${estilos} p-2 rounded-md text-white`}>{texto}</button>
  )
}

export default Button;