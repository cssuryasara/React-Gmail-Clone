import {Button, IconButton} from '@material-ui/core';
import React from 'react';
import './SideBarComponenet.css';
import SideBarOption from './SideBarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import { openSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
function SideBar () {
  const dispatch=useDispatch();
  return (
    <div className="sideBar">
      <Button
        className="sideBar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={()=>dispatch(openSendMessage())}>
        Compose
      </Button>
      <SideBarOption
        icon={<InboxIcon fontSize="large" />}
        title="Inbox"
        num={5}
        selected={true}
      />
      <SideBarOption
        icon={<AccessTimeIcon fontSize="large" />}
        title="Snoozed"
        num={5}
        selected={true}
      />
      <SideBarOption
        icon={<LabelImportantIcon fontSize="large" />}
        title="Important"
        num={5}
      />
      {' '}
      <SideBarOption
        icon={<NearMeIcon fontSize="large" />}
        title="sent"
        num={5}
      />
      {' '}
      <SideBarOption
        icon={<NoteIcon fontSize="large" />}
        title="Drafts"
        num={5}
      />
      {' '}
      <SideBarOption
        icon={<ExpandMoreIcon fontSize="large" />}
        title="More"
        num={5}
      />
      <div className="sidebar__footer" />
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon></PersonIcon>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
    </div>
  );
}

export default SideBar;
