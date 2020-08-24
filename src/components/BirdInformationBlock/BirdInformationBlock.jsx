import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';

import DefaultBird from '../../img/DefaultBird.jpg';
import style from './style.module.scss';
import 'react-h5-audio-player/lib/styles.css';

const BirdInformationBlock = ({
  rightBird,
  currentBird,
  broad,
  isReadyForNextLevel,
}) => {
  if (broad) {
    return (
      <div className={style.InformationBlockBig}>
        {currentBird.id && (
          <div>
            <div className={style.BirdInformationBlockBroad}>
              <div>
                <div className={style.MediaBlock}>
                  <img src={currentBird.img} alt="curentBird" className={style.CurrenttBird} />
                  <div>
                    <h2>{currentBird.ruName}</h2>
                    <h3>{currentBird.latName}</h3>
                  </div>
                </div>
                <div className={style.PlayerBlock}>
                  <AudioPlayer
                    src={currentBird.audio}
                    autoPlayAfterSrcChange={false}
                  />
                </div>
                <p>
                  {currentBird.description}
                </p>
              </div>
            </div>
          </div>
        )}
        {!currentBird.id && (
          <>
            <span className={style.plsTry}>
              Послушайте плеер.Выберите птицу из списка
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={style.short}>
      {!isReadyForNextLevel && (
        <div className={style.contentInf}>
          <div className={style.informationBlock}>
            <img src={DefaultBird} alt="defaultBird" className={style.DefaultBird} />
            <div className={style.currentHideBlock}>
              <h3 className={style.BirdName}>******</h3>
              <AudioPlayer
                src={rightBird.audio}
                autoPlayAfterSrcChange={false}
              />
            </div>
          </div>
        </div>
      )}
      {isReadyForNextLevel && (
        <div className={style.contentInf}>
          <div className={style.informationBlock}>
            <img src={rightBird.img} alt="currentBird" className={style.CurrenttBird} />
            <div className={style.currentAfterHideBlock}>
              <h3 className={style.BirdName}>{rightBird.ruName}</h3>
              <AudioPlayer
                src={rightBird.audio}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

BirdInformationBlock.defaultProps = {
  broad: false,
};

BirdInformationBlock.propTypes = {
  rightBird: PropTypes.objectOf(PropTypes.any).isRequired,
  currentBird: PropTypes.objectOf(PropTypes.any).isRequired,
  broad: PropTypes.bool,
  isReadyForNextLevel: PropTypes.bool.isRequired,
};

export default BirdInformationBlock;
