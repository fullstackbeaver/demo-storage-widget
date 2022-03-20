import {fetcher} from "./fetcher";
import {store}   from "../providers/Store";

/**
 * data loaded from API
 *
 * @var {Array}
 */
let fromApi = [];

/**
 * update count value in store and launch automatically rendering
 *
 * @return  {void}
 */
function increment () {
  store.set({
    count : store.get.count+1
  });
}

/**
 * update fromApi's values if needed, update name in store and launch automatically rendering
 *
 * @return  {Promise.<void>}
 */
async function getData(){
  if (fromApi.length === 0) fromApi = await fetcher("https://gorest.co.in/public/v2/users");
  store.set({
    name: fromApi[store.get.count].name
  });
}

export {
  getData,
  increment
};