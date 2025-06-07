# Engineering Manager's Manifesto

Rather than duplicate any of the explanations in the manifesto itself
here, I'll just link to the
[site here](https://tommed.github.io/engineering-manager-manifesto/).

## Developer's Guide

First, make sure you have Ruby and Gem installed. Then run `make setup`
to install the prerequisites. You can develop locally using `make serve`
which hot-reloads everything as your work.

Before committing any changes, you **must** run `make lint`
and `make build` to ensure you haven't broken anything.

## To Dos

- [x] Implement main branch protections and status checks
- [x] Check there's no _site checked in to your PR (.gitignore)
