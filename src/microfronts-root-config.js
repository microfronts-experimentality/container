import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfronts/mf-header",
  app: () => System.import("@microfronts/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@microfronts/mf-products",
  app: () => System.import("@microfronts/mf-products"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
