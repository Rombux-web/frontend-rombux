import Politicas from "@/components/Politicas/Politicas"
import Footer from "@/components/Footer/Footer"

function Politics() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Politicas />
            </main>
            <Footer />
        </div>
    )
}

export default Politics