import { useMediaQuery } from "react-responsive"

const useIsCollapsed = () =>
  useMediaQuery({
    query: "(max-width: 1280px)",
  })
export default useIsCollapsed
