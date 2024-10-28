import { JOB_ELEMENT_ID } from "@federation/shared";
import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById(JOB_ELEMENT_ID)!,
});
