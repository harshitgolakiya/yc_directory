import { auth } from '@/auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = async () => {
    const session = await auth();
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png" alt="Logo" width={144} height={30} className='object-contain' />
            </Link>
            <div className='flex items-center gap-5'>
                {session && session?.user ?(
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>
                        <button onClick={signOut}>
                            <span>logout</span>
                        </button>
                        <Link href={`/users`}>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    </div>
  )
}

export default navbar