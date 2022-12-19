const Article = ({ title, text, tags, image, alt }) => {
    return (
        <div className={styles.containerTitle}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.containerTag}>
                {
                    tags.map((tag) => <span className={styles.tag} key={tag}>{tag}</span>)
                }
            </div>
            <div className="gap-1 grid line-clamp-6 sm:line-clamp-none">
                {
                    text.map((content, index) => <p className='text-alura-200 dark:text-gray-400' key={index}>{content}</p>)
                }
            </div>
            {image && <img className="sm-4 mt-4" src={image} />}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>

    )
}

export default Article

const styles = {
    containerTitle: `flex flex-col items-center p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-sm sm:p-5 gap-2 sm:hover:shadow-gray-600 sm:hover:shadow-lg sm:hover:transition-all sm:hover:drop-shadow-md dark:sm:hover:shadow-black `,
    title: `text-xl text-alura-200 dark:text-gray-200 font-bold`,
    containerTag: `w-full flex-row justify-end gap-2 pr-5 hidden sm:flex`,
    tag: `bg-alura-100 dark:bg-dark-100 text-gray-200 font-bold text-xs uppercase px-4 py-1 rounded-full hover:bg-alura-200 hover:scale-110 hover:transition-all hover:delay- hover:bg-gradient-to-r hover:from-alura-200 `,
}