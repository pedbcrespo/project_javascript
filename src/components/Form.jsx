import React from 'react';
import Button from 'react-bootstrap/Button';
export default (props)=>{
    const setForms = ()=>{
        return props.list.map(elem=>{
            return <>
                <label key={elem.id} htmlFor={elem.name_input}>{elem.text_label}</label>
                {elem.type === "input"? <input type="text" name={elem.name_input} id={elem.id_input}/>:<textarea id={elem.id_input} name={elem.name_input} rows="15" cols="95"></textarea> }
            </> 
        });
    }
    return (
        <section id="sect">
            <form action="">
                <div className="formBase">
                    <label htmlFor="nome">Nome:&nbsp;</label>
                    <input type="text" id="cnome" name="nome"/>
                    <label htmlFor="email">Email:&nbsp;</label>
                    <input type="text" id="cemail" name="email"/>
                    {setForms()}
                </div>
                <Button onClick={props.actionClick} variant="outline-primary">Confirmar</Button>{' '}
            </form>
        </section>
    );
}