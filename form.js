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
    $('.partners').css('display', 'block')
    console.log($('.partners'))
    $('.partners').append(
      `
            <div style="text-align: center">
        <p class='display-6'>
          Partners Information
        </p>
      </div>
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="houseNo19- XXXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">City</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="New Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">State</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Pincode</label>
      <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="11XX04" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="+9167XXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="jatinadhikari12@gmail.com" />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="Jatin Adhikari" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder=" Name of Partner" />
    </div>
    
      `)
    $('.hiddenClear').css('display', 'block')
  });
  $('#partnerRemove').click(function () {
    $('.partners').css('display', 'none');
    $('.partners').empty();
    $('.hiddenClear').css('display', 'none')
  })
  $('#partnerCheckAdd').click(function () {
    console.log("click")
    $('.partners').css('display', 'block')
    console.log($('.partners'))
    $('.partners').append(
      `
      <div class="mb-3">
      <div style="text-align: left">
        <p class="display-6">
          Partner Information
        </p>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="houseNo19- XXXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">City</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="New Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">State</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Pincode</label>
      <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="11XX04" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="+9167XXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="jatinadhikari12@gmail.com" />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="Jatin Adhikari" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder=" Name of Partner" />
    </div>`)
    $('.hiddenClear').css('display', 'block')
  });
  $('#partnerCheckRemove').click(function () {
    $('.partners').css('display', 'none');
    $('.partners').empty();
    $('.hiddenClear').css('display', 'none')
  })
  $('#directorAdd').click(function () {
    console.log("click")
    $('.directors').css('display', 'block')
    console.log($('.directors'))
    $('.directors').append(
      `
      <div style="text-align: left">
      <p class="display-5">
        Director Information
      </p>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="houseNo19- XXXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">City</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="New Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">State</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Delhi" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Pincode</label>
      <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="11XX04" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="+9167XXXXX" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="jatinadhikari12@gmail.com" />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="Jatin Adhikari" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder=" Name of Director" />
    </div>
      `)
    $('.hiddenClear').css('display', 'block')
  });
  $('#directorRemove').click(function () {
    $('.directors').css('display', 'none');
    $('.directors').empty();
    $('.hiddenClear').css('display', 'none')
  })
  $('#directorCheckAdd').click(function () {
    console.log("click")
    $('.directors').css('display', 'block')
    console.log($('.partners'))
    $('.directors').append(
      ` <div style="text-align: center">
                  <p class="display-5 text-primary">
                    Director Information
                  </p>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Address</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="houseNo19- XXXXXX" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">City</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="New Delhi" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">State</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Delhi" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Pincode</label>
                  <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="11XX04" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="+9167XXXXX" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="jatinadhikari12@gmail.com" />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="Jatin Adhikari" class="form-label">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Name of Director" />
                </div>`)
    $('.hiddenClear').css('display', 'block')
  });
  $('#directorCheckRemove').click(function () {
    $('.directors').css('display', 'none');
    $('.directors').empty();
    $('.hiddenClear').css('display', 'none')
  })

  $('#form-cheque').change(function () {
    $('.hiddenCheckList').css('display', 'block')
    var list = this.value;
    $('.chequeList').empty();
    for (let index = 0; index < Number(list); index++) {
      $('.chequeList').append(`
        <div class="col p-4 col-sm-12 col-md-12 mb-4 chequeForm bg-light">
        <div class="m-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Total Amount</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=" Total cheque(s) amount Rs"
          />
        </div>
        <div class="m-4" align="center">
          <h3> Details Of Cheque</h3>
        </div>
        <div class="m-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Cheque Number</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="XXXX234234234"
          />
        </div>
        <div class="m-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Cheque Date</label
          >
          <input
            type="date"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="2/2/2022"
          />
        </div>
        <div class="m-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Cheque drawn ?</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Cheque drawn on"
          />
        </div>
        <div class="m-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Cheque drawn ?</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Cheque drawn in favour of"
          />
        </div>
      </div>
        `)
    }
    $('.showChequeList').css('display', 'block')
  })
  $('.hiddenCheckList').click(function () {
    $('.chequeList').empty();
    $(this).css('display', 'none')
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

