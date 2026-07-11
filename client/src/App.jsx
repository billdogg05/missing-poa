import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Header />
      <main>
        <section>
            <div className="container">
                <AppRoutes />
            </div>
        </section>        
      </main>
      <Footer />
    </>
  )
}

export default App
