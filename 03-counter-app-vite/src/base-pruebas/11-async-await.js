
export const getImagen = async () => {
    const resp = await fetch('https://google.com')
    return await resp.text()

}
