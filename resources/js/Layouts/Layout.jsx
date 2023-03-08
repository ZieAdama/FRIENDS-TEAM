import Navbare from '@/Components/Navbare';
import Sidebare from '@/Components/Sidebare';
import Footer from '@/Components/Footer';
import Tiroire from '@/Components/Tiroire';
import Handernave from '@/Components/Handernave';

export default function Layout({ children, title }) {

    return (
        <div className="wrapper">

            <Navbare />

            <Sidebare />

            <div className="content-wrapper">

                <Handernave />

                <div className="content">

                    <div className="container-fluid">

                        {children}

                    </div>

                </div>

            </div>



            <Tiroire />

            <Footer />

        </div>
    )
}