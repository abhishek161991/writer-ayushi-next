import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <div style={{background: '#f6f7f0', paddingLeft: '5vw', paddingRight: '5vw'}}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
