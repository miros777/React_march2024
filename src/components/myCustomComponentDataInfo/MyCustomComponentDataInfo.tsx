import React, {FC} from 'react';
import styles from './myCustomComponentDataInfo.module.css';
import {IAlbum} from "../../model/IAlbum";

type IProps = {album: IAlbum} & {children: React.ReactNode} & {className: string};

// @ts-ignore
const MyCustomComponentDataInfo: FC<IProps> = ({album, children}) => {
    const {albumId, id, title,  url, thumbnailUrl} = album;

    return (
        <div className={styles.item}>
            <h3>title: {title}</h3>
            <div>albumId: {albumId}</div>
            <div>id: {id}</div>
            <img src={thumbnailUrl} alt={title}/>
            <a href={url} className={styles.itemBtn}>Open</a>
            {children}
        </div>
    );
};

export default MyCustomComponentDataInfo;