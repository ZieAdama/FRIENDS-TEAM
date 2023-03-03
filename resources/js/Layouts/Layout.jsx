import Navbare from '@/Components/Navbare';
import Sidebare from '@/Components/Sidebare';
import Footer from '@/Components/Footer';
import Tiroire from '@/Components/Tiroire';

export default function Layout({ children }) {

    return (
        <div className="wrapper"> 

            <Navbare />

            <Sidebare />

            <article>{ children }</article>

            <Tiroire />

            <Footer />

        </div>
    )
}