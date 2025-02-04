// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <h1 className="heading">{title}</h1>
        <button
          type="button"
          data-testid="star"
          onClick={onClickStar}
          className="star-button"
        >
          <img src={starImgUrl} alt="star" className="star"/>
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
