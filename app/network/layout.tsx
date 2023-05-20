import React from 'react'

export default function networklayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
   <>
     <nav> network</nav>
     <main>
        {children}
     </main>
   
   </>
  )
}
