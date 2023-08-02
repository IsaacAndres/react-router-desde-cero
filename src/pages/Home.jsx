import { Link } from "../Link"

export default function HomePage () {
  return (
    <>
      <h1>Inicio</h1>
      <p>Esta es una pagina de ejemplo para crear un react router desde cero</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}