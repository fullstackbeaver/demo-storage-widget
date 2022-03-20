const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

let server ="";

async function fetcher(url, options= {}) {
  try {
    const res = await fetch(server+url, {headers, ...options});
    return await res.json();
  }
  catch (err){
    console.error("error:",err);
    throw err;
  }
}

function setServerBaseUrl(url){
  server = url;
}

export {
  fetcher,
  setServerBaseUrl
};
