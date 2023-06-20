import React, { useState } from 'react';

const Tabs = ({ tabs1,tabs2 }) => {
    let [tabContent1, setTabContent1] = useState('Content for Tab 1');
    let [tabContent2, setTabContent2] = useState('Content for Tab A');
    return (
        <div className='tabs'>
            <ul>
                {
                    tabs1.map((elememt) => (
                        <li onClick={() => { setTabContent1(elememt.content) }}>{elememt.title}</li>
                    ))
                }
            </ul>
            {
                (tabContent1 != '') && (
                    <p>{tabContent1}</p>
                )
            }
            <ul>
                {
                    tabs2.map((elememt) => (
                        <li onClick={() => { setTabContent2(elememt.content) }}>{elememt.title}</li>
                    ))
                }
            </ul>
            {
                (tabContent2 != '') && (
                    <p>{tabContent2}</p>
                )
            }
        </div>
    )
}

export default Tabs;