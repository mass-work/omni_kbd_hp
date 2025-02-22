import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    // GitHub Pagesで公開する場合はbaseを指定（例: https://<ユーザー名>.github.io/omni-kbd/）
    base: '/omni-kbd-hp/',
    plugins: [react()],
    server: {
        open: true, // サーバー起動時にブラウザを開きたい場合
    },
});
