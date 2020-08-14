import React from 'react';

export default (props)=>{
    return (
        <>
            <div className="formBase">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="cnome" name="nome"/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="cemail" name="email"/>
            </div>

        </>
    );
}