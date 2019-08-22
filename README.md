# ms-teams-dev-mode

If you want to muck around with your Microsoft Teams client using things that are **not meant for production users**, this tool is for you. It sets a flag in the Teams client so that the client runs in dev mode. This unlocks a "Development" dropdown in the toolbar giving you access to a whole bunch of dangerous stuff.

![](docs/toolbar.png)

## Enable dev mode (mac os only)

`sudo npx ms-teams-dev-mode enable`

## Disable dev mode (mac os only)

`sudo npx ms-teams-dev-mode disable`

## Disclaimer

Use at your own risk. This tool and development mode itself could break things that cannot be fixed by reinstalling Microsoft Teams.

## License

MIT
