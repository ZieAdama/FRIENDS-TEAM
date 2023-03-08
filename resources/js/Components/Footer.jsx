import { Link } from '@inertiajs/react'


export default function Footer(params) {

    return (
        <footer className="main-footer">

            <div className="float-right d-none d-sm-inline">
                <Link href={route('logout')} method="post" as="button" className="btn btn-block btn-xs bg-secondary">
                    Deconnexion
                </Link>
            </div>

            <strong>Copyright &copy; 2023-2024 <a href="https://friendsteam.com">FriendsTeam.com</a>.</strong> All rights reserved.

        </footer>
    )

}