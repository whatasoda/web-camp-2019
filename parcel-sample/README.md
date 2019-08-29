# parcel sample

## parcel をインストール

`npm install -g parcel-bundler`

## 使い方

### 初期化

`npm init -y`

自分で `npm install {node-sass,pug,...}` 必要がない

### 開発用サーバーを起動する

`parcel pug/index.pug`

同時に依頼をインストールしてくれる

### デプロイ用にビルドする

`parcel build pug/index.pug`

## gulp との違い

1.ゼロコンフィグ 、つまり `gulpfile` が不要

2.処理前のリソースファイルとの相対パスを直接書く

> index.pug

```pug
block meta
  link(rel="stylesheet", href="../scss/style.scss")
```

## 使ってみたい！

公式: [https://parceljs.org](https://parceljs.org)
