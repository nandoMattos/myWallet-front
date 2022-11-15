import { createGlobalStyle } from "styled-components";
import { MAIN_COLOR } from "../../constants/colors";

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
  width: 1000px;
  box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
  -webkit-box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
  -moz-box-shadow: 0px -1px 34px -5px rgba(0,0,0,0.81);
}
`;

export default GlobalStyle;
