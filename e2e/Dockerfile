FROM mcr.microsoft.com/playwright

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY ../front/playwright.config.ts /app/playwright.config.ts

COPY ../front/tests/ /app/tests/

CMD npx playwright test