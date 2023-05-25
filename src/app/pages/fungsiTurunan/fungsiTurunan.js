'use client'
import { useState } from "react"

export default function FungsiTurunan() {
    const [cek,setCek] = useState('')
    const [hitung,setHitung] = useState(true)

    function cetakk() {
        let pangkat = cek.match(/\^(\d+)/g).map(match => match.substring(1))[0]
        let sebelumPangkat = cek.match(/\b(\d+)[a-z]\^\d+\b/g).map(match => match.match(/\b(\d+)/)[1])[0]
        let tanpaPangkat = cek.match(/\b(\d+)(?=[a-z](?!\^))/gi)

        let hsil = [];
        while (pangkat != 0) {
            hsil.push(pangkat)
            // console.log(pangkat)
            pangkat--
        }
        let hasil = hsil.reduce((depan=1,belakang=1) => depan*belakang * sebelumPangkat)
        console.log(hsil)
        // hsil.push(pangkat)
        console.log(hasil)

        // console.log("sebelum pangkat",sebelumPangkat)
        // console.log("pangkat",pangkat)
        // console.log('tanpa pangkat',tanpaPangkat)

    }


  return (
    <div>
    <h1 className="text-center mt-10">FUNGSI TURUNAN</h1>
    <label htmlFor="">ini di sebelah : </label>
        <input type="text" value={cek} onChange={(e) => setCek(e.target.value)}/>
        <button onClick={cetakk}>cetak</button>
    </div>
  )
}
