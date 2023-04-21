import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams(); // se usa para encontrar los parametros especificadas en los routes

  const hero = getHeroById(id);
  
  if(!hero){
    return <Navigate to="/marvel" />
  }
  
  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  )
}
