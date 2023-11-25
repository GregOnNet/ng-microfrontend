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
- [ ] Angular 17 Host integrates Angular 16 Remote
- [ ] Angular 17 Host shares Service with Angular 17 Remote
- [ ] Angular 17 Host shares Service with Angular 16 Remote
