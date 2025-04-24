'use client'; // Se estiver usando App Router (Next 13+)

import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/historia">História</Link>
                    </li>

                    <img src="/logo.png" alt="logo"/>

                    <li className="nav-item">
                        <Link className="nav-link" href="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/agenda">Agenda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
