console.log('_______SPLICE___________')
        let x = [10, 50, 35, 60, 99, 100, 500]
        //Reiksmiu keitimas ir pasalinimas
        x.splice(3, 2)
        console.log(x)
        x.splice(3, 2, 'Tekstas', 'Martrynas')
        
        console.log(x)

        console.log('_______RUSIAVIMAS___________')
        
        //Masyvo rusiavimas
        let y = ['AB', 'AC', 'ACD', 'AA']
        //.sort() metodas isrusiuoja masyva didejimo tvarka
        y.sort() 
        console.log(y)
        //.reverse() metodas isrusiuoja masyva mazejimo tvarka
        y.reverse()
        console.log(y)

        console.log('_______MIN IR MAX___________')

        let z = [10, 50, 35, 60, 99, 100, 500]

        console.log( Math.max(...z) )
        console.log( Math.min(...z) )
        
        console.log('_______FUNKCIJA___________')
        
        function test(...param) {
            console.log(param)
        }

        //Perduodant masyva
        test(...z)

        //Perduodant argumentus
        test('Ananasai', 'Kompiuteris', 'Kava')

        console.log('_______FILTER___________')

        let w = [10, 50, 35, 60, 99, 100, 500]

        function filtravimas(skaicius, indeksas, masyvas) {
            return indeksas % 2 == 0
        }
        
        let filtered = w.filter(filtravimas)
        console.log(filtered)

        //callback funkcija
        function programa(callback) {
            callback('Argumentas 1', 'Argumentas 2', 'Argumentas 3')
        }

        programa( function(pirmas, antras, trecias) {
            console.log(pirmas)
            console.log(antras)
            console.log(trecias)
        } )

        console.log('_______MASYVO TIKRINIMAS___________')

        let o = [10, 50, 35, 60, 99, 100, 500]

        //Du variantai kaip patikrinti ar tokia reiksme masyve egzistuoja
        if(o.includes(60))
            console.log('Tokia reiksme yra')
        
            //.indexOf() grazina reiksmes indeksa masyve
        if(o.indexOf(60) != -1)
            console.log('Tokia reiksme yra')

        console.log('_______MASYVU PRIJUNGIMAI___________')

        //.concat() metodas sujungia du masyvus i viena
        let m = [90, 55, 60, 12, 30]

        let sujungtas_masyvas = o.concat(m)

        console.log(sujungtas_masyvas)
