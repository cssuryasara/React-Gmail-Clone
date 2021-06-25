import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBarComponenet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mail from './Mail';
import EMaillist from './EmailList';
import MailCompose from './MailCompose';
import {useDispatch, useSelector} from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {login, selectUser} from './features/userSlice';
import Login from './Login';
import {auth} from './firebase';
// import {auth} from './firebase';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header user={user} />
          <div className="app__body">
            <SideBar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EMaillist />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <MailCompose />}
        </div>
      )}
    </Router>
  );
}

export default App;
