import Navbar from "../navbar"

export default function Header() {
  return (
    <>
      <header>
        <Navbar />
        <div className="container">
          <h1 className="title">¡Hola! Soy Álvaro Quero</h1>
          <h2 className="subtitle">Soy desarrollador full stack</h2>
        </div>
      </header>
      <style jsx>{``}</style>
    </>
  )
}
