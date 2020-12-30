import { createGlobalStyle} from  'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: linear-gradient(0deg, #303073, #DC0047);
  color: #Fff;
  -webkit-font-smoothing: antialiased;
}

body, input , button {
  font-family:  Poppins;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}
`;

