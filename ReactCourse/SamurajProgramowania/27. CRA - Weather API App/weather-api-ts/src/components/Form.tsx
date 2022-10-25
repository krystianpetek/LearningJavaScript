import React from 'react';
import "./Form.css";

interface IForm {
    city: string,
    change: (event: React.ChangeEvent<HTMLInputElement>) => void,
    submit: (event: React.FormEvent<HTMLFormElement>) => void,
    click: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Form = (props: IForm): JSX.Element => {
    return (
        <div>
            <form
                onSubmit={props.submit}>
                <input
                    type="text"
                    placeholder="Please enter a city"
                    value={props.city}
                    onChange={props.change}
                ></input>
                {/* <button onClick={props.click}>
                    Search city
                </button> */}
            </form>
        </div>
    )
}

export default Form;