import { PencilLine } from "phosphor-react";

import { Avatar } from "./Avatar";

import userBannerBg from "../assets/user-banner-bg.png";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={userBannerBg}
                alt="Imagem de Background do usuário"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/felipeslopes2010.png" />

                <strong>Felipe Kimura</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}