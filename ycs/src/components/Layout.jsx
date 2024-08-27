import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";


export default function Layout(props){
    const { children } = props;
return(

    <div>
        <Header>

        </Header>
    <LeftMenu></LeftMenu>
        
        {children}
        <Footer>

        </Footer>

    </div>
)

}