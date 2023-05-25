"use client"
import { useState } from 'react'
import FungsiPermintaanRumus from './fungsiPermintaanHitungRumus';

import dynamic from "next/dynamic";
import DropDown from '../../componentTambahan/dropDown';

function FungsiPermintaan({style}) {

    const [aktif, setAktif] = useState(false)

    function aktifkan() {
        setAktif(!aktif)
    }

    function littleLetter(s) {
        const hslnya =(<span className='text-base'>{s}</span>)
        return hslnya
    }

  return (
    <div style={style}>
        <div className="cont-fungsiPermintaan cont-gabFungsi">
            <h1 className="text-center mb-6">Fungsi Permintaan</h1>
            <DropDown func={aktifkan} val={aktif}/>
            <div className={`rumus flex justify-center penjelasanRumusPermintaan ${aktif ? 'on' : ''}`}>
                <div className="rumusnyaCont rumusKe1">
                    <h1>Rumus</h1>
                    <div className="rumusnya">
                        <table>
                            <tr>
                                <td className='signLine'>P - P{littleLetter(1)}</td>
                                <td className='samaDengan' rowSpan={2}> = </td>
                                <td className='signLine'>Qd - Qd{littleLetter(1)}</td>
                            </tr>
                            <tr>
                                <td>P{littleLetter(2)} - P{littleLetter(1)}</td>
                                <td>Qd{littleLetter(2)} - Qd{littleLetter(1)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="ket">
                        <p>Keterangan :</p>
                        <div className="isiKeterangan">
                            <table>
                                <tr>
                                    <td>P</td>
                                    <td>=</td>
                                    <td>Harga</td>
                                </tr>
                                <tr>
                                    <td>Qd</td>
                                    <td>=</td>
                                    <td>Permintaan</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hitungnya">
            <FungsiPermintaanRumus/>            
        </div>
    </div>
  )
}
export default dynamic (() => Promise.resolve(FungsiPermintaan), {ssr: false})
