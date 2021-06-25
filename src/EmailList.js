import React, {useEffect, useState} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import ArrowDropDownicon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './Maillist.css';
import Section from './Section';
import EmailRow from './EmailRow';
import {db} from './firebase';

function EMaillist () {
  const [email, setEmail] = useState ([]);
  useEffect (() => {
    db
      .collection ('Email')
      .orderBy ('timestamp', 'desc')
      .onSnapshot (snapshot =>
        setEmail (
          snapshot.docs.map (doc => ({
            id: doc.id,
            data: doc.data (),
          }))
        )
      );
  }, []);
  return (
    <div className="mailList">
      <div className="maillist__settings">
        <div className="maillist__settingsleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownicon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="maillist__settingsright">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>
      <div className="maillist__sections">
        <Section
          icon={<InboxIcon />}
          title={'Primary'}
          color="red"
          selected={true}
        />
        <Section icon={<PeopleIcon />} title={'People'} color="blue" />
        <Section icon={<LocalOfferIcon />} title={'Primary'} color="green" />
      </div>

      <div className="emailList__list">
        {email.map (({id, data: {to, Subject, Message, timestamp}}) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={Subject}
            description={Message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

      </div>
    </div>
  );
}

export default EMaillist;
