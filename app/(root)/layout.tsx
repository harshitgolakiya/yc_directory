import React from "react";

import Navbar from "@/app/components/navbar";

export default function layout({children} : {children: React.ReactNode}){
    return(
        <main className="font-work-sans">
            <Navbar />

            {children}
        </main>
    )
}