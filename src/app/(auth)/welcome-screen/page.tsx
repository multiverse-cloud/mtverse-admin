export default function WelcomeScreenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold text-brand-500">mtverse</span>
          <span className="text-2xl text-gray-400">admin</span>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Welcome Screen</h2>
          <p className="mt-1 text-sm text-gray-500">Enter your details to continue</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" placeholder="you@example.com" className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input type="password" placeholder="Enter password" className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </div>
            <button className="w-full rounded-lg bg-brand-500 py-3 text-sm font-semibold text-white hover:bg-brand-600">Welcome Screen</button>
          </div>
        </div>
      </div>
    </div>
  );
}