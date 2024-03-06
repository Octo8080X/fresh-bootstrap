# fresh-bootstrap

Bootstrap for Deno Fresh.

## Usage

### Simple

```ts
// fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import { bootstrapPlugin } from "https://deno.land/x/fresh_bootstrap/mod.ts";

export default defineConfig({
  plugins: [bootstrapPlugin()],
});
```

### Custom

```ts
// fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import { bootstrapPlugin } from "https://deno.land/x/fresh_bootstrap/mod.ts";

const freshBootstrapOptions: BootstrapOptions = {
  tooltip: true,
  popover: true,
  alert: true,
  collapse: true,
  toast: true,
  toastOptions: {
    animation: true,
    autohide: true,
    delay: 5000,
  },
};

export default defineConfig({
  plugins: [bootstrapPlugin(freshBootstrapOptions)],
});
```
