### Install pa11y

**Required: NodeJS 17+**

```
npm install -g pa11y-ci
npm install -g pa11y-ci-reporter-html
```

> Install local versiona if permissions issues when trying this on build environment(s)

### Run a test

`pa11y-ci --config .pa11yconfig.json --sitemap https://pa11y.org/sitemap.xml`