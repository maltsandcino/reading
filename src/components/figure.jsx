export default function Figure({ media, number, description, sitename, publisher, day, month, year, link }) {
    const isVideo = media.includes('youtu')

    return (
        <figure>
            {isVideo ? (
                <iframe
                    width="560"
                    height="315"
                    src={media}
                    title={description}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <img src={media} alt={description} />
            )}
            <figcaption>
                Fig. {number}. {description}. <i>{sitename}</i>, {publisher}, {day} {month} {year}, {link}.
            </figcaption>
        </figure>
    )
}