import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const App = () => {
  return (
    <AppContainer>
      <Header />
      <Footer />
    </AppContainer>
  );
};

export default App;
