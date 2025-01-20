import Button from "./Button";

function Nav(){
  return(
    <>
      <nav>
        <div className="bg-blue-600 sticky w-full z-20 top-0 start-0  py-6">
          <div className="flex flex-row px-5 justify-between content-center">
            <div>
              <img src="./../../svg/cat.svg" alt=""/>
            </div> 
            <div>
              <ul className="flex flex-row space-x-5 items-center text-white">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><Button texto="Sign In" estilos="bg-blue-400"></Button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
  }

export default Nav;