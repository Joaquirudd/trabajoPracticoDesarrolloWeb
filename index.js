//Index
$(document).ready(function(){
    $(".imgindex2").mouseenter(function(){
        $(".imgindex2").animate({
            width: '350px',
            height: '450px'
        })
    })
    $(".imgindex2").mouseleave(function(){
        $(".imgindex2").animate({
            width: '300px',
            height: '400px'
        }) 
    })

    $(".imgindex3").mouseenter(function(){
        $(".imgindex3").animate({
            width: '350px',
            height: '450px'
        })
    })
    $(".imgindex3").mouseleave(function(){
        $(".imgindex3").animate({
            width: '300px',
            height: '400px'
        }) 
    })

    $(".imgindex4").mouseenter(function(){
        $(".imgindex4").animate({
            width: '350px',
            height: '450px'
        })
    })
    $(".imgindex4").mouseleave(function(){
        $(".imgindex4").animate({
            width: '300px',
            height: '400px'
        }) 
    })
})

//Quienes Somos

$(document).ready(function(){
    $(".img1-quienes-somos").mouseenter(function(){
        $(".img1-quienes-somos").animate({
            width: '300px',
        })
    })
    $(".img1-quienes-somos").mouseleave(function(){
        $(".img1-quienes-somos").animate({
            width: '500px',
        }) 
    });
});

$(document).ready(function(){
    $(".img2-quienes-somos").mouseenter(function(){
        $(".img2-quienes-somos").animate({
            width: '300px',
        })
    })
    $(".img2-quienes-somos").mouseleave(function(){
        $(".img2-quienes-somos").animate({
            width: '500px',
        }) 
    });
});


$(document).ready(function(){
    $(".img1-somos").mouseenter(function(){
        $(".img1-somos").animate({
            width: '300px',
            height: "250px"
        })
    })
    $(".img1-somos").mouseleave(function(){
        $(".img1-somos").animate({
            width: '200px',
            height: "200px"
        }) 
    });
});

$(document).ready(function(){
    $(".img2-somos").mouseenter(function(){
        $(".img2-somos").animate({
            width: '300px',
            height: "250px"
        })
    })
    $(".img2-somos").mouseleave(function(){
        $(".img2-somos").animate({
            width: '200px',
            height: "200px"
        }) 
    });
});

$(document).ready(function(){
    $(".img3-somos").mouseenter(function(){
        $(".img3-somos").animate({
            width: '300px',
            height: "250px"
        })
    })
    $(".img3-somos").mouseleave(function(){
        $(".img3-somos").animate({
            width: '200px',
            height: "200px"
        }) 
    });
});


$(document).ready(function(){
    $(".img4-somos").mouseenter(function(){
        $(".img4-somos").animate({
            width: '300px',
            height: "250px"
        })
    })
    $(".img4-somos").mouseleave(function(){
        $(".img4-somos").animate({
            width: '200px',
            height: "200px"
        }) 
    });
});

//Alquilar
$(".imgalquiler1").mouseenter(function()
    {
    $(".imgalquiler1").animate({
        width:'550px',
        height: '450px'
    })
});
$(".imgalquiler1").mouseleave(function(){
    $(".imgalquiler1").animate({
        width:'500px',
        height:'400px'
    })
});

$(".imgalquiler2").mouseenter(function()
    {
    $(".imgalquiler2").animate({
        width:'550px',
        height: '450px'
    })
});
$(".imgalquiler2").mouseleave(function(){
    $(".imgalquiler2").animate({
        width:'500px',
        height:'400px'
    })
});

$(".imgalquiler3").mouseenter(function()
    {
    $(".imgalquiler3").animate({
        width:'550px',
        height: '450px'
    })
});
$(".imgalquiler3").mouseleave(function(){
    $(".imgalquiler3").animate({
        width:'500px',
        height:'400px'
    })
});

$(".imgalquiler4").mouseenter(function()
    {
    $(".imgalquiler4").animate({
        width:'550px',
        height: '450px'
    })
});
$(".imgalquiler4").mouseleave(function(){
    $(".imgalquiler4").animate({
        width:'500px',
        height:'400px'
    })
});

//Contacto
$(document).ready(function(){ 
    $("#conteiner").hide()

    $("#btnCont").click(function(){ 
        let nom = $("#nombreText").val();
        let ape = $("#apellidoText").val();
        let ema = $("#emailText").val();
        if (nom==="" || ape==="" || ema===""){
            alert("Todos los campos son obligatorios")
        }else{
            $("#conteiner").show(function(){
                $("#idNombre").text("Gracias " + nom + " por contactarte con nosotros")
            })
        }
    })

    $("#btnCerrar").click(function(){
        $("#conteiner").hide()
    })
})

