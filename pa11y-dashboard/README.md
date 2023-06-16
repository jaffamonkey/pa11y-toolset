# Pa11y Dashboard

## Requirements

**Required: NodeJS 17+**

Pa11y Dashboard uses a [MongoDB][mongo] database to store the results of the tests. The database doesn't have to be in the same server or computer where Pa11y Dashboard is running from.

Pa11y Dashboard uses [puppeteer](https://www.npmjs.com/package/puppeteer) to create a headless instance of the Chromium browser in order to run the tests. On certain environments this may require additional dependencies to be installed. For example, in Debian/Ubuntu systems you may need to install the `libnss3` and `libgconf-2-4` libraries in order to be able to run tests on Pa11y Dashboard. Please refer to the documentation from your provider for details on how to do this.

## Setting up Pa11y Dashboard

In order to run Pa11y Dashboard, we recommend cloning this repository locally:

```sh
git clone https://github.com/jaffamonkey/pa11y-toolset
cd pa11y-toolset/pa11y-dashboard
```

Then installing the dependencies:

```sh
npm install
```

### Installing MongoDB

Instructions for installing and running MongoDB are outside the scope of this document. When in doubt, please refer to the [MongoDB installation instructions](https://docs.mongodb.com/manual/installation/) for details of how to install and run MongoDB on your specific operating system. An example of the installation and configuration process for macOS follows.

Pa11y Dashboard currently uses version 3 of the Node.js MongoDB driver, which means that [only MongoDB servers of versions 4.4 or older are supported](https://docs.mongodb.com/drivers/node/current/compatibility/#mongodb-compatibility). Please ensure that your MongoDB server fills the requirements before trying to run Pa11y Dashboard.

#### Example MongoDB installation for macOS

On recent versions of macOS (10.13 or later), you can use [Homebrew](https://brew.sh/) to install MongoDB Community Edition. More recent versions of MongoDB are untested and unsupported.

Tap the MongoDB Homebrew Tap:

```sh
brew tap mongodb/brew
```

Install a supported Community version of MongoDB:

```sh
brew install mongodb-community@4.4
```

Start the MongoDB server:

```sh
brew services start mongodb/brew/mongodb-community@4.4
```

Check that the service has started properly:

```sh
$ brew services list
Name              Status  User       Plist
mongodb-community started pa11y      /Users/pa11y/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

### Configuring Pa11y Dashboard

The last step before being able to run Pa11y Dashboard is to define a configuration for it. This can be done in two ways:

#### Option 1: Using environment variables

Each configuration can be set with an environment variable rather than a config file. For example to run the application on port `8080` you can use the following:

```sh
PORT=8080 node index.js
```

The [available configurations](#configurations) are documented in the next section.

#### Option 2: Using config files

You can store the configuration for Pa11y Dashboard on a JSON file. You can use a different configuration file for each environment you're planning to run Pa11y Dashboard on. You can choose a specific environment to run the application from by setting the `NODE_ENV` environment variable:

```sh
NODE_ENV=development node index.js
```

Three example files are provided in this repository, you can copy and customise them to your liking:

```sh
cp config/development.sample.json config/development.json
cp config/production.sample.json config/production.json
cp config/test.sample.json config/test.json
```

The [available configurations](#configurations) are documented in the next section.

If you run into problems, check the [troubleshooting guide][#troubleshooting].

## Configurations

The boot configurations for Pa11y Dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### port

*(number)* The port to run the application on. Set via a config file or the `PORT` environment variable.

### noindex

*(boolean)* If set to `true` (default), the dashboard will not be indexed by search engines. Set to `false` to allow indexing. Set via a config file or the `NOINDEX` environment variable.

### readonly

*(boolean)* If set to `true`, users will not be able to add, delete or run URLs (defaults to `false`). Set via a config file or the `READONLY` environment variable.

### siteMessage

*(string)* A message to display prominently on the site home page. Defaults to `null`.


## Troubleshooting

### Common issues

* `500` errors or `Could not connect to pa11y-webservice` messages are often related to MongoDB. Ensure that you have the [appropriate version of MongoDB][#installing-mongodb] installed, and that it's running - it doesn't always start automatically.
* Error messages saying that pa11y-webservice isn't running may be due to dependency installation problems. Try deleting your `pa11y-dashboard/node_modules` directory and running `npm install` again.

