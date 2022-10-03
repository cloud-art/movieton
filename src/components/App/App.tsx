import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Pages/Main/Main';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
