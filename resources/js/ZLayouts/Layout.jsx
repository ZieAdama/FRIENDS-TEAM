import { Link } from '@inertiajs/react'
import Navbare from '@/ZComponents/Navbare';
import Sidebare from '@/ZComponents/Sidebare';
import Footer from '@/ZComponents/Footer';
import Tiroire from '@/ZComponents/Tiroire';

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