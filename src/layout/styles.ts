import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 20px 0;
`;

export const Articles = styled.div`
  grid-column: 1 / 10;
`;

export const Container = styled.div`
  height: 100%;
`;

export const LastNews = styled.div`
  grid-column: 10 / 10;
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 30px 20px;
  padding: 22px;
  background-color: #f4f4fa;
  border-radius: 8px;
  width: 270px;
  height: fit-content;
`;

const GlobalStyles = createGlobalStyle`
 
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: #213547;
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-weight: 500;
  color: #18191e;
  text-decoration: inherit;
}

a:hover {
  text-decoration: none;
  color: #18191e;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
 
`;

export default GlobalStyles;
