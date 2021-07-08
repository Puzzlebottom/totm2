import {server} from "./index.js";

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
server.listen(port);
console.log('listening on port ' + port);