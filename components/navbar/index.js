import { Box, Button, Icon, Link, useColorMode } from "@chakra-ui/core"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <nav>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <Icon name="sun" /> : <Icon name="moon" />}
        </Button>
        <Box>
          <Link>About</Link>
          <Link>Work</Link>
          <Link>Formation</Link>
        </Box>
      </nav>
      <style>{`
        nav {
          align-items: center;
          background-color: ${
            colorMode === "light"
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(26, 32, 44)"
          };
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 900px;
          padding: 25px;
          position: sticky;
          width: 100%;
        }

        a {
          padding: 0.25rem;
        }
      `}</style>
    </>
  )
}
