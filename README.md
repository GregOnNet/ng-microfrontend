# NG Micro Frontend

> A playground to learn how to set up an environment wit multiple Angular Applications having different versions being loaded as micro frontend in a host-Application.

## Prerequisites

- [Node 20](https://nodejs.org/dist/v20.10.0/)
- [pnpm](pnpm.io)

## Get started

### Install dependencies of all Angular Applications

```bash
# Windows
pnpm-install-all.cmd

# Linux/Unix
./pnpm-install-all.sh
```

### Start Frond-Ends

#### Host

```bash
cd host
pnpm start # localhost:4200
```

#### Angular 16

```bash
cd ng-remote-16
pnpm start # localhost:4216
```

#### Angular 17

```bash
cd ng-remote-17
pnpm start # localhost:4217
```

## Showcase

- [x] Angular 17 Host integrates Angular 17 Remote
- [x] Angular 17 Host integrates Angular 16 Remote
- [x] Angular 17 Host loads exposed CSS from Angular 17 Remote
- [x] Deep-Linking from Host to Remote works
- [ ] Angular 17 Host shares Service with Angular 17 Remote
- [ ] Angular 17 Host shares Service with Angular 16 Remote

### Angular 17 Host loads exposed CSS from Angular 17 Remote

### Why?

We have a use case where the remote indeed uses the theme of the host, but specifies own styles.
You can think of utility-classes like `text-orange-500` or `animate-pulse` that are not present
in the host.
If you just load the remote the CSS-styles wont be loaded, since the `index.html` of the remote is not loaded.

To solve this problem, we simply run `tailwindcss build` to produce a tree-shaked CSS-file.
This file is copied to the `assets`-folder.
The path to the CSS-file is part of the `remote.ts`-configuration in the `host`-application.
The `host`-Application can now load the "exposed" CSS of the remote.
