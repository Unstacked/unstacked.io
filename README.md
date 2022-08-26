# Unstacked.io

![logo](website/dist/favicon.png)

[UNSTACKED](https://unstacked.io) Website.

The website is built using astro and cdk.

## Architecture

1. Route53 for domains
2. CloudFront for HTTP/S termination
   1. Certificate Manager for SSL
3. S3 for static asset hosting
4. Astro to build static site
