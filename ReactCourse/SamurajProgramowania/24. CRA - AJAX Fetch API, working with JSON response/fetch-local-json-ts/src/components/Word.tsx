interface IWordProps {
    key: number,
    english: string,
    polish: string
}

const Word = (props: IWordProps) => {
    return (
        <li>
            Word in english: <strong>{props.english}</strong>.<br />
            Translate: <strong>{props.polish}</strong>
        </li>
    )
}

export default Word;