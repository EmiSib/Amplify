import {Amplify} from 'aws-amplify';
import {WithAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut, user}){
    return(
        <div>
            <header className="App-header">
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign Out</button>
            </header>
        </div>
    )
}

export default WithAuthenticator(App);
