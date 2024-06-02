'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'

export function TopNav() {
  const router = useRouter()

  return (
    <nav className="bg-gray-800 text-white border-b border-white flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Modern React Demo</div>
      <div className="flex flex-row gap-6">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh()
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
