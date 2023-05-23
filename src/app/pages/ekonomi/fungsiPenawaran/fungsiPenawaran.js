"use client"
import { useState } from 'react'
import FungsiPenawaranRumus from './fungsiPenawaranHitungRumus'

export default function FungsiPenawaran() {


    function littleLetter(s) {
        const hslnya =(<span className='text-base'>{s}</span>)
        return hslnya
    }

  return (
    <div>
        <div className="cont-gabFungsi">
            <h1 className="text-center mb-6">Fungsi Penawaran</h1>
            <div className="rumus flex justify-center">
                <div className="rumusnyaCont rumusKe1">
                    <h1>Rumus</h1>
                    <div className="rumusnya">
                        <table>
                            <tr>
                                <td className='signLine'>P - P{littleLetter(1)}</td>
                                <td className='samaDengan' rowSpan={2}> = </td>
                                <td className='signLine'>Qs - Qs{littleLetter(1)}</td>
                            </tr>
                            <tr>
                                <td>P{littleLetter(2)} - P{littleLetter(1)}</td>
                                <td>Qs{littleLetter(2)} - Qs{littleLetter(1)}</td>
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
                                    <td>Qs</td>
                                    <td>=</td>
                                    <td>Penawaran</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hitungnya">
            <FungsiPenawaranRumus/>            
        </div>
    </div>
  )
}