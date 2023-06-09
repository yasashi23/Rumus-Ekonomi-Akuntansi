"use client"
import DeretHitungRumus from './deretHitungRumus'
import dynamic from "next/dynamic";
import { useState } from 'react';
import DropDown from '../../componentTambahan/dropDown';


function DeretHitung({style}) {
    const [aktif, setAktif] = useState(false)

    function aktifkan() {
        setAktif(!aktif)
    }


  return (
    <div style={style}>
        <div className="cont-deretHitung">
            <h1 className="text-center mb-6">Deret Hitung</h1>
                <DropDown func={aktifkan} val={aktif}/>
            <div className={`rumus flex justify-center penjelasanRumus ${aktif ? 'on' : ''}`}>
                <div className="rumusnyaCont rumusKe1">
                    <h1 className="deretHitung ">Rumus 1</h1>
                    <div className="rumusnya">
                        Sn = a + {"(n-1)"}b
                    </div>
                    <div className="ket">
                        <p>Keterangan :</p>
                        <div className="isiKeterangan">
                            <table>
                                <tr>
                                    <td>Sn</td>
                                    <td>=</td>
                                    <td>Nilai suku ke n</td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>=</td>
                                    <td>suku pertama</td>
                                </tr>
                                <tr>
                                    <td>b</td>
                                    <td>=</td>
                                    <td>Pembeda</td>
                                </tr>
                                <tr>
                                    <td>n</td>
                                    <td>=</td>
                                    <td>indeks suku ke n</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="rumusnyaCont rumusKe2">
                    <h1 className="deretHitung ">Rumus 2</h1>
                    <div className="rumusnya">
                        Sn = n/2 {"(2a + (n-1))"}b
                    </div>
                    <div className="ket">
                        <p>Keterangan :</p>
                        <div className="isiKeterangan">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Sn</td>
                                        <td>=</td>
                                        <td>Jumlah hingga suku ke n</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>=</td>
                                        <td>suku pertama</td>
                                    </tr>
                                    <tr>
                                        <td>b</td>
                                        <td>=</td>
                                        <td>Pembeda</td>
                                    </tr>
                                    <tr>
                                        <td>n</td>
                                        <td>=</td>
                                        <td>indeks suku ke n</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hitungnya">
            <DeretHitungRumus/>            
        </div>
    </div>
  )
}
export default dynamic (() => Promise.resolve(DeretHitung), {ssr: false})
