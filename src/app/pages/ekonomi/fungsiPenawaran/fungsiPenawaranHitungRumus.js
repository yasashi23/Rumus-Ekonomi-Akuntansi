"use client"
import React, { useState } from 'react'

export default function FungsiPenawaranRumus() {
    const [harga1, setHarga1] = useState()
    const [harga2, setHarga2] = useState()
    const [penawaran1, setPenawaran1] = useState()
    const [penawaran2, setPenawaran2] = useState()
    const [hitung, setHitung] = useState(false)
    const [remove,setRemove] = useState(false)
    const [moduleHidden, setModuleHidden] = useState(false)
    const [bentukPecahan,setBentukPecahan] = useState({})
    const [konstaPecahan,setKonstaPecahan] = useState({})
    const [minusHasil,setMinusHasil] =useState({})
    const [pilihRumus, setPilihRumus] = useState('rumus1')


    
    const pilihRumus1Atau2 = (pilihRumus === 'rumus1')
    const Konstantanya = (((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1))))/(penawaran2-penawaran1)

    

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
        let minusNew = parseFloat(minus).toLocaleString('en', { useGrouping: true });
        return minusNew.toString().replace("-"," - ")
    }
    else{
        let minusNew = parseFloat(minus).toLocaleString('en', { useGrouping: true });
        return ` + ${minusNew}`
    }
}
function jikaMinusHasil(minus) {
    const checkMinus = minus.toString().includes("-")
    if (checkMinus) {
        const isi = {
            angka:minus.toString().replace("-",""),
            opt:"-",
            hsl:minus
        }
        return isi
    }
    else{
        const isi = {
            angka:minus.toString(),
            opt:"+",
            hsl:minus
        }
        return isi
    }
}
function tambahKoma(x) {
    const ini = x*1
    return ini.toLocaleString('en', { useGrouping: true });

}

        function negativeCheck(up,down) {
            const upAdaNegatif = up.toString().includes("-")
            const downAdaNegatif = down.toString().includes("-")
            const keduanyaNegative = upAdaNegatif && downAdaNegatif
            const hasil = {atas:up, bawah:down,ket:'biasa'}
            if(upAdaNegatif || downAdaNegatif || keduanyaNegative) {
                if(upAdaNegatif) {
                    const hasil = {atas:Number(up.toString().replace("-","")), bawah:down,ket:'upAda'} 
                    return hasil   
                }if(downAdaNegatif) {
                    const hasil = {atas:up, bawah:Number(down.toString().replace("-","")),ket:'downAda'}  
                    return hasil
                }else {
                    const hasil = {atas:Number(up.toString().replace("-","")), bawah:Number(down.toString().replace("-","")),ket:'doubleAda'} 
                    return hasil
                }
            }else{
                return hasil
            }

        }
    //     function pch2(num) {
    //       const atas = (num.atasNew < 0 ? (num.atasNew*-1) : num.atasNew)
    //       const bawah = (num.bawahNew < 0 ? (num.bawahNew*-1) : num.bawahNew)
    //       const atasReal = num.atasNew
    //       const bawahReal = num.bawahNew

    //     if(atas%2===0 && bawah%2===0){
    //         const checkSisaAtas = (atas%bawah === 0)
    //         const checkSisaBawah = (bawah%atas === 0)
    //         if(atas > bawah) {
    //             if(checkSisaAtas){
    //                 const mauY = {atas:(atasReal/bawah),per:false,baris:'52'}
    //                 return mauY
    //             }else{
    //                 const hsl = atas%bawah
    //                 const selisih = bawah-(1*(hsl))
    //                 const mauY={atas:(atasReal/hsl),bawah:(bawahReal/hsl),per:true,baris:'57',selisih,hsl,bawahr:bawah}
    //                 return mauY
    //                 // return `${atas/selisih}/${bawah/selisih}`
    //             }
    //         }
    //         else {
    //             if(checkSisaBawah) {
    //                 const mauY={atas:(atasReal/atasReal),bawah:(bawahReal/atasReal),per:true,baris:'64'}
    //                 return mauY
    //             }else {
    //                 const hsl = bawah%atas
    //                 const selisih = atas-(1*(hsl))
    //                 const mauY={atas:(atasReal/hsl),bawah:(bawahReal/hsl),per:true,baris:'69'}
    //                 return mauY
    //             }
    //         }
    //     }else {
    //         const mauY={atas,bawah,per:true,baris:'74'}
    //         return mauY
    //     }

    // }
        function pch2(num) {
          const atas = Math.abs(num.atasNew)
          const bawah = Math.abs(num.bawahNew)
          const atasReal = num.atasNew
          const bawahReal = num.bawahNew

        if(atas%2===0 && bawah%2===0){
            const checkSisaAtas = (atas%bawah === 0)
            const checkSisaBawah = (bawah%atas === 0)
            if(atas > bawah) {
                if(checkSisaAtas){
                    const mauY = {atas:(atasReal/bawah),per:false,baris:'52',atasP:Math.abs((atasReal/bawah))}
                    return mauY
                }else{
                    const hsl = rubahKePecahan(num)
                    const mauY={atas:hsl.atas,bawah:hsl.bawah,per:true,baris:'57',atasP:Math.abs((atasReal/bawah))}
                    return mauY
                }
            }
            else {
                if(checkSisaBawah) {
                    const mauY={atas:(atasReal/atasReal),bawah:(bawahReal/atasReal),per:true,baris:'64',atasP:Math.abs((atasReal/bawah))}
                    return mauY
                }else {
                    const hsl = rubahKePecahan(num)
                    const mauY={atas:hsl.atas,bawah: hsl.bawah ,per:true,baris:'69',atasP:Math.abs((atasReal/bawah))}
                    return mauY
                }
            }
        }else {
            const hsl = rubahKePecahan(num)
            const mauY={atas:hsl.atas,bawah: hsl.bawah,per:true,baris:'74',atasP:Math.abs((atasReal/bawah))}
            return mauY
        }

    }

    function rubahKePecahan(x) {
  const tolerance = 1.0e-6;
  let numerator = 1;
  let denominator = 1;
  let decimal = x.atasNew/x.bawahNew;
  let error = Math.abs(decimal - numerator / denominator);
  while (error > tolerance) {
    if (numerator / denominator < decimal) {
      numerator++;
    } else {
        
        denominator++;
      numerator = Math.round(decimal * denominator);
    }
    error = Math.abs(decimal - numerator / denominator);
  }
  const akhir = {atas:numerator, bawah:denominator}
  return akhir;
}


    const untukKonstanta = negativeCheck((((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1)))), (penawaran2-penawaran1))

    const rulePembagian = {
        atasNew: (harga2 - harga1),
        bawahNew: (-1*(penawaran2-penawaran1))
    }
        const rulePembagian2 = {
        atasNew: (((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1)))),
        bawahNew:  (-1*(penawaran2-penawaran1))
    }
    
    function hitungRumus(){

            if(typeof harga2 != 'undefined' && typeof penawaran1 != 'undefined' && typeof penawaran2 != 'undefined' && checkStringNumber(harga2) && checkStringNumber(penawaran1) && checkStringNumber(penawaran2)){
                setHitung(true)
                setRemove(false)
                setBentukPecahan(pch2(rulePembagian))
                setKonstaPecahan(pch2(rulePembagian2))
                setMinusHasil(jikaMinusHasil(((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1)))))
            }
             else{
                setHitung(false) 
                setModuleHidden(true)
            }
       
    }
    function hapusInputan() {
        setPenawaran2(undefined)
        setPenawaran1(undefined)
        setHarga2(undefined)
        setHarga1(undefined)
        setHitung(false)
        setRemove(true)
        setBentukPecahan({})
        setKonstaPecahan({})
        setMinusHasil({})        

    }
    function closeModule() {
        setModuleHidden(false)
    }
  return (
    <div>
        <div className="contFungsiPenawaranHitung cont-rmsFungsi mt-5">
            <h1 className='text-center text-xl font-semibold'>Hitung (fungsi penawaran) Disini</h1>

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
                                    <td>Qs{littleLetter(1)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={penawaran1 || ''} onChange={(e) => setPenawaran1(e.target.value)} disabled={hitung}/></td>
                                </tr>
                                <tr>
                                    <td>Qs{littleLetter(2)}</td>
                                    <td>=</td>
                                    <td><input type="text" value={penawaran2 || ''} onChange={(e) => setPenawaran2(e.target.value)} disabled={hitung}/></td>
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
                                        <td className='tdSetup right' rowSpan={2}>
                                            <table>
                                                <tr>
                                                    <td>P - {tambahKoma(harga1*1)}</td>
                                                </tr>
                                                <tr>
                                                    <td className='signLine2'>{tambahKoma(harga2*1)} - {tambahKoma(harga1*1)}</td>
                                                </tr> 
                                            </table>
                                        </td>
                                        <td className='samaDengan' rowSpan={2}> = </td>
                                        <td className='tdSetup left' rowSpan={2}>
                                            <table>
                                                <tr>
                                                    <td>Qs - {tambahKoma(penawaran1*1)}</td>
                                                </tr>
                                                <tr>
                                                    <td className='signLine2'>{tambahKoma(penawaran2*1)} - {tambahKoma(penawaran1*1)}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr></tr>

                                    {/* susunan rumusnya */}  


                                    <tr className='tableJawaban'>
                                        <td className='tdSetup right'>
                                            <table>
                                                <tr>
                                                    <td className='signLine'>P - {tambahKoma(harga1*1)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{tambahKoma(harga2-harga1)}</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td className='samaDengan' rowSpan={2}> = </td>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td className='signLine'>Qs - {tambahKoma(penawaran1*1)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{tambahKoma(penawaran2-penawaran1)}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr></tr>


                                    {/* susunan rumusnya tutup */}
                                    <tr>
                                        <td>{tambahKoma(penawaran2-penawaran1)}(P - {tambahKoma(harga1*1)})</td>
                                        <td>=</td>
                                        <td>{tambahKoma(harga2 - harga1)} (Qs - {tambahKoma(penawaran1*1)})</td>
                                    </tr>
                                    <tr>
                                        <td>{tambahKoma(penawaran2-penawaran1)}P {(jikaMinus((penawaran2-penawaran1)*(-harga1)))}</td>
                                        <td>=</td>
                                        <td>{tambahKoma(harga2 - harga1)}Qs  {jikaMinus((harga2-harga1)*(-penawaran1))}</td>
                                    </tr>
                                    <tr>
                                        <td>{tambahKoma(penawaran2-penawaran1)}P</td>
                                        <td>=</td>
                                        <td>{tambahKoma(harga2 - harga1)}Qs {jikaMinus((harga2-harga1)*(-penawaran1))} {jikaMinus(-1*((penawaran2-penawaran1)*(-harga1)))}</td>
                                    </tr>
                                    <tr>
                                        <td>{tambahKoma(penawaran2-penawaran1)}P</td>
                                        <td>=</td>
                                        <td>{tambahKoma(harga2 - harga1)}Qs {jikaMinus(((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1))))}</td>
                                    </tr>


                                    {/* PERSAMAANNYA */}
                                    <tr>
                                        <td rowSpan={2} className='align-middle'>P</td>
                                        <td rowSpan={2} className='align-middle'>=</td>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td className='jawaban signLine'>{tambahKoma(harga2 - harga1)}Qs {jikaMinus(((harga2-harga1)*(-penawaran1))+(-1*((penawaran2-penawaran1)*(-harga1))))}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className='jawaban-pernya'>{tambahKoma(-1*(penawaran2-penawaran1))}</td>   
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                        
                                    <tr></tr>

                                    {/* PERSAMAANNYA TUTUP*/}

                                    <tr>
                                        <td rowSPan="2">P</td>
                                        <td rowSPan="2">=</td>
                                        <td rowSpan={2}>
                                            <table>
                                                <tr>
                                                    {bentukPecahan.per ? <td className='lineKonstanta'>{bentukPecahan.atas}</td> : <td>{bentukPecahan.atas}</td> }

                                                    {bentukPecahan.per ? <td rowSpan="2" className='konstantaAda pl-2'>Qs</td> : <td>Qs</td>}
                                                
                                                    {bentukPecahan.per  ? <td rowSpan="2" className='konstantaAda'>{minusHasil.opt}</td> : <td>{minusHasil.opt}</td> }

                                                    {untukKonstanta.per ? <td className='konstantaAda'>{tambahKoma(konstaPecahan.atasP)}</td> : <td className='konstantaAda' rowSpan={2}>{tambahKoma(konstaPecahan.atasP)}</td>}
                                                </tr>
                                                <tr>
                                                    {bentukPecahan.per ? <td>{tambahKoma(bentukPecahan.bawah)}</td> : ''}
                                                    {untukKonstanta.per ? <td>{tambahKoma(konstaPecahan.bawah)}</td> : ''}
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr></tr>
                                    {/* yang harus di ubah */}

                                    {/* Grafik kartesiusnya */}
                                    <tr>
                                        <td colSpan={3} className='font-bold text-center'>Titik Grafik Kartesiusnya</td>
                                    </tr>
                                    <tr className='kartesius'>
                                        <td>P = (0 , {Konstantanya})</td>
                                        <td></td>
                                        <td>Qs = ({(-1*Konstantanya)/((harga2 - harga1)/(penawaran2-penawaran1))},0)</td>
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
