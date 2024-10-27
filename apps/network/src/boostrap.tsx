import { NETWORK_ELEMENT_ID } from "@federation/shared";
import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById(NETWORK_ELEMENT_ID)!,
});
