import { ReactNode } from "react"

export const Container = ({children}:{children:ReactNode}) => {
  return (
    <div>
      container
      { children}
      container
    </div>
  )
}
