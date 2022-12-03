// import {useState} from 'react'

// export const useFetching = (callback) => {
//     const [isLoading, setIsLoading] = useState(false);
//     // const [error, setError] = useState();

//     const fetching = () => {
//         setIsLoading(true)
//         callback.then()
//         .catch((err) => console.log(`Ошибка: ${err}`))
//         .finally(setIsLoading(false))
//     }
//     return [fetching, isLoading]
// }