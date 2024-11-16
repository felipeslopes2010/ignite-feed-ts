import { useState } from "react";
import { Trash, ThumbsUp } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [aplauseCount, setAplauseCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleAplauseComment() {
        setAplauseCount(prevState =>  prevState + 1);
    }

    return (
        <div className={styles.comment} >
            <Avatar src="https://github.com/felipeslopes2010.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Kimura</strong>
                            <time title="12 de Novembro de 2024 às 21:42:00" dateTime="2024-11-12 21:42:00">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleAplauseComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{aplauseCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}