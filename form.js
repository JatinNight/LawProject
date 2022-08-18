$(document).ready(function () {
    $("#hamburger-y").click(function () {
        $(".responsive-nav").addClass("responsive-nav-b");
    });
    $("#hamburger-x").click(function () {
        $(".responsive-nav").removeClass("responsive-nav-b");
    });
    $("#legal-cheque").click(function () {
        $(".forCheque").addClass("forCheque-open")
    });
    $('#form-select1').change(function () {
        var a = this.value
        if (a == 1) {
            $('.select2-1').css('display', 'none')
            $('.select1-1').css('display', 'block')
        } else if (a == 2) {
            $('.select1-1').css('display', 'none')
            $('.select2-1').css('display', 'block')
            $('.select1-3').css('display', 'none')
            $('.select3-1').css('display', 'none')
            $('.select1-2').css('display', 'none')
        } else if (a == 3) {
          $('.select3-1').css('display', 'block')
          $('.select3-1').css('display', 'block')
          $('.select1-1').css('display', 'none')
          $('.select2-1').css('display', 'none')
          $('.select1-3').css('display', 'none')
          $('.select1-2').css('display', 'none')
      }
    });
    $('#form-select1-1').change(function () {
        var a = this.value
        if (a == 1) {
            $('.select1-3').css('display', 'none')
            $('.select1-2').css('display', 'block')
        } else if (a == 2) {
            $('.select1-2').css('display', 'none')
            $('.select1-3').css('display', 'block')
        }
    });
    $('#form-select2-1').change(function () {
        var a = this.value
        if (a == 1) {
            console.log(a)
            $('.select2-3').css('display', 'none')
            $('.select2-2').css('display', 'block')
        } else if (a == 2) {
            $('.select2-2').css('display', 'none')
            $('.select2-3').css('display', 'block')
        }
    });
    $('#form-select3-1').change(function () {
      var a = this.value
      if (a == 1) {
          console.log(a)
          $('.select3-3').css('display', 'none')
          $('.select3-2').css('display', 'block')
      } else if (a == 2) {
          $('.select3-2').css('display', 'none')
          $('.select3-3').css('display', 'block')
      }
  });
    $('#partnerAdd').click(function () {
        console.log("click")
        $('.partners').css('display','block')
        console.log($('.partners'))
        $('.partners').append(
        `
            <div style="text-align: center">
        <h6 style="font-size: 20px" class="mb-2">
          Partner Information
        </h6>
      </div>
      <div class="mb-3">
        <label for="Jatin Adhikari" class="form-label"> Name of Partner </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pincode</label>
        <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">State</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">City</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      `)
      $('.hiddenClear').css('display','block')
    }); 
    $('#partnerRemove').click(function () {
        $('.partners').css('display','none');
        $('.partners').empty();
        $('.hiddenClear').css('display','none')
    })    
    $('#partnerCheckAdd').click(function () {
        console.log("click")
        $('.partners').css('display','block')
        console.log($('.partners'))
        $('.partners').append(
        `
            <div style="text-align: center">
        <h6 style="font-size: 20px" class="mb-2">
          Partner Information
        </h6>
      </div>
      <div class="mb-3">
        <label for="Jatin Adhikari" class="form-label"> Name of Partner </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pincode</label>
        <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">State</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">City</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      `)
      $('.hiddenClear').css('display','block')
    }); 
    $('#partnerCheckRemove').click(function () {
        $('.partners').css('display','none');
        $('.partners').empty();
        $('.hiddenClear').css('display','none')
    })   
        $('#directorAdd').click(function () {
        console.log("click")
        $('.directors').css('display','block')
        console.log($('.directors'))
        $('.directors').append(
        `
            <div style="text-align: center">
        <h6 style="font-size: 20px" class="mb-2">
          Partner Information
        </h6>
      </div>
      <div class="mb-3">
        <label for="Jatin Adhikari" class="form-label"> Name of Partner </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pincode</label>
        <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">State</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">City</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      `)
      $('.hiddenClear').css('display','block')
    }); 
    $('#directorRemove').click(function () {
        $('.directors').css('display','none');
        $('.directors').empty();
        $('.hiddenClear').css('display','none')
    })    
    $('#directorCheckAdd').click(function () {
        console.log("click")
        $('.directors').css('display','block')
        console.log($('.partners'))
        $('.directors').append(
        `
            <div style="text-align: center">
        <h6 style="font-size: 20px" class="mb-2">
          Partner Information
        </h6>
      </div>
      <div class="mb-3">
        <label for="Jatin Adhikari" class="form-label"> Name of Partner </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pincode</label>
        <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">State</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">City</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      `)
      $('.hiddenClear').css('display','block')
    }); 
    $('#directorCheckRemove').click(function () {
        $('.directors').css('display','none');
        $('.directors').empty();
        $('.hiddenClear').css('display','none')
    })                                                                                                                                                                        
});
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    cubeEffect: {
        shadow: true,                                                                                                                                                                                                                                                                                           
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    // pagination: {
    //     el: ".swiper-pagination",
    // },
    navigation: {
        nextEl: ".next-form",
        prevEl: ".prev-form",
    },
});

