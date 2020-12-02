import { createBrowserHistory } from "history";
import store from './store';

const history = createBrowserHistory(store);

export default history;