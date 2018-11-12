"use strict";

import main from "./views/main";
import initNetwork from "./initNetwork";
//import PeerInfo from "peer-info";

initNetwork();
document.body.appendChild(main);
