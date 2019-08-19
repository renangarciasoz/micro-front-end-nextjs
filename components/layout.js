import { Header, Footer } from "design-system-lib";
import { Provider } from "react-redux";

const Layout = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", height: "98vh" }}>
    <Header />
    <main
      style={{
        padding: "20px",
        height: "calc(100% - 40px)",
        backgroundColor: "#D5E8D4"
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
