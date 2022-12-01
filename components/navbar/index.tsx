import { Grid, Button, Icon, useColorMode } from "@chakra-ui/react"

import Link from "./link"
import Hamburguer from "../hamburguer"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <nav>
        <div className="nav-menu">
          <Grid templateColumns="repeat(4, 1fr)">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Work</Link>
            <Link>Formation</Link>
          </Grid>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>

        <Hamburguer />
      </nav>
      <style jsx>{`
        nav {
          background-color: ${colorMode === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(26, 32, 44)"};
          margin: 0 auto;
          max-width: 900px;
          padding: 3em 0;
          position: sticky;
          width: 100%;
        }

        .nav-menu {
          display: none;
        }

        @media screen and (min-width: 500px) {
          .nav-menu {
            align-items: center;
            display: flex;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  )
}
