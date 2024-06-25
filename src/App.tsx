import React, {FC} from 'react';
import './App.css';
import WrapperToCarts from "./components/wrapperComponentToCarts/WrapperComponentToCarts";
import MyCustomButtonComponent from "./components/myCustomButtonComponent/MyCustomButtonComponent";
import MyCustomCartsComponent from "./components/myCustomCartsComponent/MyCustomCartsComponent";
import MyCustomComponentDataInfo from "./components/myCustomComponentDataInfo/MyCustomComponentDataInfo";
import dataAlbums from './data/dataAlbums';
import {IAlbum} from "./model/IAlbum";
import styles from "./components/myCustomButtonComponent/my-custom-button-component.module.css";

const App: FC = () => {
    return (
        <>
            <MyCustomButtonComponent nameClassCss={'btnCss'} label={'first'}>Button 1</MyCustomButtonComponent>
            <MyCustomButtonComponent nameClassCss={'btnCss'} label={'second'}>Button 2</MyCustomButtonComponent>

            <WrapperToCarts className={'cssStyle'}>
                <MyCustomCartsComponent classNameMy={'cartCss'} title={'Car 1'} price={222000}
                                        img={'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg'}></MyCustomCartsComponent>
                <MyCustomCartsComponent classNameMy={'cartCss'} title={'Car 2'} price={555000}
                                        img={'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_1920%2Cc_limit/9.%2520DeLorean-Alpha-5%2520%255BDeLorean%255D.jpg'}></MyCustomCartsComponent>
                <MyCustomCartsComponent classNameMy={'cartCss'} title={'Car 3'} price={444400}
                                        img={'https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive970'}></MyCustomCartsComponent>
                <MyCustomCartsComponent classNameMy={'cartCss'} title={'Car 4'} price={89769000}
                                        img={'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg'}></MyCustomCartsComponent>
            </WrapperToCarts>

            <WrapperToCarts className={'cssStyle'}>
                {
                    dataAlbums.map((album: IAlbum) =>
                        <MyCustomComponentDataInfo album={album} className={styles.item}>
                            ID: {album.id}
                        </MyCustomComponentDataInfo>)

                }
            </WrapperToCarts>
        </>
    )
}

export default App;