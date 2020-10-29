import { Link as CLink } from "@chakra-ui/core"

export default function Link({ children }) {
  return (
    <>
      <CLink>{children}</CLink>
      <style jsx>{`
        a {
          padding: 0.25rem;
        }
        a:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}
