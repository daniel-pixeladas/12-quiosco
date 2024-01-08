import QuioscoProvider from "@/context/QuioscoProvider"
import Sidebar from "../Sidebar"
import Pasos from "../Pasos"


function MainLayout({ children }) {
    return (
        <>
            <QuioscoProvider>
                <div className='md:flex'>
                    <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 text-center shadow-lg'>
                        <Sidebar />
                    </aside>
                    <main className='md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                        <div className='p-10'>
                            <Pasos />
                            {children}
                        </div>
                    </main>
                </div>
            </QuioscoProvider>
        </>
    )
}

export default MainLayout