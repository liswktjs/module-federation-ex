import { injectFactory } from "@federation/shell-router";
import { routes } from "./routes";

const inject = injectFactory({ routes });

export default inject;
