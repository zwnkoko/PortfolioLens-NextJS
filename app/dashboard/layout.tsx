import { ReactNode } from "react";


export default function DashboardLayout({children, chart} : {children : ReactNode, chart : ReactNode}){
    return(
        <div className="bg-red-500 size-full flex flex-col">
            <div className="min-h-96 bg-blue-500">
                {chart}
            </div>      
            <div>
                {children}
            </div>      
        </div>
    )
}