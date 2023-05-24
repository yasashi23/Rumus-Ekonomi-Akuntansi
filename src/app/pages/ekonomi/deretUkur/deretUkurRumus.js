"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";

function DeretUkurRumus() {
    const [Sn, setSn] = useState('?')
    const [sukuPertama, setSukuPertama] = useState()
    const [rasio, setRasio] = useState()
    const [indexSuku, setIndexSuku] = useState()
    const [hitung, setHitung] = useState(false)
    const [remove,setRemove] = useState(false)
    const [moduleHidden, setModuleHidden] = useState(false)
    const [pilihRumus, setPilihRumus] = useState('rumus1')
    const [pilihRasio, setPilihRasio] = useState(true)
    

    const rumus2Rasio1Tambahan = (pilihRasio ? 
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td className='flex'>{sukuPertama}({1-(rasio**indexSuku)})/{1-rasio}</td>
                                    </tr> 
                                    : 
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td className='flex'>{sukuPertama}({(rasio**indexSuku)-1})/{rasio-1}</td>  
                                    </tr>                                     
                                    ) 
    const pilihRumus1Atau2 = (pilihRumus === 'rumus1')
    const rasio1Atau2 = (pilihRasio === 'r>1')

    
    // check if string there is no numbe 
    function checkStringNumber(s){
        const result = /^[0-9.]+$/.test(s)
        return result
    }
    function hitungRumus(){

            if(typeof sukuPertama != 'undefined' && typeof rasio != 'undefined' && typeof indexSuku != 'undefined' && checkStringNumber(sukuPertama) && checkStringNumber(rasio) && checkStringNumber(indexSuku)){
                setHitung(true)
                
                
                setRemove(false)
            }
             else{
                setHitung(false) 
                setModuleHidden(true)
                
                
            }
       
    }
    function hapusInputan() {
        setIndexSuku(undefined)
        setRasio(undefined)
        setSukuPertama(undefined)
        setHitung(false)
        setRemove(true)

    }
    function closeModule() {
        setModuleHidden(false)
    }
    
  return (
    <div>
        <div className="contHitung mt-5">
            <h1 className='text-center text-xl font-semibold'>Hitung (deret ukur) Disini</h1>

            <div className={`contBoxWarning ${moduleHidden ? 'flex' : 'hidden'}`}>
                <div className='box-warning deretHitung-warning'>
                    <div className="box">
                        <h1 className='text-center font-bold'>Kesalahan input !!!</h1>
                        <h3 className='text-center font-normal text-sm'>anda memasuki selain angka<br/>atau inputan masih kosong</h3>
                        <button className='btnBrand text-center' onClick={closeModule}>Yoi</button>
                    </div>
                </div>
            </div>

            <div className="input-deretHtg flex justify-center items-center flex-col">
                <div className="flex gap-2 justify-center items-center my-4">
                <label htmlFor="Rumus">Pilih rumus</label>
                <select name="Rumus" id="Rumus" className='selectDeretHtg' value={pilihRumus} onChange={(e) => setPilihRumus(e.target.value)}>
                    <option value="rumus1">Rumus 1</option>
                    <option value="rumus2">Rumus 2</option>
                </select>
                </div>
            <p className='keterangan-deretHtg text-center text-sm mb-4'>Masukkan nilai diketahui dan <br/>kosongkan jika nilai tsb ditanyakan</p>
            </div>
            <div className="rumusDanJawabannya flex justify-center items-top gap-6">
                <div className="deretHtg-dik flex justify-top flex-col items-center ">
                        <table>
                                <tr>
                                    <th colSpan={3}>
                                        Diketahui : 
                                    </th>
                                </tr>
                                <tr>
                                    <td>Sn</td>
                                    <td>=</td>
                                    <td><input type="text" value={Sn} onChange={(e) => setSn(e.target.value)} disabled/></td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>=</td>
                                    <td><input type="text" value={sukuPertama || ''} onChange={(e) => setSukuPertama(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>r</td>
                                    <td>=</td>
                                    <td><input type="text" value={rasio || ''} onChange={(e) => setRasio(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>n</td>
                                    <td>=</td>
                                    <td><input type="text" value={indexSuku || ''} onChange={(e) => setIndexSuku(e.target.value)} disabled={hitung}/></td>
                                </tr>
                        </table>
                </div>
                <div className="rumusJwb flex flex-col justify-top">
                        <table>
                                <tr>
                                    <th colSpan={3}>
                                        Jawabannya : 
                                    </th>
                                </tr>
                                {pilihRumus1Atau2 ? "" :
                                    <tr>
                                       <td className='flex items-center gap-3 justify-center' colSpan={3}>
                                        <p className={`cursor-pointer ${pilihRasio === true ? 'opacity-100' : 'opacity-25'}`} onClick={() => setPilihRasio(true)}>r{" < 1"}</p>
                                        <p className={`cursor-pointer ${pilihRasio === true ? 'opacity-25' : 'opacity-100'}`} onClick={() => setPilihRasio(false)}>r{" > 1"}</p>
                                       </td>
                                    </tr>
                                }
                                <div className={hitung ? 'block' : 'hidden'}>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>

                                        {pilihRumus1Atau2 ? 
                                            <td className='flex'>{sukuPertama} ({rasio}<span className='text-xs'>({indexSuku}-1) </span>)</td> 
                                            : 
                                            pilihRasio ? 
                                            <td className='flex'>{sukuPertama}(1-({rasio}<span className='text-xs'>{indexSuku}</span>))/1-{rasio}</td> 
                                            : 
                                            <td className='flex'>{sukuPertama}(({rasio}<span className='text-xs'>{indexSuku}</span>)-1)/{rasio}-1</td> }    
                                    </tr>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
 
                                        {pilihRumus1Atau2 ? 
                                            <td className='flex'>{sukuPertama} ({rasio}<span className='text-xs'>{indexSuku-1} </span>)</td>
                                            :
                                            pilihRasio ? 
                                            <td className='flex'>{sukuPertama}(1-{rasio**indexSuku})/{1-rasio}</td> 
                                            :
                                            <td className='flex'>{sukuPertama}({rasio**indexSuku}-1)/{rasio-1}</td>                        
                                        
                                        }
                                        
                                    </tr>
                                    {pilihRumus1Atau2 ? '' : rumus2Rasio1Tambahan}
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        {pilihRumus1Atau2 ? 
                                            <td className='flex'>{sukuPertama} ({rasio**(indexSuku-1)})</td>
                                            :
                                            pilihRasio ? 
                                            <td className='flex'>{sukuPertama*(1-(rasio**indexSuku))}/{1-rasio}</td>
                                            : 
                                            <td className='flex'>{sukuPertama*((rasio**indexSuku)-1)}/{rasio-1}</td>                       
                                        
                                        }
                                    </tr>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        {pilihRumus1Atau2 ? 
                                            <td className='flex'>{sukuPertama*(rasio**(indexSuku-1))} </td>
                                            :
                                            pilihRasio ? 
                                            <td className='flex'>{(sukuPertama*(1-(rasio**indexSuku)))/(1-rasio)}</td>
                                            : 
                                            <td className='flex'>{(sukuPertama*((rasio**indexSuku)-1))/(rasio-1)}</td>                        
                                        
                                        }
                                    </tr>
                                </div>
                        </table>

                </div>
            </div>
            <div className='flex items-center justify-center gap-6 pt-4'>
                <button className='btnBrand' onClick={hitungRumus}>hitung</button>
                <button className='btnBrand' onClick={hapusInputan}>bersihkan</button>
            </div>
        </div>
    
    </div>
  )
}

export default dynamic (() => Promise.resolve(DeretUkurRumus), {ssr: false})
