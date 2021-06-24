import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext"

export default function usePrototypes(){
  const {prototypes} = useContext(AppStateContext);

  return prototypes; //usePrototypes를 사용하는 곳에서 바로 prototypes를 꺼내서 사용할 수 있다.
} 