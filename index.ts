/**Example -> async sleep (2000); will sleep 2 seconds */
export defaultconst sleep = (time:number) => {
    return new Promise((res) => {
        setTimeout(() => res(),time)
    })
}

export default sleep;
