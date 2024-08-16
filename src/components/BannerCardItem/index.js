import './index.css'

const BannerCardItem = props => {
  const {CardDetails} = props
  const {headerText, description, className} = CardDetails
  return (
    <li className={`container ${className}`}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button type="button" className="button">
        Show More
      </button>
    </li>
  )
}
export default BannerCardItem
