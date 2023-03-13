import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
export default function Event({ data }) {
  const inputEmail = useRef();
  console.log(inputEmail);

  const router = useRouter();

  const [message, setMessage] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (response.status == 409) {
        setMessage('This email has already been registered');
      }
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };
  return (
    <div className="event_single_page">
      <Image width={1000} alt={data.title} height={500} src={data.image} />
      <h1> {data.title} </h1>
      <p> {data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email"
        />{' '}
        <button type="submit"> Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
