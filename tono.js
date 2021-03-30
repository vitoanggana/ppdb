const tonoInput = document.getElementById('tono')
const umurInput = document.getElementById('umur')
const siswaInput = document.getElementById('siswa')

function submitKeDatabase(e){
    e.preventDefault()

    firebase.firestore().collection('siswa').doc('11806690').set({
        nama: tonoInput.value,
        umur: umurInput.value,

    }).then(function(){
        alert('BERES, CEK DATABASE')
    })
}

siswaInput.addEventListener('submit', submitKeDatabase)

console.log()