"use client"
import { useState } from 'react'
import DeretUkurHitung from './deretUkurHitung'

export default function DeretUkur() {

  return (
    <div>
        <div className="cont-deretUkur">
            <h1 className="text-center mb-6">Deret Ukur</h1>
            <div className="rumus flex justify-center">
                <div className="rumusnyaCont rumusKe1">
                    <h1>Rumus 1</h1>
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
                    <h1>Rumus 2</h1>
                    <div className="rumusnya">
                        Sn = n/2 + {"(2a + (n-1))"}b
                    </div>
                    <div className="ket">
                        <p>Keterangan :</p>
                        <div className="isiKeterangan">
                            <table>
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hitungnya">
            <DeretUkurHitung/>            
        </div>
    </div>
  )
}
