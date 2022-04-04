import React from 'react';
import Youtube from '../API/YouTube.API';
import TextGrid from '../COMPONENTS/textGrid';
import { mainPage } from '../DATA/mainPage';

export default function MainPage() {


    return (
        <div class='MainPage'>

            <div class='textGrid' >
                <TextGrid
                    text1={mainPage.text}
                    text2={mainPage.text2}
                />
            </div>
            <div class='display'>
                <TextGrid
                    text1={"Leziz Kebab "}
                    text2={"Yapması efsane, yemesi şahane kebab"}
                />
                <div class='youtube'>
                    <Youtube />
                </div>
            </div>
            <div class='display'>
                <TextGrid
                    text1={"Leziz Kebab "}
                    text2={"Yapması efsane, yemesi şahane kebab"}
                />
                <div class='youtube'>
                    <Youtube />
                </div>
            </div>

        </div>
    );
}