import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

export const App = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;