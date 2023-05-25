import React, { useEffect, useState } from 'react';
import Router from '../Router/Router';
import '../../styles/main.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { check } from '../../http/userApi';
import { useActions } from '../../hooks/useActions';
import LoadSpinner from '../../components/UI/LoadSpinner/LoadSpinner';
import s from './App.module.scss'

function App() {
    const { setAuth } = useActions()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        check().then(data=>{
            setAuth(true)
        }).finally(() => {setLoading(false)})
    }, [])

    if (loading){
        return (
            <div className={s.loaderWrapper}>
                <LoadSpinner/>
            </div>
        )
    }

    return (
        <div className="appContainer">
            <Router />
        </div>
    );
}

export default App;
