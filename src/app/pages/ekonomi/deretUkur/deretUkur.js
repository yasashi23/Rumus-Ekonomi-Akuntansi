"use client"
import { useState } from 'react'
import DeretUkurRumus from './deretUkurRumus'
import dynamic from "next/dynamic";

function DeretUkur({style}) {
    const [pilihRumus,setPilihRumus] = useState(true)

  return (
    <div style={style}>
        <div className="cont-deretUkur">
            <h1 className="text-center mb-6">Deret Ukur</h1>
            <div className="rumus flex justify-center">
                <div className="rumusnyaCont rumusKe1 rumusDeretUkur">
                    <h1>Rumus 1</h1>
                    <div className="rumusnya flex">
                        Sn = a(r<span className='text-base'>(n-1)</span>)
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
                                    <td>r</td>
                                    <td>=</td>
                                    <td>Rasio / Pengganda</td>
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

                    <div className='pilihRasio flex gap-4'>
                        <p className={pilihRumus === true ? 'opacity-100' : 'opacity-25'} onClick={() => setPilihRumus(true)}>r{" < 1"}</p>
                        <p className={pilihRumus === true ? 'opacity-25' : 'opacity-100'} onClick={() => setPilihRumus(false)}>r{" > 1"}</p>
                    </div>

                    <div className="rumusnya">
                        {pilihRumus === true ? (<div className='flex'>Sn = a(1-r<span className='text-base'>n</span>)/1 - r</div>) : (<div className='flex'>Sn = a(r<span className='text-base'>n</span>-1)/r - 1</div>) }
                        
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
                                    <td>r</td>
                                    <td>=</td>
                                    <td>Rasio / Pengganda</td>
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
            <DeretUkurRumus/>            
        </div>
    </div>
  )
}
export default dynamic (() => Promise.resolve(DeretUkur), {ssr: false})
