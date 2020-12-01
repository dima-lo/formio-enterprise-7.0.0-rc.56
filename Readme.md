# Form.io Server Enterprise Edition (Node Version)

## Intro
This is an edition of the form.io Enterprise (on premise) server. It is designed to be installed and run from a node environment. For a docker based configuration, see [https://help.form.io/userguide/environments/#environments%20docker](https://help.form.io/userguide/environments/#environments%20docker)

Please be aware that installing and upgrading dependencies is your responsibility. Any issues that result from mismatched dependencies will be your responsibility.

## Requirements
This server has the following requirements:
  - Node.js 12.x or later
  - npm 5.7.1 or later
  - MongoDB 3.6 or later
  - Redis

MongoDB and Redis may be on separate servers. The only thing that is required is the connection strings for each.

## Installation
To install the server first pull in the repo from github. Be sure to set your SSH key in github if you haven't already.

```bash
npm ci --production
```
(npm ci is like npm install but will install from package-lock.json for a more reproducible list of dependencies)

## Environment Variables
To configure the server you will need to set various environment variables. This can be done using the environment or in a ```.env``` file.

For options see [https://help.form.io/userguide/environments/#environments-variables](https://help.form.io/userguide/environments/#environments-variables)

## Running
To run the server simply run:

```bash
node formio
```

## SSL and DNS
The server does not inherently support SSL. To use it with SSL, use a proxy. See [https://help.form.io/userguide/environments/#environents-ssl](https://help.form.io/userguide/environments/#environents-ssl) for more information.

You will need to set up DNS to your server or use it on localhost. See [https://help.form.io/userguide/environments/#environments-dns](https://help.form.io/userguide/environments/#environments-dns) for more information.

## Upgrading
To upgrade, simply do the following if you checked it out with git:

```bash
git pull
npm ci --production
node formio
```
