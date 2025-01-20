import propTypes from 'prop-types';

function Button({texto ='presioname',estilos='text-white bg-red-600'}){
  return(
    <button className={`${estilos} p-2 rounded-md text-white`}>{texto}</button>
  )
}

Button.propTypes ={
  texto: propTypes.string,
  estilos:propTypes.string
}

export default Button;