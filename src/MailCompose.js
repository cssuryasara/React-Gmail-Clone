import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import './Mailcompose.css';
import { closeSendMessage} from './features/mailSlice';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {db} from './firebase';
import firebase from 'firebase';

function MailCompose () {
  const dispatch = useDispatch ();


  const {register, handleSubmit, formState: {errors}} = useForm ();
  const onSubmit = data => {
    console.log (data);
    db.collection ('Email').add ({
      to: data.To,
      Subject: data.Subject,
      Message: data.Message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp (),
    });
    dispatch (closeSendMessage ());
  };
  return (
    <div className="MailCompose">
      <div className="MailCompose__header">
        <h3>New Message</h3>
        <CloseIcon
          className="MailCompose__close"
          onClick={() => dispatch (closeSendMessage ())}
        />
      </div>
      <form className="MailCompose__form" onSubmit={handleSubmit (onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register ('To', {required: true})}
        />
        {errors.To && <p className="MailCompose__error">"To is reqired"</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register ('Subject', {
            required: true,
          })}
        />
        {errors.Subject &&
          <p className="MailCompose__error">"Subject is reqired"</p>}

        <input
          type="text"
          placeholder="Message...."
          {...register ('Message', {required: true})}
          className="MailCompose__message"
        />
        {errors.Message &&
          <p className="MailCompose__error">"Message is reqired"</p>}

        <Button type="submit" className="MailCompose__send">
          Send
        </Button>
        <div className="MailCompose__close__options" />
      </form>
    </div>
  );
}

export default MailCompose;
