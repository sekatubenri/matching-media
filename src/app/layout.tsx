import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'マッチングアプリナビ | 出会いアプリ比較・おすすめランキング', template: '%s | マッチングアプリナビ' },
  description: 'マッチングアプリを徹底比較。Pairs・with・Omiai・タップルなど人気アプリの料金・評判・特徴を詳しく解説。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-rose-500 text-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">💑 マッチングアプリナビ</a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/compare" className="hover:text-rose-200">アプリ比較</a>
              <a href="/category/serious" className="hover:text-rose-200">真剣交際</a>
              <a href="/category/casual" className="hover:text-rose-200">気軽に出会う</a>
              <a href="/category/beginner" className="hover:text-rose-200">初心者ガイド</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p>© 2025 マッチングアプリナビ | 出会いアプリ比較・おすすめランキング</p>
            <p className="mt-1 text-xs">※本サイトにはアフィリエイト広告が含まれます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
