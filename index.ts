/**Example -> async sleep (2000); will sleep 2 seconds */
export const sleep = (time:number) => {
    return new Promise((res) => {
        setTimeout(() => res(),time)
    })
}
