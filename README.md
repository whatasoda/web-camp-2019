# Gulp で圧倒的進捗 💪 webpack にこんにちは 🤝

## 目次
- 伝えたいこと(学習目標)
- Gulp ってなに？
- Gulp を使うとできること
  - HTMLを便利に
  - CSSを便利に
  - モチベーション
- Gulpを使えるようにするには
- Gulp を使ってみる (準備)
- Gulp を使ってみる (`gulpfile.js` を書く)
  - `gulpfile.js` を書く上で必要なJavaScriptの知識
  - `gulpfile.js`
- Gulp を使ってみる (実行)
- 他のプラグインの紹介
- JavaScript を忘れるな
- webpack ってなに？
- モジュールバンドラってなに？
- `webpack.config.js`
- JavaScript の便利ツール
- Gulp との違いは？
- 使い分ける？
- まとめ
- 時間があったらやること
  - Node.js の環境構築会
    - Windows 勢に WSL を入れさせる…

## 伝えたいこと(学習目標)
上から順に優先度高

- Gulp と他のツールを使って何が出来るのかを知る
- Gulp と Webpack の違いをなんとなく理解する
- Gulp を使えるようになる

## Gulp ってなに？
- Node.js上で動くタスクランナー
- `gulpfile.js` という設定ファイルが存在する
- 主要な使い道はソースコードに様々な変形を加えて別ファイルとして出力すること

## Gulp を使うとできること
- HTMLやCSSを便利で書きやすい記法で書くことができるようになる。
- 他にも使おうと思えば色々と使えるが、メジャーな使われ方はこれ。
- Gulp は便利なツールを **楽に使えるようにしてくれる** ツール
  - Gulp 自体が色々変形してくれるわけではない。
- 便利なツール
  - 独自記法をブラウザが解釈出来る形に変形する (pug, sass)
  - ブラウザの古いバージョンにも対応するコードに変形してくれる (auto-prefixer, postcss)

(エディタでコードを見せる。以下抜粋。コンテンツはOGPの情報を使っているので著作権周りは問題ないはず！)
### HTMLを便利に
.htmlファイル
```html
  <li class="discography__item">
    <a class="discography__anchor" href="https://bang-dream.com/discographies/1245">
      <div class="discography__thumbnail">
        <img
          class="discography__image"
          src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/5280a8d5-2ece-4211-9fdc-b05ea14d4d65.png"
        />
      </div>
      <div class="discography__label">
        <span class="discography__text--title">
          Roselia 2017-2018 LIVE BEST -Soweit- | BanG Dream!（バンドリ！）公式サイト
        </span>
        <br />
        <span class="discography__text--description">Roselia 2017-2018 LIVE BEST -Soweit-のご案内。</span>
        <br />
        <span class="discography__text--site-name">BanG Dream!（バンドリ！）公式サイト</span>
      </div>
    </a>
  </li>
  <li class="discography__item">
    <a class="discography__anchor" href="https://bang-dream.com/discographies/1200">
      <div class="discography__thumbnail">
        <img
          class="discography__image"
          src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/fc7d7408-de92-478f-8b23-dd37bbf30d49.jpg"
        />
      </div>
      <div class="discography__label">
        <span class="discography__text--title">
          「BanG Dream! FILM LIVE」劇中歌コレクション | BanG Dream!（バンドリ！）公式サイト
        </span>
        <br />
        <span class="discography__text--description">
          「BanG Dream! FILM LIVE」劇中歌コレクションのご案内。
        </span>
        <br />
        <span class="discography__text--site-name">BanG Dream!（バンドリ！）公式サイト</span>
      </div>
    </a>
  </li>
  <li class="discography__item">
    <a class="discography__anchor" href="https://bang-dream.com/discographies/1142">
      <div class="discography__thumbnail">
        <img
          class="discography__image"
          src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/74ce6f2f-e3b1-4398-8f24-b7326d8d2e7c.jpg"
        />
      </div>
      <div class="discography__label">
        <span class="discography__text--title">「NO GIRL NO CRY」 | BanG Dream!（バンドリ！）公式サイト</span>
        <br />
        <span class="discography__text--description">「NO GIRL NO CRY」のご案内。</span>
        <br />
        <span class="discography__text--site-name">BanG Dream!（バンドリ！）公式サイト</span>
      </div>
    </a>
  </li>
  <li class="discography__item">
    <a class="discography__anchor" href="https://bang-dream.com/discographies/966">
      <div class="discography__thumbnail">
        <img
          class="discography__image"
          src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/fcb53a34-f39b-4924-9678-ee23b04f4b61.jpg"
        />
      </div>
      <div class="discography__label">
        <span class="discography__text--title">
          5th Single「ON YOUR MARK」 | BanG Dream!（バンドリ！）公式サイト
        </span>
        <br />
        <span class="discography__text--description">5th Single「ON YOUR MARK」のご案内。</span>
        <br />
        <span class="discography__text--site-name">BanG Dream!（バンドリ！）公式サイト</span>
      </div>
    </a>
  </li>
  <li class="discography__item">
    <a class="discography__anchor" href="https://bang-dream.com/discographies/965">
      <div class="discography__thumbnail">
        <img
          class="discography__image"
          src="https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/6b00aa2f-7e16-4858-86d7-d20ecb298901.jpg"
        />
      </div>
      <div class="discography__label">
        <span class="discography__text--title">
          5th Single「きゅ～まい＊flower」 | BanG Dream!（バンドリ！）公式サイト
        </span>
        <br />
        <span class="discography__text--description">5th Single「きゅ～まい＊flower」のご案内。</span>
        <br />
        <span class="discography__text--site-name">BanG Dream!（バンドリ！）公式サイト</span>
      </div>
    </a>
  </li>
```

.pugファイル(PUG)
```pug
-
  discographies = [
    {
      "title": "Roselia 2017-2018 LIVE BEST -Soweit- | BanG Dream!（バンドリ！）公式サイト",
      "type": "article",
      "url": "https://bang-dream.com/discographies/1245",
      "image": "https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/5280a8d5-2ece-4211-9fdc-b05ea14d4d65.png",
      "site_name": "BanG Dream!（バンドリ！）公式サイト",
      "description": "Roselia 2017-2018 LIVE BEST -Soweit-のご案内。"
    },
    {
      "title": "「BanG Dream! FILM LIVE」劇中歌コレクション | BanG Dream!（バンドリ！）公式サイト",
      "type": "article",
      "url": "https://bang-dream.com/discographies/1200",
      "image": "https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/fc7d7408-de92-478f-8b23-dd37bbf30d49.jpg",
      "site_name": "BanG Dream!（バンドリ！）公式サイト",
      "description": "「BanG Dream! FILM LIVE」劇中歌コレクションのご案内。"
    },
    {
      "title": "「NO GIRL NO CRY」 | BanG Dream!（バンドリ！）公式サイト",
      "type": "article",
      "url": "https://bang-dream.com/discographies/1142",
      "image": "https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/74ce6f2f-e3b1-4398-8f24-b7326d8d2e7c.jpg",
      "site_name": "BanG Dream!（バンドリ！）公式サイト",
      "description": "「NO GIRL NO CRY」のご案内。"
    },
    {
      "title": "5th Single「ON YOUR MARK」 | BanG Dream!（バンドリ！）公式サイト",
      "type": "article",
      "url": "https://bang-dream.com/discographies/966",
      "image": "https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/fcb53a34-f39b-4924-9678-ee23b04f4b61.jpg",
      "site_name": "BanG Dream!（バンドリ！）公式サイト",
      "description": "5th Single「ON YOUR MARK」のご案内。"
    },
    {
      "title": "5th Single「きゅ～まい＊flower」 | BanG Dream!（バンドリ！）公式サイト",
      "type": "article",
      "url": "https://bang-dream.com/discographies/965",
      "image": "https://s3-ap-northeast-1.amazonaws.com/bang-dream-portal/6b00aa2f-7e16-4858-86d7-d20ecb298901.jpg",
      "site_name": "BanG Dream!（バンドリ！）公式サイト",
      "description": "5th Single「きゅ～まい＊flower」のご案内。"
    },
  ];
-


each item in discographies
  li.discography__item
    a.discography__anchor(href=item.url)
      .discography__thumbnail
        img.discography__image(src=item.image)
      .discography__label
        span.discography__text--title #{item.title}
        br
        span.discography__text--description #{item.description}
        br
        span.discography__text--site-name #{item.site_name}
```

### CSSを便利に
.cssファイル
```css
.discography__anchor {
  display: block;
  height: 100%;
}
.discography__anchor:hover {
  opacity: 0.6;
}

.discography__text--title {
  font-size: 24px;
  font-weight: 700;
}
.discography__text--description {
  font-size: 20px;
  color: #222;
}
.discography__text--site-name {
  font-size: 16px;
  color: #666;
}
```
.scssファイル(SASS)
```scss
.discography {
  &__anchor {
    display: block;
    height: 100%;
    &:hover {
      opacity: 0.6;
    }
  }

  &__text {
    &--title {
      font-size: 24px;
      font-weight: 700;
    }
    &--description {
      font-size: 20px;
      color: #222;
    }
    &--site-name {
      font-size: 16px;
      color: #666;
    }
  }
}
```
### モチベーション
- 共通部分のコードを何度も書きたくない。（非共通部だけ書きたい）
- 開発時はファイルを分けてコードを整理したい。

## Gulpを使えるようにするには
- Node.js
  - https://ja.wikipedia.org/wiki/Node.js
    > Node.js は、イベント化された入出力を扱うUnix系プラットフォーム上のサーバーサイドJavaScript環境である。Webサーバなどのスケーラブルなネットワークプログラムの記述を意図している。
  - コマンドライン (黒い画面) 上で JavaScript で書かれたコードを実行出来るソフトウェア
  - Gulp は Node.js 上で動くことを想定して作られている。
  - 「Unix系プラットフォーム上」とある通り、Linux と MacOS は導入が楽
  - Windows は WSL(Windows Subsystem for Linux) を使うことを個人的に強く推奨します。
- npm (Node Package Manager)
  - 他の人が書いた便利な機能をもつプログラム(パッケージ)をインストールするためにつかう。
  - インストールしたからにはもちろん使える。
  - Gulp 本体や Gulp のプラグインをインストールするために使う。
- `package.json`
  - どのパッケージのどのバージョンを使うかを指定するファイル
  - 大体はコマンドを打てば勝手に追加されていくので最初のうちは中身をいじることはなさそう。
  - 最初に `npm init` というコマンドで作る必要がある。
- `gulpfile.js`
  - Gulpの設定ファイル
  - 拡張子にある通り JavaScript をつかって書く。
  - といっても大体書き方は決まっているので JavaScript を書くというより `gulpfile` を書くという感覚のほうが正しい。

## Gulp を使ってみる (準備)
まずは下準備。プロジェクトディレクトリを作ってパッケージをインストールしていく。
```sh
mkdir gulp-sample
npm init -y
npm i -D gulp gulp-pug gulp-sass node-sass
```
- `npm init -y`
  - `-y` 無しだと各項目について質問に答えながら `package.json` を作っていく
  - 今の所そこまで厳密にやる必要は無いので `-y` で全部 yes にする。
  -
    ```json
    {
      "name": "gulp-sample",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```
- `npm i -D gulp gulp-pug gulp-sass node-sass`
  - 4つのパッケージを**開発環境用にインストールする**というコマンド
  - `npm install --save-dev gulp gulp-pug gulp-sass node-sass` と一緒
    - npm では `i` を `install` へのショートカットとして使える
    - `-D` は `--save-dev` と一緒
      - `--` で始まるものは1つのオプションを長い名前で指定する。
      - `-` で始まるものはアルファベット1文字で1つのオプションを指定していて、複数同時に書くことが出来る。(ex. `ls -la`)
  - **基本的に `-D` 有りでやる**
    - `-D` 無しでも動作はする。
    - `-D` をつけて困る場面はわかりやすい。つけずに困る場面はわかりにくくて地味に痛い。
    - なんだかんだ `-D` 有りでインストールする場面が多い。
    - 詳しく知りたい人は後で聞きに来て。
  -
    ```json
    {
      "name": "gulp-sample",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "gulp": "^4.0.2",
        "gulp-pug": "^4.0.1",
        "gulp-sass": "^4.0.2",
        "node-sass": "^4.12.0"
      }
    }
    ```
- 各パッケージについて
  - `gulp`
    - Gulp の本体
    - `package.json` 内でバージョンが `"4.0.0"` 以上であることを確認 (3以前は仕様が異なるため)
  - `gulp-pug`
    - Gulp で pug を使うためのプラグイン
    - pug は独自記法で HTML を書けて、データの注入やテンプレート化、for文などを使えるようになる。
  - `gulp-sass`
    - Gulp で sass を使うためのプラグイン
    - sass は独自記法で CSS を書けて、ファイル分割や mixin (テンプレート化に近い)を使えるようになる。
  - `node-sass`
    - `gulp-sass` を使うために必要なライブラリ
    - インストール時にビルドしたりするので、Gulp に限らず sass が絡むと大体別で入れる必要がある。

- ディレクトリ構造
  ```
  .
  ├── src
  │   ├── pug
  │   │   ├── _template.pug
  │   │   └── index.pug
  │   └── scss
  │       ├── blocks
  │       │   ├── discography.scss
  │       │   └── header.scss
  │       └── style.scss
  ├── gulpfile.js
  ├── package-lock.json
  └── package.json
  ```

## Gulp を使ってみる (`gulpfile.js` を書く)
書いていく〜

### `gulpfile.js` を書く上で必要なJavaScriptの知識
- アロー関数(Arrow functions)
  - JavaScript の関数には主な書き方が2つある。
  - `this` が絡んだりすると違いが出てくるが、**今回話す内容においては**書き方が違うだけ。
  - 個人的には `function` を使う書き方よりもアロー関数を使う書き方のほうが短く、直感的に書けるのでアロー関数をメインで使うことをおすすめします。
  - 
    ```js
    function hoge (a, b) {
      return a + b;
    }
    
    const hoge = (a, b) => {
      return a + b;
    };
    
    
    [0, 1, 2, 3].reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    
    [0, 1, 2, 3].reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    ```
- `requrie`
  - 他のファイルに書かれたコードを読み込む際に使う関数。Node.js 内でつかわれる。
  - インストールしたサードパーティ製のパッケージも読み込める。
  - 
    ```js
    const gulp = require('gulp');
    const myModule = require('./myModule');
    ```

- メソッドチェーン
  - JavaScript を書いているとよく見る。
  - 詳細説明すると結構時間取るのでサンプルだけ。
  - 
    ```js
    const fuga = new Array(100)
      .fill(0)
      .map((_, i) => i)
      .filter((i) => !(i % 2))
      .filter((i) => !(i % 3));
    ```

### `gulpfile.js`
```js
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('pug', () => {
  return gulp.src('src/pug/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', (done) => {
  gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
  gulp.watch('src/scss/**/*.scss', gulp.task('sass'));
  done();
});

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'sass'),
  'watch',
));
```
`gulp.task` でいくつかのタスクを設定している。以下、順に説明。
- 各パッケージを require する。
  ```js
  const gulp = require('gulp');
  const pug = require('gulp-pug');
  const sass = require('gulp-sass');
  ```
  - `node-sass` は `gulp-sass` 内で使われているのでここで require する必要は無い。
- pug に関するタスクを設定している部分 (sass の方はほぼ一緒なので省略)
  ```js
  gulp.task('pug', () => {
    return gulp.src('src/pug/index.pug') // `'src/pug/index.pug'` を
      .pipe(pug()) // PUG から HTML に変形して
      .pipe(gulp.dest('dist')); // `'dist'` ディレクトリに出力する。
  });
  ```
  - `'src/pug/index.pug'` を PUG から HTML に変形して `'dist'` ディレクトリに出力する。
  - `gulp.src` で始まって `gulp.dest` で終わる。途中は `.pipe` のメソッドチェーンでつなぐ。
  - この場合 `return` は必須。
  - `dest` は destination (= 行き先)
  - `'dist'`は distribution (= 配布物)
  - 今回は設定していないが、`pug()` の `()` の中にオプションを入れたりできる。
- `watch` (ファイル監視)を**設定するタスクを設定している部分**
  ```js
  gulp.task('watch', (done) => {
    gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
    gulp.watch('src/scss/**/*.scss', gulp.task('sass'));
    done();
  });
  ```
  - `gulp.watch` に **Glob 記法**という書き方で監視したい対象のファイルと、ファイルが変更されたときに実行したいタスクを渡すことで watch の設定ができる。
  - `gulp.task('TASK_NAME', () => {...})` のように、書くとタスクを設定するが、`gulp.task('TASK_NAME')`と書くと設定したタスクを参照することが出来る。
  - watch を**設定するタスクの終了**を Gulp に伝えるために関数の第一引数に来る `done` という関数を実行している。
    - 他のタスクでは `return` で Gulp が生成したオブジェクトを返しているので勝手にタスクの終了を判断してくれている。
- デフォルトタスクの設定
  ```js
  gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    'watch',
  ));
  ```
  - タスク名を `'default'` にすると `gulp` コマンド(後述)を実行した際にこのタスクを実行してくれる。
  - `gulp.series` は指定されたタスクを順番に実行するという意味。
  - `gulp.parallel` は指定されたタスクを並行して実行するという意味。
  - この場合、「最初に `'pug'` と `'sass'` のタスクを並行して実行。両方終わったら `'watch'` のタスクを実行する。」という指定をしている。

## Gulp を使ってみる (実行)
```sh
npx gulp
```
```
[22:52:27] Using gulpfile /path/to/gulpfile.js
[22:52:27] Starting 'default'...
[22:52:27] Starting 'pug'...
[22:52:27] Starting 'sass'...
[22:52:27] Finished 'pug' after 89 ms
[22:52:27] Finished 'sass' after 91 ms
[22:52:27] Starting 'watch'...
[22:52:27] Finished 'watch' after 13 ms
[22:52:27] Finished 'default' after 107 ms
```
```
.
├── dist
│   ├── index.html
│   └── style.css
├── src
│   ├── pug
│   │   ├── _template.pug
│   │   └── index.pug
│   └── scss
│       ├── blocks
│       │   ├── discography.scss
│       │   └── header.scss
│       └── style.scss
├── gulpfile.js
├── package-lock.json
└── package.json
```

## 他のプラグインの紹介
調べれば他にもたくさん出てくるので興味がある人は調べてみて！
- HTML
  - ejs
    
    HTML を少しだけJSで制御出来るようになった感じ。PHPをやったことがある人はPHPを思い浮かべるとわかりやすそう。
- CSS
  - postcss
    
    css を後方ブラウザでも読めるようにしたり、新機能の一部を使えるようにしたりできる。
  - less, stylus
    
    両方使ったことがないので存在だけおしらせ。詳しく知りたい人は自分で調べてみてください！

## JavaScript を忘れるな
HTML, CSS で便利な書き方が出来るなら JavaScript でも便利に書けてもいいじゃない！

**webpack** を使えば色々出来るよ

## webpack ってなに？
https://en.wikipedia.org/wiki/Webpack
> Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included.

- JavaScript のモジュールバンドラ！
- 対応するプラグインを入れればHTML, CSS, 画像などの素材も扱える！

## モジュールバンドラってなに？
- `require`
  - Node.js でつかえる便利関数
  - ファイル分割が出来る。
  - 第三者が書いた便利コードを自分のプロジェクトでも使える。
- `require` はブラウザに無い。
  - 頑張ればそれっぽいことが出来るけど、セキュリティ的に良くないことがいっぱい(`eval` 怖い)
- 先に `require` の部分を解決した状態でブラウザに読み込ませればいいじゃん！
  - これがモジュールバンドラの主な役割
  - JavaScript のコードはもちろん、HTML, CSS, 画像までもが `require` を通過する。
  - `require` を通過するときに色々と変形させよう！

## `webpack.config.js`
卒制のプロジェクトで使っている `webpack.config.js` です。
ざっくりと口頭で説明します。
```js
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const ip = require('ip');
const path = require('path');
const webpack = require('webpack');

const distRoot = path.resolve(__dirname, 'dist');
const srcRoot = path.resolve(__dirname, 'src');

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = () => ({
  entry: [path.resolve(srcRoot, 'index.ts')],
  output: {
    path: distRoot,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: distRoot,
    compress: false,
    host: ip.address() || 'localhost',
    port: 8080,
    https: true,
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcRoot, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
    ],
  },
});
```

## JavaScript の便利ツール
- TypeScript / FlowType
  
  どちらも静的型付けを JavaScript にもたらす。小さめのバグを防いでくれたりする。よく「堅牢なコードを書けるようになる」という表現をする。
  
- Babel
  
  本当にいろいろな事ができる。ブラウザ未実装の新しい記法をブラウザでも使える形に変形してくれたりする。ここには書ききれないぐらいにいろいろなことが出来る。

## Gulp との違いは？
Gulp で出来ることが webpack では出来ないというシチュエーションは少ない。
- ファイルの処理方法
  - Gulp はファイルと処理を1:1で指定する。
    - ファイル同士の連携が難しい。
  - webpack は起点になるファイルと処理のルールは別に指定。
    - 処理後のファイルの内容を他のファイルで使ったりできる。
    - (ex. 画像を require すると、HTML 上で使えるパスを得られる。同時に最適化したファイルも出力する。)
- JavaScript の取り扱い能力
  - Gulp はそこまで上手じゃない。
    - Gulp 上で webpack を使うプラグインがあるぐらい。
  - webpack は大得意。いろいろな事ができる。
    - そもそも JavaScript を扱うために作られているので当然といえば当然。
- 設定ファイル
  - Gulp は webpack に比べるとわかりやすいし書きやすい。
    - やることが単純で独立しているので、コピペでなんとかなる。
  - webpack は絶対的に難しい。
    - 理解を深めないと自分で書くのが難しい。
    - コピペだと本領発揮まではいけない。
    - できることが多いゆえの苦しみ。

Gulp のほうが気軽に始められる。webpack は最初本当に訳がわからなかった。

## 使い分ける？
webpack を使いこなせるなら Gulp 無しでもやっていける。

webpack 使う必要が無いなら無理して使わなくても大丈夫。

でも使えたほうが世界が広がるヨ

### Gulp
- HTML, CSS, 少しの JavaScript だけで完結するプロジェクト
  - 頑張れば JavaScript 少し多めでもなんとかなるけど、無理してる感は出る

### webpack
- JavaScript をたくさん書く必要があるプロジェクト
- TypeScript とかを使う場合
  - 僕は常に TypeScript を使っているのでどのプロジェクトでもだいたい webpack をつかっています。
- React とかを使う場合
  - 僕は常に React を使っているのでどのプロジェクトでもだいたい webpack をつかっています。
- 細かいパフォーマンスのことを考えたいとき
  - Gulp でもある程度まではできそうだけど webpack のほうが安定していて強そうな印象がある。

## まとめ
自分でコードを書いて Web ページを作りたいと思っているなら、PUG や SASS を使えたほうが効率が良い。楽にそれらを使う手段が Gulp。最初はコピペでいいし、何ならずっとコピペでもやっていける。**とりあえずやってみてほしい！** (今回のサンプルは説明用にめちゃくちゃスッキリ書いてるので、もっと良いやつがどこかに転がってるはず)

webpack は JavaScript を本気でやっていきたいなら覚えておいて損なし。どこかに属して開発する場合は人が書いた `webpack.config.js` を使って開発することが多いと思うけど、自分で書けたら楽しいので**とりあえずやってみてほしい！**

**とりあえずやってみてほしい！**
