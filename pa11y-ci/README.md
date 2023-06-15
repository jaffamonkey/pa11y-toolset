### Install pa11y

**Required: NodeJS**

```
npm install
```

> Install local versiona if permissions issues when trying this on build environment(s)

### Run a test

`node_modules/.bin/pa11y-ci --config .pa11yconfig.json --reporter=pa11y-reporter-html --sitemap https://pa11y.org/sitemap.xml`