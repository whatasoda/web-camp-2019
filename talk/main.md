## 話すこと
- 目標
- Gulp ってなに？
- Gulp を使うとできること
- gulpfile を書く上で必要なJavaScriptの知識
- Gulp を使えるようにするには
- gulpfile を書いてみる
- 実行してみる
- 他のプラグインの紹介
- JavaScript を忘れるな
- webpack ってなに？
- モジュールバンドラってなに？


## 話さないこと
- Node.js の環境構築

## 目標
- Gulp と他のツールを使って何が出来るのかを知る
- Gulp と Webpack の違いをなんとなく理解する
- Gulp を使えるようになる

## Gulpってなに？
Node.js上で動くタスクランナー
`gulpfile.js` という設定ファイルが存在する
主要な使い道はソースコードに様々な変形を加えて別ファイルとして出力すること

## Gulpを使うとできること
- HTMLやCSSを便利で書きやすい新しい記法で書くことができるようになる。
- 他にも使おうと思えば色々と使えるが、メジャーな使われ方はこれ。
- Gulp は便利なツールを「楽に使えるようにしてくれる」ツール
  - Gulp 自体が色々変形してくれるわけではない。
- 便利なツール
  - 独自記法をブラウザが解釈出来る形に変形する (pug, sass)
  - ブラウザの古いバージョンにも対応するコードに変形してくれる (auto-prefixer, postcss)
- HTML(エディタでコードを見せる。以下抜粋)
  - .html
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
  - .pug
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
- CSS
  - .css
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
  - .scss
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
- モチベーション
  - 共通部分のコードを何度も書きたくない。（非共通部だけ書きたい）
  - 開発時はファイルを分けてコードを整理したい。

## `gulpfile.js` を書く上で必要なJavaScriptの知識
- アロー関数(Arrow functions)
  - 関数には書き方が主に2つある。
  - `this` が絡んだりすると違いが出てくるが、今回話す内容においては書き方が違うだけ。
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

## Gulpを使えるようにするには
- Node.js
  - https://ja.wikipedia.org/wiki/Node.js
    > Node.js は、イベント化された入出力を扱うUnix系プラットフォーム上のサーバーサイドJavaScript環境である。Webサーバなどのスケーラブルなネットワークプログラムの記述を意図している。
  - コマンドライン (黒い画面) 上で JavaScript で書かれたコードを実行出来るソフトウェア
  - 「Unix系プラットフォーム上」とある通り、Linux と MacOS は導入が楽
  - Windows は WSL(Windows Subsystem for Linux) を使うことを個人的に強く推奨します。
- npm
  - 他の人が書いた便利な機能をもつプログラム(パッケージ)をインストールするためにつかう。
  - インストールしたからにはもちろん使える。
  - Gulp も npm でインストールして使う。
- `package.json`
  - どのパッケージのどのバージョンを使うかを指定するファイル
  - 大体はコマンドを打てば勝手に追加されていくので最初のうちは中身をいじることはなさそう。
  - 最初に `npm init` というコマンドで作る必要がある。
- `gulpfile.js`
  - Gulpの設定ファイル
  - 拡張子にある通り JavaScript をつかって書く。
  - といっても大体書き方は決まっているので JavaScript を書くというより `gulpfile` を書くという感覚のほうが正しい。

## gulpfileを書いてみる
- `npm init -y`
  - `-y` 無しだと質問に答えながら `package.json` を作っていく
  - 今の所そこまで厳密にやる必要は無いので `-y` で全部 yes にする。
- `npm i -D gulp gulp-pug gulp-sass node-sass`
  - `gulp`, `gulp-pug`, `gulp-sass`, `node-sass` の4つを開発環境用のパッケージとしてインストールする というコマンド
  - `npm install --save-dev gulp gulp-pug gulp-sass node-sass` と一緒
  - npm では `i` を `install` へのショートカットとして使える
  - `--` で始まるものは1つのオプションを長い名前で指定する。`-` で始まるものはアルファベット1文字で1つのオプションを指定していて、複数同時に書くことが出来る。(ex. `ls -la`)
  - `-D` 無しでも動作はするが、将来的には `-D` 有りでインストールする場面が殆どで。無しでインストールする場面は何をやっているのか理解した上でやるべきことなので、基本的に `-D` 有りでやると良いと思う。
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
- `gulpfile.js`
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
  - `gulp.task` でいくつかのタスクを設定している。
- 各パッケージを require する。
  ```js
  const gulp = require('gulp');
  const pug = require('gulp-pug');
  const sass = require('gulp-sass');
  ```
  - `node-sass` は `gulp-sass` 内で使われているのでここで require する必要は無い。
- pug に関するタスクを設定している部分
  ```js
  gulp.task('pug', () => {
    return gulp.src('src/pug/index.pug')
      .pipe(pug())
      .pipe(gulp.dest('dist'));
  });
  ```
  - `'src/pug/index.pug'` を HTML に変形して `'dist'` ディレクトリに出力する
  - `gulp.src` で始まって `gulp.dest` で終わる。各処理は `.pipe` でつなぐ。`return` は必須。
  - `dest` は destination (= 行き先)
  - `'dist'`は distribution (= 配布物)
  - 今回は設定していないが、`pug()` の `()` の中にオプションを入れたりできる。
- `watch` (ファイル監視)を設定するタスクを設定している部分
  ```js
  gulp.task('watch', (done) => {
    gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
    gulp.watch('src/scss/**/*.scss', gulp.task('sass'));
    done();
  });
  ```
  - `gulp.watch` に Glob 記法という書き方で監視したい対象のファイルと、ファイルが変更されたときに実行したいタスクを渡すことで watch の設定ができる。
  - `gulp.task('TASK_NAME', () => {...})` のように、書くとタスクを設定するが、`gulp.task('TASK_NAME')`と書くと設定したタスクを参照することが出来る。
  - watch を「設定する」タスクの終了を Gulp に伝えるために第一引数に来る `done` という関数を実行している。他のタスクでは `return` で Gulp が生成したオブジェクトを返しているので勝手にタスクの終了を判断してくれている。
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

## 実行してみる
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

- HTML
  - ejs
    
    HTML を少しだけJSで制御出来るようになった感じ。PHPをやったことがある人はPHPを思い浮かべるとわかりやすそう。
- CSS
  - postcss
    
    css を後方ブラウザでも読めるようにしたり、新機能の一部を使えるようにしたりできる。
  - less, stylus
    
    両方使ったことがないので存在だけ。詳しく知りたい人は自分で調べてみてください！

## JavaScript を忘れるな
HTML, CSS で便利な書き方が出来るなら JavaScript でも便利に書けてもいいじゃない！

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
- `require` はブラウザには無い。
  - 頑張ればそれっぽいことが出来るけど、セキュリティ的に良くないことがいっぱい(`eval` とか使えば)
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
- ファイルの処理方法
  - Gulp はファイルと処理を1:1で指定する。ファイル同士の連携が難しい。
  - webpack は起点になるファイルと処理のルールは別に指定。処理後のファイルの内容を他のファイルで使ったりできる。(ex. 画像を require して最適化して出力、require 元には path だけを返す)
- JavaScript の取り扱い能力
  - Gulp はそこまで上手じゃない。Gulp 上で webpack を使うことも。
  - webpack は大得意。いろいろな事ができる。
- 設定ファイル
  - Gulp はわかりやすい(webpack に比べると)。やることも単純なのでコピペでなんとかなる。
  - webpack は絶対的に難しい。理解を深めないと自分で書くのが難しい。コピペだと本領発揮まではいけない。

## 使い分ける？
- HTML, CSS, 少しの JavaScript だけで完結するプロジェクト
  - Gulp で OK
  - 細かいパフォーマンスのことを考えるなら webpack を使ったほうが良いかも。
- 多めの JavaScript を書く必要があるプロジェクト
  - webpack を使おう。
  - TypeScript とかを使う場合も。
  - react を使う場合も。
  - 僕は常に TypeScript を使っているのでどのプロジェクトでもだいたい webpack をつかっています。
