import React from 'react';
const MFE1_Button = React.lazy(
  () => import('MFE1/Button')
);
function App() {
    return (
        <div>
        <h1>MicronFrontEnd2</h1>
        <React.Suspense fallback='Loading Button'>
          <MFE1_Button />
        </React.Suspense>
        </div>
    );
  }

export default App;