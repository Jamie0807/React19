import { useAtomValue, useSetAtom } from 'jotai'
import { nameAtom } from '../../state/jotai/atoms/nameAtom'
import { ageAtom } from '../../state/jotai/atoms/ageAtom'
import { infoAtom } from '../../state/jotai/atoms/infoAtom'

// useAtomValue用于获取原子值的当前值
const Age = () => {
    const age = useAtomValue(ageAtom)
    return <div>{age}</div>
}

const Name = () => {
    const name = useAtomValue(nameAtom)
    return <div>{name}</div>
}

const Info = () => {
    const info = useAtomValue(infoAtom)
    return <div>{JSON.stringify(info)}</div>
}

export function Jotai() {
    const setAge = useSetAtom(ageAtom)
    const setName = useSetAtom(nameAtom)
    return (
        <div>
            <Age></Age>
            <button onClick={() => setAge((a) => a + 1)}>setAge</button>
            <Name></Name>
            <input type="text" onChange={(e) => { setName(e.target.value)}} />
            <Info></Info>
        </div>
    )
}
