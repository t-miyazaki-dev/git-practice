image: node:22
Node.jsバージョン22がインストールされている。

container_name: node_app
コンテナの名付け

working_dir: /usr/src/app
作業場所

volumes:
      - .:/usr/src/app
現在のフォルダ（.）とコンテナの作業場所（/usr/src/app）を同期させる。

ports: - "8081:3000"
PCの8081番ポートへのアクセスを、コンテナ内の3000番ポートへ転送

command: node server.js
コンテナを起動した時にnode server.jsを実行する。