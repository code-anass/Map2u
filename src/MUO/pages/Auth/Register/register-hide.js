{/*SCRIPT*/}

function hideShow(event){
    // Get the value
    let value = event.value;

    if(value == "Swasta"){
        document.getElementById("swasta").style.display = "flex";
        document.getElementById("persekutuan").style.display = "none";
        document.getElementById("institusi").style.display = "none";
        document.getElementById("pbt").style.display = "none";
        document.getElementById("negeri").style.display = "none";
    }
    else if(value == "Jabatan / Agensi / Badan Berkanun / Persekutuan"){
        document.getElementById("swasta").style.display = "none";
        document.getElementById("persekutuan").style.display = "flex";
        document.getElementById("institusi").style.display = "none";
        document.getElementById("pbt").style.display = "none";
        document.getElementById("negeri").style.display = "none";
    }
    else if(value == "Institut Pengajian Tinggi (IPT)"){
        document.getElementById("swasta").style.display = "none";
        document.getElementById("persekutuan").style.display = "none";
        document.getElementById("institusi").style.display = "flex";
        document.getElementById("pbt").style.display = "none";
        document.getElementById("negeri").style.display = "none";
    }
    else if(value == "Pihak Berkuasa Tempatan (PBT)"){
        document.getElementById("swasta").style.display = "none";
        document.getElementById("persekutuan").style.display = "none";
        document.getElementById("institusi").style.display = "none";
        document.getElementById("pbt").style.display = "flex";
        document.getElementById("negeri").style.display = "none";
    }
    else if(value == "Jabatan / Agensi / Badan Berkanun / Negeri"){
        document.getElementById("swasta").style.display = "none";
        document.getElementById("persekutuan").style.display = "none";
        document.getElementById("institusi").style.display = "none";
        document.getElementById("pbt").style.display = "none";
        document.getElementById("negeri").style.display = "flex";
    }
    else{
        document.getElementById("swasta").style.display = "none";
        document.getElementById("persekutuan").style.display = "none";
        document.getElementById("institusi").style.display = "none";
        document.getElementById("pbt").style.display = "none";
        document.getElementById("negeri").style.display = "none";
    }
}
