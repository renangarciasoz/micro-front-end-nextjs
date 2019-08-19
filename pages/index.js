import Link from "next/link";
import Layout from "../components/layout";

import { Actions } from "redux-store-lib";
import { connect } from "react-redux";

const Index = ({ searchValue, changeSearchValue }) => (
  <Layout>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Olá Micro Front End</h1>
      <h2>{searchValue}</h2>
      <button
        onClick={() => changeSearchValue("Valor alterado com a action da lib")}
        style={{
          padding: "20px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          border: "1px solid green",
          marginRight: "30px",
          marginBottom: "30px",
          maxWidth: "300px"
        }}
      >
        Alterar valor
      </button>
      <Link href="/sobre">
        <a>Página sobre</a>
      </Link>
    </div>
  </Layout>
);

const mapStateToProps = state => {
  return {
    searchValue: state.search.searchValue
  };
};

const mapDispatchToProps = {
  changeSearchValue: Actions.search.changeSearchValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
