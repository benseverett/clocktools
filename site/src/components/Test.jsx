import React, { useState, useEffect } from 'react'


const Test = () => {

    const [data, setData] = useState([{}])
    const [inputValue, setInputValue] = useState(0)
    const [outputValue, setOutputValue] = useState(0)

    const [jd, setJd] = useState()
    const [mjd, setMjd] = useState()
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    async function jdToDate() {
        console.log("==================", mjd, "==", jd, "==================")
        var temp = parseFloat(jd) + 0.5
        var z = Math.trunc(temp)
        var f = temp - z
        var A = z
        if (z >= 2299161) {
            var alpha = Math.trunc((z - 1867216.25) / 36524.25)
            A = z + 1 + alpha - Math.trunc(alpha / 4)
        }
        /*console.log("temp", temp, "z", z, "f", f, "A", A)*/
        var B = A + 1524
        var C = Math.trunc((B - 122.1) / 365.25)
        var D = Math.trunc(365.25 * C)
        var E = Math.trunc((B - D) / 30.6001)
        /*console.log("B", B, "C", C, "D", D, "E", E)*/

        var day = B - D - Math.trunc(30.6001 * E)
        /*console.log("day", day)*/

        var month = E - 1
        if (E > 13) {
            month = E - 13
        }
        /*console.log("month", month)*/

        var year = C - 4716
        if (month < 3) {
            year = C - 4715
        }

        var hour = Math.trunc(f * 24)
        f -= hour / 24
        var minute = Math.trunc(f * 60 * 24)
        f -= minute / (60 * 24)
        var second = Math.round(f * 60 * 60 * 24 * 1000) / 1000

        console.log("Method 1: Y:", year, "M:", month, "D:", day, "h:", hour, "m:", minute, "s:", second)

        setYear(year)
        setMonth(month)
        setDay(day)
        setHour(hour)
        setMinute(minute)
        setSecond(second)
    }

    function testFun1() {
        var date = new Date(UnixTimeFromModifiedJulianDate(mjd))
        var day = date.getDate();
        var year = date.getYear() + 1900;
        var month = date.getMonth() + 1;
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milli = date.getMilliseconds();
        console.log("Method 2: Y:", year, "M:", month, "D:", day, "h:", hour, "m:", minutes, "s:", seconds, "ms:", milli)
    }



    function ModifiedJulianDateFromUnixTime(t) {
        return (t / 86400000) + 40587;
    }

    function UnixTimeFromModifiedJulianDate(mjd) {
        return (mjd - 40587) * 86400000;
    }

    function jdToMjd() {
        var a = 2400000.5
        setMjd(parseFloat(jd) - a)
    }

    async function mjdToJd() {
        var a = 2400000.5
        setJd(parseFloat(mjd) + a)
    }

    useEffect(() => {
        mjdToJd().then(jdToDate)
    }, [jd])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <div>
                <h1 className='text-3xl font-bold text-gray-700'>This is where the back-end test is:...</h1>
            </div>
            <div>

                {(typeof data.members === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    data.members.map((member, i) => (
                        <p key={i}>{member}</p>
                    ))
                )}

            </div>
            <div className='flex w-full'>
                <form action="">
                    <div className='grid grid-cols-2'>
                        <label htmlFor="mjdInput">Enter MJD:</label>
                        <input
                            id='mjdInput'
                            className='border m-2 p-2'
                            type='text'
                            onChange={evt => setMjd(evt.currentTarget.value)}
                            placeholder='MJD'
                        />
                    </div>
                </form>
                <div className='flex flex-col my-2 p-2'>
                    <button
                        className='w-full'
                        onClick={mjdToJd}>
                        Convert
                    </button>
                </div>
                <div className='flex flex-col my-2 p-2'>
                    <output>
                        {[year, " ", month, " ", day, " ", hour, " ", minute, " ", second]}

                    </output>
                    <output>{mjd}</output>
                    <output>{jd}</output>

                </div>


            </div>
            <div className='flex flex-col my-2 p-2'>
                <button
                    className='w-full'
                    onClick={testFun1}>
                    Try test fun 1
                </button>
            </div>
        </div>
    )
}

export default Test