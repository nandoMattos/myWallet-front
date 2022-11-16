import { createGlobalStyle } from "styled-components";
import { MAIN_COLOR } from "../../constants/colors";
import { RESPONSIVITY_LIMIT } from "../../constants/sizes";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box ;  
}

a:visited{
  color: none
}

a{
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 15px;
}

#root{
  font-family: 'Raleway', sans-serif;
  background-color: ${MAIN_COLOR};
  margin: 0 auto;
  width: ${RESPONSIVITY_LIMIT};
  box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
  -webkit-box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
  -moz-box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
}

@media (max-width: ${RESPONSIVITY_LIMIT}){
  #root{
    height: 100%;
    width: 100%;
  }
}
`;

export default GlobalStyle;
