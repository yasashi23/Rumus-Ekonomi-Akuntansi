

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
                    const mauY = {atas:(atasReal/bawah),per:false,baris:'52'}
                    return mauY
                }else{
                    const hsl = rubahKePecahan(num)
                    const mauY={atas:hsl.atas,bawah:hsl.bawah,per:true,baris:'57'}
                    return mauY
                }
            }
            else {
                if(checkSisaBawah) {
                    const mauY={atas:(atasReal/atasReal),bawah:(bawahReal/atasReal),per:true,baris:'64'}
                    return mauY
                }else {
                    const hsl = rubahKePecahan(num)
                    const mauY={atas:hsl.atas,bawah: hsl.bawah ,per:true,baris:'69'}
                    return mauY
                }
            }
        }else {
            const hsl = rubahKePecahan(num)
            const mauY={atas:hsl.atas,bawah: hsl.bawah,per:true,baris:'74'}
            return mauY
        }

    }

    // console.log(pch2(rulePembagian))

    // // console.log(1000/(3000%1000))
    // // console.log(3000/(3000%1000))
    // console.log(-1000>-3000)
        const rulePembagian = {
        atasNew: 2077,
        bawahNew: -1500,
    }
    console.log(`${pch2(rulePembagian).atas}/${pch2(rulePembagian).bawah} ---- ${pch2(rulePembagian).baris}`)
    // console.log(pch2(rulePembagian))  
    // console.log(1500%(1500%(1500%(1500%(2066%1500)))))
    // console.log(2066%1500)

    // console.log(2090/(150-(2090%150)))
    // // console.log(2000/((2000%150)))
    // //     console.log(150/((2000%150)))
    // //     console.log((150-(2090%150)))

    // console.log(`2090%150 = ${150%(150%(150%(2030%150)))}, 2000%150 = ${150%(2000%150)}`)


    function cari(x,y) {
        let res = y % x
        let diBagi = []
        while(res !== 0) {
            // console.log("awal",res)
            res = 150 % res
            // console.log("akhir",res)
            diBagi.push(res)
        }
        console.log(diBagi)
        diBagi.pop()
        let jumlahDibagi = diBagi.length
        let iniAngkaPembagi = diBagi.slice((jumlahDibagi-1),jumlahDibagi)
        return iniAngkaPembagi[0]
    }

    // console.log(cari(150,2030))

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

// Example usage
console.log(rubahKePecahan(rulePembagian))


// console.log(8 - 4 / 2 + 1)