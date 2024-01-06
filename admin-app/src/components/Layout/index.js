import React from 'react'
import Header from '../Header'
import { Container } from 'react-bootstrap'

// export default function Layout() {
//   return (
//     <>
//         <Header />
//         <Container>
//         {Layout.children}
//         </Container>
        
//     </>
//   )
// }

const Layout = (props) => {
    return(
        <>
            <Header />
            {/* <Container>
                {props.children}
            </Container> */}
            {props.children}

        </>
    )
}

export default Layout;