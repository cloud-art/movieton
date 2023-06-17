import React from 'react'
import s from './Player.module.scss'
import { useEffect } from 'react'

type PlayerProps = {}

const Player:React.FC<PlayerProps> = ({}) => {
    const id = 435;
	const data = {};

	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

    return (
        <div className={s.videoContainer}>
            <div
                className={s.video}
                id="kinobd"
                // data-resize="1"
                // data-bg="#000"
                data-kinopoisk={id}
            />
        </div>
  )
}

export default Player