This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Setup

1. Install `nvm`

Follow nvm setup instructions [here](https://github.com/nvm-sh/nvm/blob/master/README.md).

2. Install Node.js locally

```
nvm install 16.13.0
nvm use 16.13.0
```

3. Install `yarn`

```
npm install yarn -g
```

4. Install dependencies

Using `--frozen-lockfile` makes sure that the environment is consistent on any machine by installing the exact package versions listed in the [yarn.lock](yarn.lock).

```
yarn install --frozen-lockfile
```

5. Signup for a free [Contentful](https://www.contentful.com/) account and create an organisation and within that create a space.

   We called our organization **Session** and the space **Website**.

   - For the site to build correctly you need to import our Content models and assets into your Contentful space. We have created some example content so you can get comfortable with our Contentful setup.

   - Add your `space ID` and `content management token` inside of [contentful/config.json](contentful/config.json)
   - Run this command inside the root of this project

   ```
     npx contentful space import --config contentful/config.json
   ```

   - For more information about importing/exporting in Contentful see [here](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/).

6. Setup your environment file. See our [.env.example](.env.example) as a guide. Make sure to call the file `.env.local`.

### Developing

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
