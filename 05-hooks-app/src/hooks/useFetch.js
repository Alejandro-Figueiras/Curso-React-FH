import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null
  })

  useEffect(() => {
    getFetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      errorMessage: null
    })
  }

  const getFetch = async() => {
    if (localCache[url]) {
      console.log('usando cache')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null
      })
      return
    }
 
    setLoadingState()

    const response = await fetch(url)

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: response.statusText
      })
    }

    const data = await response.json()
    setState({
      data,
      isLoading: false,
      hasError: false,
      errorMessage: null
    })

    localCache[url] = data
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}