// src/app/page.tsx (Server Componentのまま)
import FetchButton from '../components/FetchButton';  // Client Componentをインポート

export default function Home() {
  return (
    <div>
      <h1>Hello, saqla! Welcome to Next.js!</h1>
      <p>This is edited in Cursor!</p>
      <FetchButton />  {/* イベントハンドラーを含む部分をClient Componentに委譲 */}
    </div>
  );
}