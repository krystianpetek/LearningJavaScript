import { FC } from "react";
import "./Input.css";

interface IInputProps {
    type: string,
    name: string,
    label: string,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    accept?: boolean,
    error: boolean,
    message: string
}

export const Input: FC<IInputProps> = (props) => {
    const { type, name, value, label, change, accept, error, message } = props;
    return (
        <>
            {type === "checkbox" ?
                (
                    <div className="input">
                        <div>
                            <label htmlFor="accept">I agree to accept the regulations</label>
                            <span>{(!error) ? message : ""}</span>
                        </div>
                        <div className="checkbox">
                            <input
                                formNoValidate
                                type={type}
                                id={name}
                                name={name}
                                checked={accept}
                                onChange={change} />
                        </div>
                    </div>
                ) :
                (
                    <div className="input">
                        <div>
                            <label htmlFor={name}>{label}</label>
                            <span>{(!error) ? message : ""}</span>
                        </div>
                        <input
                            formNoValidate
                            type={type}
                            id={name}
                            name={name}
                            value={value}
                            onChange={change} />
                    </div >
                )}




        </>
    )
}