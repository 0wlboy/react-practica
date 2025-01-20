import { Children } from "react"

function Article({children}){
  return(
    <article className="flex flex-col gap-2">
      {children}
    </article>
  )
}

Article.propTypes ={
  children: propTypes.node
}

export default Article; 