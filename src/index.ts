import { initServer } from "./app";

async function init(){
    const app = await initServer();
    app.listen(8000, ()=>console.log("server start on port:8000"))

}

init();