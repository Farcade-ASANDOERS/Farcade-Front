import ViewTest from './View/Test/ViewTest';
import ViewMain from './View/ViewMain';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ViewMain />} />
      <Route path='/dev-test' element={<ViewTest />} />
    </Routes>
  );
};

export default App;
