import { FreshContext, Plugin } from "../../deps.ts";
import { BootstrapOptions } from "../type.ts";

export function bootstrapPlugin(options?: BootstrapOptions): Plugin {
  return {
    name: "bootstrap-plugin",
    entrypoints: {
      bootstrap_loader: import.meta.resolve(`./bootstrap_loader.ts`),
    },
    render(ctx: FreshContext) {
      ctx.render();
      return {
        links: [{
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
          integrity:
            "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
          crossOrigin: "anonymous",
        }],
        scripts: [
          {
            entrypoint: "bootstrap_loader",
            state: options,
          },
        ],
      };
    },
  };
}
