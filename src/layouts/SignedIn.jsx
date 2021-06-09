import React from "react"
import { Button, Dropdown, Menu, Image } from "semantic-ui-react"

export default function SignedIn(signOut){
    return(
        <div>
           <Menu.Item>
               <Image avater spaced="right" src="https://avatars.githubusercontent.com/u/22831240?s=60&v=4"></Image>
               <Dropdown pointing="top left" text="Mert">
                   <Dropdown.Menu>
                       <Dropdown.Item text="Bilgilerim" icon="info"/>
                       <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="info"/>
                   </Dropdown.Menu>
               </Dropdown>
           </Menu.Item>
        </div>
    )
}