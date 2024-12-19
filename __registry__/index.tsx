/* eslint-disable */
//
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  "use-boolean": {
    name: "use-boolean",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/hooks/use-boolean.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/hooks/use-boolean.tsx")),
    source: "",
  },
  "use-toggle": {
    name: "use-toggle",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/hooks/use-toggle.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/hooks/use-toggle.tsx")),
    source: "",
  },
  "use-copy-to-clipboard": {
    name: "use-copy-to-clipboard",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/hooks/use-copy-to-clipboard.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(
      () => import("@/registry/hooks/use-copy-to-clipboard.tsx")
    ),
    source: "",
  },
  "use-unmount": {
    name: "use-unmount",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/hooks/use-unmount.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/hooks/use-unmount.tsx")),
    source: "",
  },
  "use-debounce-callback": {
    name: "use-debounce-callback",
    type: "registry:hook",
    registryDependencies: ["http://localhost:3000/r/use-unmount"],
    files: [
      {
        path: "registry/hooks/use-debounce-callback.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(
      () => import("@/registry/hooks/use-debounce-callback.tsx")
    ),
    source: "",
  },
  "use-isomorphic-layout-effect": {
    name: "use-isomorphic-layout-effect",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/hooks/use-isomorphic-layout-effect.tsx",
        type: "registry:hook",
        target: "",
      },
    ],
    component: React.lazy(
      () => import("@/registry/hooks/use-isomorphic-layout-effect.tsx")
    ),
    source: "",
  },
}
