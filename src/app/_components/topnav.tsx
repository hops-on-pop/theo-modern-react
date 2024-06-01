import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export function TopNav() {
  return (
    <nav className="bg-gray-800 text-white border-b border-white flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Modern React Demo</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
