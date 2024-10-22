import inject from "./injector";
import { POSTING_ELEMENT_ID } from "@federation/shared";

inject({
  routerType: "browser",
  rootElement: document.getElementById(POSTING_ELEMENT_ID)!,
});
