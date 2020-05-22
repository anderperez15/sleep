/**Example -> async sleep (2000); will sleep 2 seconds */
const sleep = (time:number) => {
    return new Promise((res) => {
        setTimeout(() => res(),time)
    })
}

export default sleep;
