const NewsCard = ({ title, image, description, source }) => {
  return (
    <div className="news-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={source} className="source">Source</a>
    </div>
  )
}
export default NewsCard
