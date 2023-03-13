import Link from 'next/link';
import styles from './article.module.css';
import moment from 'moment/moment';
import 'moment/locale/pt-br'
moment.locale('pt-br');

export default function Article({
    index,
    title,
    tabcoins,
    created_at,
    comments,
    author,
    slug
}) {
    const urls = {
        article: `https://tabnews.com.br/${author}/${slug}`,
        user_profile: `https://tabnews.com.br/${author}`
    }
    
    const date = moment(created_at).fromNow();

    return (
        <article className={styles.article}>
            <span>{index}</span>
            
            <div>
                <Link href={urls.article} target="_blank">
                    <h3>{title}</h3>
                </Link>
                <ul>
                    <li>{tabcoins} tabcoin{tabcoins > 1 && 's'}</li>
                    <li>{date}</li>
                    <li>{comments} comentário{comments !== 1 && 's'}</li>
                    <li>
                        <Link href={urls.user_profile} target="_blank">
                            {author}
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    )
}