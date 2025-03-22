# Next.js Mikro Frontend Projesi

Bu proje, Next.js ile geliştirilen mikro frontend mimarisine sahip üç bağımsız uygulamadan oluşmaktadır.

## Kurulum

`git clone <repo-url>
cd <host-app/products-remote/basket-remote>
npm install  # veya yarn install`

## Çalıştırma

`cd host-app && npm run dev`  # veya `yarn dev`
`cd products-remote && npm run dev`  # veya `yarn dev`
`cd basket-remote && npm run dev`  # veya `yarn dev`

Her uygulama varsayılan olarak şu portlarda çalışacaktır:

Host-App → http://localhost:3000

Products-Remote → http://localhost:3001

Basket-Remote → http://localhost:3002

## Build ve Dağıtım

`npm run build`  # veya `yarn build`
`npm run start`  # veya `yarn start`

## Çevresel Değişkenler

host-app/.env dosyasında aşağıdaki değişkenler tanımlanmalıdır:

`REACT_APP_PRODUCTS_URL`
`REACT_APP_BASKET_URL`
