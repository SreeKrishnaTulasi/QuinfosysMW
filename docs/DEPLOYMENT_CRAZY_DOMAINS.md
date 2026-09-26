# Crazy Domains FTP deployment

This project is configured for GitHub Actions deployment through FTP.

## Required GitHub secrets

Create these secrets in GitHub repository settings:

```text
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
FTP_SERVER_DIR
```

## Important path fix

Use `FTP_SERVER_DIR` to control where the built `dist/` files are uploaded.

If the FTP account opens directly inside the website root / `public_html`, set:

```text
FTP_SERVER_DIR=/
```

If the FTP account opens one level above the real web root, set:

```text
FTP_SERVER_DIR=/public_html/
```

Do not use `../public_html/` unless Crazy Domains explicitly allows the FTP account to move upward. Most shared-hosting FTP users are jailed and cannot escape the account root.

If the FTP account was created with the wrong root directory, the clean fix is to edit/create the FTP account in Crazy Domains so it points to the correct web root, then set `FTP_SERVER_DIR` accordingly.
