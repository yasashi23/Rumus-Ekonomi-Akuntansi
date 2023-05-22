"use client"
import { useState } from 'react'
import FungsiPermintaanRumus from './fungsiPermintaanHitungRumus'

export default function FungsiPermintaan() {


    function littleLetter(s) {
        const hslnya =(<span className='text-base'>{s}</span>)
        return hslnya
    }

  return (
    <div>
        <div className="cont-fungsiPermintaan">
            <h1 className="text-center mb-6">Fungsi Permintaan</h1>
            <div className="rumus flex justify-center">
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
