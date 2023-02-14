import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export default function Layout({children}: {children: ReactNode}){
  return(
    <div style={{display: "flex"}}>
      <Sidebar></Sidebar>
      {children}
    </div>
  )
}
