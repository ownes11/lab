export const Home = () => {
  return (
    <section>
      <h2>Welcome</h2>
      <p>
        This mini app demonstrates <strong>code splitting</strong> with React{' '}
        <code>lazy()</code> and <code>Suspense</code>. The Dashboard, Settings, and Profile
        pages are lazy-loaded when you navigate to them.
      </p>
      <p>Use the navigation links above to switch between pages.</p>
    </section>
  )
}

