# 7.6 Cypress tests

Учебный проект с E2E-тестами на Cypress для приложения Books App.

## Что внутри

- `booksApp/` - тестируемое React-приложение и API-сервер.
- `cypress/e2e/integration/` - E2E-тесты.
- `cypress.config.js` - конфигурация Cypress для laptop viewport `1366x768`.
- `cypress.mobile.config.js` - конфигурация Cypress для mobile viewport `390x844`.

## Установка зависимостей

Установить зависимости тестового проекта:

```powershell
npm install
```

Установить зависимости приложения:

```powershell
cd booksApp
npm install
```

## Запуск приложения

Для работы тестов нужны два запущенных процесса: API-сервер и фронтенд.

Терминал 1 - API-сервер:

```powershell
cd W:\Study\JS\7.6.-Cypress-1\booksApp
npm run server
```

API запускается на:

```text
http://localhost:7071
```

Терминал 2 - фронтенд:

```powershell
cd W:\Study\JS\7.6.-Cypress-1\booksApp
npm start
```

Фронтенд запускается на:

```text
http://localhost:3000
```

## Запуск тестов


Запустить все headless-конфигурации:

```powershell
npm run cy:all
```

Запустить laptop-конфигурацию в headless-режиме:

```powershell
npm run cy:laptop:headless
```

Запустить laptop-конфигурацию в headed-режиме:

```powershell
npm run cy:laptop:headed
```

Запустить mobile-конфигурацию в headless-режиме:

```powershell
npm run cy:mobile:headless
```

Запустить mobile-конфигурацию в headed-режиме:

```powershell
npm run cy:mobile:headed
```

## Конфигурации

Laptop:

```text
config: cypress.config.js
viewport: 1366x768
browser: Edge
```

Mobile:

```text
config: cypress.mobile.config.js
viewport: 390x844
browser: Chrome
```

## Тестовые данные

Для книг используются уникальные тестовые данные через `@faker-js/faker`.

Генератор находится в:

```text
cypress/support/generateBook.js
```
