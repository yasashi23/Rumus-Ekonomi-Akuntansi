"use client"
import React, { useState } from 'react'

export default function DeretUkurHitung() {
    const [Sn, setSn] = useState('?')
    const [sukuPertama, setSukuPertama] = useState()
    const [pembeda, setPembeda] = useState()
    const [indexSuku, setIndexSuku] = useState()
    const [hitung, setHitung] = useState(false)
    const [remove,setRemove] = useState(false)
    const [moduleHidden, setModuleHidden] = useState(false)
    console.log(typeof sukuPertama != 'string' && typeof pembeda != 'string' && typeof indexSuku != 'string' )
    console.log(typeof sukuPertama)

    // check if string there is no numbe 
    function checkStringNumber(s){
        const result = /\D/.test(s)
        return result
    }

    function hitungRumus(){

            if(typeof sukuPertama != 'undefined' && typeof pembeda != 'undefined' && typeof indexSuku != 'undefined' && !checkStringNumber(sukuPertama) && !checkStringNumber(pembeda) && !checkStringNumber(indexSuku)){
                setHitung(true)
                console.log('hitung')
                console.log(Number.isNaN(pembeda))
                setRemove(false)
            }
             else{
                setHitung(false) 
                setModuleHidden(true)
                console.log(typeof indexSuku)
                console.log('else hitung')
            }
       
    }
    function hapusInputan() {
        setIndexSuku(undefined)
        setPembeda(undefined)
        setSukuPertama(undefined)
        setHitung(false)
        setRemove(true)

    }
    function closeModule() {
        setModuleHidden(false)
    }
    console.log(indexSuku)
  return (
    <div>
        <div className="contHitung mt-5">
        
            <h1 className='text-center text-3xl font-semibold'>Hitung Disini</h1>

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
                <select name="Rumus" id="Rumus" className='selectDeretHtg'>
                    <option value="Rumus1">Rumus 1</option>
                    <option value="Rumus2">Rumus 2</option>
                </select>
                </div>
            <p className='text-center text-sm mb-4'>Masukkan nilai diketahui dan <br/>kosongkan jika nilai tsb ditanyakan</p>
            </div>
            <div className="rumusDanJawabannya flex justify-center items-end gap-6">
                <div className="deretHtg-dik flex justify-center flex-col items-center ">
                        <table>
                                <tr>
                                    <th colSpan={3}>
                                        Diketahui : 
                                    </th>
                                </tr>
                                <tr>
                                    <td>Sn</td>
                                    <td>=</td>
                                    <td><input type="text" value={Sn} onChange={(e) => setSn(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>=</td>
                                    <td><input type="text" value={sukuPertama || ''} onChange={(e) => setSukuPertama(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td>b</td>
                                    <td>=</td>
                                    <td><input type="text" value={pembeda || ''} onChange={(e) => setPembeda(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td>n</td>
                                    <td>=</td>
                                    <td><input type="text" value={indexSuku || ''} onChange={(e) => setIndexSuku(e.target.value)} /></td>
                                </tr>
                        </table>
                </div>
                <div className="rumusJwb flex flex-col justify-end">
                        <table>
                                <tr>
                                    <th colSpan={3}>
                                        Jawabannya : 
                                    </th>
                                </tr>
                                <div className={hitung ? 'block' : 'hidden'}>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td>{sukuPertama} + {`(${(indexSuku)}-1)`} {pembeda} </td>
                                    </tr>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td>{sukuPertama} + {`(${(indexSuku-1)})`} {pembeda}</td>
                                    </tr>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td>{sukuPertama} + {`${(indexSuku-1)*pembeda}`}</td>
                                    </tr>
                                    <tr>
                                        <td>S<span>{indexSuku}</span></td>
                                        <td>=</td>
                                        <td>{Number(sukuPertama) + ((indexSuku-1)*pembeda)} </td>
                                    </tr>
                                </div>
                        </table>

                </div>
            </div>
            <div className='flex items-center justify-center gap-6'>
                <button className='btnBrand' onClick={hitungRumus}>hitung</button>
                <button className='btnBrand' onClick={hapusInputan}>bersihkan</button>
            </div>
        </div>
    
    </div>
  )
}
