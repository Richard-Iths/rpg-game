import React from "react"
import HeaderSvg from "../../assets/woodTexture/headerSvg.svg"
import { Links } from "../../components/link-component/link.component"

export const Header = () => {
  return (
    <header>
      <Links
        name={"HOME"}
        link={() => console.log("den här funktion triggar route gå till path")}
      />
      <Links
        name={"GAME"}
        link={"https://uk.yahoo.com/?fr=yset_chr_syc_mac_oracle"}
      />
      <Links
        name={"LINKS"}
        link={"https://uk.yahoo.com/?fr=yset_chr_syc_mac_oracle"}
      />

      <img src={HeaderSvg} alt="" />
    </header>
  )
}
