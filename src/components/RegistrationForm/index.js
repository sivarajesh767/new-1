// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastNameInput: value})
  }
  onBlurLastName = () => {
    const {isLastNameIn} = this.lastNameIn()
    this.setState({showLastNameError: !isLastNameIn})
  }

  renderLastNameInput = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError ? 'show-last' : 'input-firstName'
    return (
      <div>
        <label htmlFor="lastName" className="lastName-label ">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="LastName"
          onChange={this.onChangeLastName}
          value={lastNameInput}
          id="lastName"
          onBlur={this.onBlurLastName}
          className={className}
        />
      </div>
    )
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target
    this.setState({firstNameInput: value})
  }
  onBlurFirstName = () => {
    const {isFirstNameIn} = this.firstNameIn()
    this.setState({showLastNameError: !isFirstNameIn})
  }

  renderFirstNameInput = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError ? 'first-name' : 'input-firstName'

    return (
      <div>
        <label htmlFor="firstName" className="fistName-label">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="FirstName"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          value={firstNameInput}
          id="firstName"
          className={className}
        />
      </div>
    )
  }

  firstNameIn = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }
  lastNameIn = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isFirstNameIn = this.firstNameIn()
    const isLastNameIn = this.lastNameIn()
    if (isFirstNameIn && isLastNameIn) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isFirstNameIn,
        showLastNameError: !isLastNameIn,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form onSubmit={this.onSubmitForm} className="form-co">
        {this.renderFirstNameInput()}
        {showFirstNameError && <p className="para-2">Required</p>}
        {this.renderLastNameInput()}
        {showLastNameError && <p className="para-2">Required</p>}
        <button type="submit" className="button-1">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmittedSuccessfully = () => {
    this.setState(preState => ({
      isFormSubmitted: !preState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmittedSuccessfully = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="para-1">Submitted Successfully</p>
      <button type="button" onClick={this.onClickSubmittedSuccessfully()}>
        Submitted Another Registration
      </button>
    </>
  )
  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-co">
        <h1 className="heading-1">Registration</h1>
        <div className="co">
          {isFormSubmitted
            ? this.renderSubmittedSuccessfully()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
