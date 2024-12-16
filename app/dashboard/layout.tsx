import { ReactNode } from "react";


export default function DashboardLayout({children, chart} : {children : ReactNode, chart : ReactNode}){
    return(
        <div className="size-full flex flex-col">
            <div className="basis-1/2 shrink-0">
                {chart}
            </div>
            <div className="grow">
                {children}
            </div>
            
        </div>
    )
}