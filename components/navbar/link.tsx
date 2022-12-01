import { Link as CLink } from "@chakra-ui/react"

export default function Link({ children }: any) {
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
