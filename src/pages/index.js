import { Layout } from "../components/Layout";
import { Quote } from "../container/Quote";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../redux/";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Quote />
      </Layout>
    </Provider>
  );
}
