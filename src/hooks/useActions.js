import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext"

export default function useActions(){
  const {addToOrder,remove,removeAll} = useContext(AppStateContext);

  return {addToOrder,remove,removeAll}; //usePrototypes를 사용하는 곳에서 바로 prototypes를 꺼내서 사용할 수 있다.
}