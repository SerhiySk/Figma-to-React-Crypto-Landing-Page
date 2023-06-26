import styled from 'styled-components';
import { BiX } from 'react-icons/bi';
const FormContactUs = ({ isModal, hideModal }) => {
  return (
    <Wrapper className={isModal ? 'modal show-modal' : 'modal'}>
      <form action="#" method="post">
        <h1>Contact Us</h1>
        <p>
          Please take a moment to get in touch, we will get back to you shortly.
        </p>

        <div className="column">
          <label htmlFor="the-name">Your Name</label>
          <input type="text" name="name" id="the-name" />

          <label htmlFor="the-email">Email Address *</label>
          <input type="email" name="email" id="the-email" required />

          <label htmlFor="the-phone">Phone Number</label>
          <input type="tel" name="phone" id="the-phone" />

          <label htmlFor="the-reason">How can we help you? *</label>
          <select name="reason" id="the-reason" required>
            <option value="">Choose one</option>
            <option value="web">I want to buy crypto</option>
            <option value="video">I faced a technical issue</option>
            <option value="3d">Something else</option>
          </select>
        </div>
        <div className="column">
          <label htmlFor="the-message">Message *</label>
          <textarea name="message" id="the-message"></textarea>

          <button className="btn-submit" type="submit">
            Send Message
          </button>
        </div>
        <button type="button" className="close-btn" onClick={() => hideModal()}>
          <BiX />
        </button>
      </form>
    </Wrapper>
  );
};
export default FormContactUs;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;

  background: rgba(0, 0, 0, 0.6);

  inset: 0;

  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -10;
  transition: all 1s ease-in-out;
  &.show-modal {
    visibility: visible;
    z-index: 10;
  }
  form {
    position: relative;
    font-family: var(--paragraph);
    width: 90%;
    max-width: 800px;
    background: white;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background: #fffffff0;
    background: #4e0062;
    color: #fff;
    transition: all 1s ease-in-out;
  }

  h1,
  p {
    text-align: center;
  }
  label {
    display: block;
    margin: 1em 0 0.2em;
  }
  input,
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.3em;
    font-size: 20px;
    background-color: #fbfbfb;
    border: solid 1px #ccc;
    resize: vertical;
  }
  textarea {
    min-height: 180px;
  }
  select {
    color: var(--color-midnightblue);
  }
  option {
    color: blue;
    background: lavenderBlush;
  }
  input[type='checkbox'] {
    display: inline;
    width: auto;
    color: red;
  }

  .btn-submit {
    width: 100%;

    background: var(--color-indianred);
    margin-top: 34.5px;
    color: white;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease-out;
    font-weight: 500;
    font-family: var(--poppins);
    color: var(--ffffff);
    cursor: pointer;
    border: none;
    padding: var(--padding-lgi) var(--padding-8xl);
    :hover,
    :focus {
      background: var(--color-red-dark);
      outline: none;
    }
  }

  input:focus,
  input:hover,
  select:focus,
  select:hover,
  textarea:focus,
  textarea:hover {
    background: var(--color-indianred-light);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    color: #f40101;
    cursor: pointer;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--color-red-dark);

    transform: scale(1.2);
  }

  /* hover and focus states */

  @media screen and (min-width: 600px) {
    /*  make the form 2 columns */
    form:after {
      content: '';
      display: block;
      clear: both;
    }
    .column {
      width: 50%;
      height: 100%;

      padding: 1em;
      float: left;
    }
  }
`;
