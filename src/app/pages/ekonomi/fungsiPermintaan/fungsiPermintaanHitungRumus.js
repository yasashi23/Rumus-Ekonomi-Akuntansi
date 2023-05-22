"use client"
import React, { useState } from 'react'

export default function FungsiPermintaanRumus() {
    const [harga1, setHarga1] = useState()
    const [harga2, setHarga2] = useState()
    const [permintaan1, setPermintaan1] = useState()
    const [permintaan2, setPermintaan2] = useState()
    const [hitung, setHitung] = useState(false)
    const [remove,setRemove] = useState(false)
    const [moduleHidden, setModuleHidden] = useState(false)
    const [pilihRumus, setPilihRumus] = useState('rumus1')
    console.log(typeof harga2 != 'string' && typeof permintaan1 != 'string' && typeof permintaan2 != 'string' )
    console.log(typeof harga2)


    
    const pilihRumus1Atau2 = (pilihRumus === 'rumus1')
    const Konstantanya = (((harga2-harga1)*(-permintaan1))+(-1*((permintaan2-permintaan1)*(-harga1))))/(permintaan2-permintaan1)

    

    console.log('pilih rumusnya adalah : ',pilihRumus1Atau2)
    // check if string there is no numbe 
    function checkStringNumber(s){
        const result = /^[-0-9.]+$/.test(s)
        return result
    }

    function littleLetter(s) {
        const hslnya =(<span className='text-xs'>{s}</span>)
        return hslnya
    }
function jikaMinus(minus) {
    const checkMinus = minus.toString().includes("-")
    if (checkMinus) {
        return minus.toString().replace("-"," - ")
    }
    else{
        return ` + ${minus}`
    }
}

        function negativeCheck(up,down) {
            const upAdaNegatif = up.toString().includes("-")
            const downAdaNegatif = down.toString().includes("-")
            const keduanyaNegative = upAdaNegatif && downAdaNegatif
            const hasil = {atas:up, bawah:down}
            if(upAdaNegatif || downAdaNegatif || keduanyaNegative) {
                if(upAdaNegatif) {
                    const hasil = {atas:Number(up.toString().replace("-","")), bawah:down} 
                    return hasil   
                }if(downAdaNegatif) {
                    const hasil = {atas:up, bawah:Number(down.toString().replace("-",""))}  
                    return hasil
                }else {
                    const hasil = {atas:Number(up.toString().replace("-","")), bawah:Number(down.toString().replace("-",""))} 
                    return hasil
                }
            }else{
                return hasil
            }

        }
        function pch2(num) {
          const atas = num.atasNew
          const bawah = num.bawahNew  
          const atasReal = num.atasLast
          const bawahReal = num.bawahLast

        if(atas%2===0 && bawah%2===0){
            const checkSisaAtas = (atas%bawah === 0)
            const checkSisaBawah = (bawah%atas === 0)
            if(atas > bawah) {
                if(checkSisaAtas){
                    const mauY = {atas:(atasReal/bawah),per:false,baris:'52'}
                    return mauY
                }else{
                    const hsl = atas%bawah
                    const selisih = bawah-(1*(hsl))
                    const mauY={atas:(atasReal/selisih),bawah:(bawahReal/selisih),per:true,baris:'57'}
                    return mauY
                    // return `${atas/selisih}/${bawah/selisih}`
                }
            }
            else {
                if(checkSisaBawah) {
                    const mauY={atas:(atasReal/atas),bawah:(bawahReal/atas),per:true,baris:'64'}
                    return mauY
                }else {
                    const hsl = bawah%atas
                    const selisih = atas-(1*(hsl))
                    const mauY={atas:(atasReal/selisih),bawah:(bawahReal/selisih),per:true,baris:'69'}
                    return mauY
                }
            }
        }else {
            const mauY={atas,bawah,per:true,baris:'74'}
            return mauY
        }

    }

    const iniHasilPersamaan = negativeCheck((harga2 - harga1),(permintaan2-permintaan1))

    const rulePembagian = {
        atasNew: iniHasilPersamaan.atas,
        bawahNew: iniHasilPersamaan.bawah,
        atasLast: (harga2 - harga1),
        bawahLast: (permintaan2-permintaan1)
    }


    

    console.log("101 : ",pch2(rulePembagian))
    
    function hitungRumus(){

            if(typeof harga2 != 'undefined' && typeof permintaan1 != 'undefined' && typeof permintaan2 != 'undefined' && checkStringNumber(harga2) && checkStringNumber(permintaan1) && checkStringNumber(permintaan2)){
                setHitung(true)
                console.log('hitung')
                console.log(Number.isNaN(permintaan1))
                setRemove(false)
            }
             else{
                setHitung(false) 
                setModuleHidden(true)
                console.log(typeof permintaan2)
                console.log('else hitung')
            }
       
    }
    function hapusInputan() {
        setPermintaan2(undefined)
        setPermintaan1(undefined)
        setHarga2(undefined)
        setHarga1(undefined)
        setHitung(false)
        setRemove(true)

    }
    function closeModule() {
        setModuleHidden(false)
    }
    console.log(permintaan2)
  return (
    <div>
        <div className="contFungsiPermintaanHitung mt-5">
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
                                    <td>P{littleLetter(1)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={harga1 || ''} onChange={(e) => setHarga1(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>P{littleLetter(2)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={harga2 || ''} onChange={(e) => setHarga2(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>Qd{littleLetter(1)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={permintaan1 || ''} onChange={(e) => setPermintaan1(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>Qd{littleLetter(2)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={permintaan2 || ''} onChange={(e) => setPermintaan2(e.target.value)} disabled={hitung}/></td>
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
                                <div className={hitung ? 'block' : 'hidden'}>
                                    <tr className='tableJawaban'>
                                        <td className='signLine'>P - {harga1}</td>
                                        <td className='samaDengan' rowSpan={2}> = </td>
                                        <td className='signLine'>Qd - {permintaan1}</td>
                                    </tr>
                                    <tr>
                                        <td>{harga2} - {harga1}</td>
                                        <td>{permintaan2} - {permintaan1}</td>
                                    </tr>
                                    <tr className='tableJawaban'>
                                        <td className='signLine'>P - {harga1}</td>
                                        <td className='samaDengan' rowSpan={2}> = </td>
                                        <td className='signLine'>Qd - {permintaan1}</td>
                                    </tr>
                                    <tr>
                                        <td>{harga2-harga1}</td>
                                        <td>{permintaan2-permintaan1}</td>
                                    </tr>
                                    <tr>
                                        <td>{permintaan2-permintaan1}(P - {harga1})</td>
                                        <td>=</td>
                                        <td>{harga2 - harga1} (Qd - {permintaan1})</td>
                                    </tr>
                                    <tr>
                                        <td>{permintaan2-permintaan1}P {jikaMinus((permintaan2-permintaan1)*(-harga1))}</td>
                                        <td>=</td>
                                        <td>{harga2 - harga1}Qd  {jikaMinus((harga2-harga1)*(-permintaan1))}</td>
                                    </tr>
                                    <tr>
                                        <td>{permintaan2-permintaan1}P</td>
                                        <td>=</td>
                                        <td>{harga2 - harga1}Qd {jikaMinus((harga2-harga1)*(-permintaan1))} {jikaMinus(-1*((permintaan2-permintaan1)*(-harga1)))}</td>
                                    </tr>
                                    <tr>
                                        <td>{permintaan2-permintaan1}P</td>
                                        <td>=</td>
                                        <td>{harga2 - harga1}Qd {jikaMinus(((harga2-harga1)*(-permintaan1))+(-1*((permintaan2-permintaan1)*(-harga1))))}</td>
                                    </tr>


                                    {/* PERSAMAANNYA */}
                                    <tr>
                                        <td rowSpan={2} className='align-middle'>P</td>
                                        <td rowSpan={2} className='align-middle'>=</td>
                                        <td className='jawaban signLine'>{harga2 - harga1}Qd {jikaMinus(((harga2-harga1)*(-permintaan1))+(-1*((permintaan2-permintaan1)*(-harga1))))}
                                        </td>
                                    </tr>
                                        
                                    <tr>
                                        <td colSpan={2} className='jawaban-pernya'>{permintaan2-permintaan1}</td>   
                                    </tr>

                                    {/* PERSAMAANNYA TUTUP*/}


                                   <tr>
                                        <td>P</td>
                                        <td>=</td>
                                        <td>{(harga2 - harga1)/(permintaan2-permintaan1)}Qd {jikaMinus((((harga2-harga1)*(-permintaan1))+(-1*((permintaan2-permintaan1)*(-harga1))))/(permintaan2-permintaan1))}</td>
                                    </tr>

                                    {/* Grafik kartesiusnya */}
                                    <tr>
                                        <td colSpan={3} className='font-bold'>Titik Grafik Kartesiusnya</td>
                                    </tr>
                                    <tr>
                                        <td>P = (0 , {Konstantanya})</td>
                                        <td></td>
                                        <td>Qd = ({(-1*Konstantanya)/((harga2 - harga1)/(permintaan2-permintaan1))},0)</td>
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
