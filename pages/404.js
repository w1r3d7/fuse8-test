import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <Link href="/">HomePage</Link>
    </div>
  )
}