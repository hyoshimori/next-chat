import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export default function Layout({children}: {children: ReactNode}){
  return(
    <>
      <Sidebar></Sidebar>
      {children}
    </>
  )
}
