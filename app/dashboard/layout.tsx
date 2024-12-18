import { ReactNode } from "react";
import LineChart from "./components/LineChart";

export default function DashboardLayout({children} : {children : ReactNode}){
    return(
        <div className="size-full flex flex-col space-y-4">
            <div className="h-96">
                <LineChart />
            </div>      
            <div>
                {children}
            </div>      
        </div>
    )
}