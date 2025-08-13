import {useState, useEffect} from 'react'

export function useLocalStorage<T>(key: string, initialValue: T){
    const [storedValue, setStoredValue] = useState<T>(initialValue)

    console.log("Esta aqui");
    

    useEffect(()=> {
        const stored = localStorage.getItem(key)
        if (stored) {
            setStoredValue(JSON.parse(stored))
        }
        console.log("oii");
        
    },[key])

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(storedValue))
    },[key, storedValue])

    return {
        storedValue,
        setStoredValue
    }
}