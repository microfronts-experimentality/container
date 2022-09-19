import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@microfronts/mf-header",
  app: () => System.import("@microfronts/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
