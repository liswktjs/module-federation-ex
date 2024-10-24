import { EDU_ELEMENT_ID } from "@federation/shared";
import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById(EDU_ELEMENT_ID)!,
});
