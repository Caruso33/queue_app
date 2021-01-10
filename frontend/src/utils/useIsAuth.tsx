import { useContext, useEffect } from "react"
import { useMeQuery } from "../generated/graphql"
import { useRouter } from "next/router"
import { usePrevious } from "@chakra-ui/core"
import { StoreContext, StoreContextType } from "state/app"
import { isServer } from "./isServer"

export const useIsAuth = (args = { skip: isServer() }) => {
  const router = useRouter()

  const storeContextType: StoreContextType = useContext(StoreContext)

  const { dispatch } = storeContextType

  // TODO: This should not fetch on rerender if data is already there
  const { data, loading } = useMeQuery(args)

  const prevMe = usePrevious(data)
  useEffect(() => {
    if (
      !loading &&
      !data?.me &&
      !router.pathname.startsWith("/login") &&
      !router.pathname.startsWith("/register")
    ) {
      router.replace("/login?next=" + router.pathname)
    }

    if (!prevMe && data?.me) {
      dispatch({ type: "me", payload: data.me })
    }
  }, [loading, data, router])

  return { data, loading, isAuth: data?.me?.id }
}
