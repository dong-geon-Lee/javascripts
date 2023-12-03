function appInit() {
  $(document).ready(() => {
    initializeUI();
    setupEventHandlers();
    showAndHideBtn();
    fetchDatas();
    handleFormData();
    handleColor();
    handleChain();
    handleConnect();
  });
}

const initializeUI = () => {
  const texts = $("#content h1").text("JQuery로 변경된 텍스트!");
  let clicked = false;

  texts.on("click", () => {
    if (!clicked) {
      texts.css({ fontSize: "2rem", background: "red" });
      clicked = true;
    } else {
      texts.css({ fontSize: "2rem", background: "yellow" });
      clicked = false;
    }
  });
};

const setupEventHandlers = () => {
  $("#myButton").click(() => alert("버튼이 클릭되었습니다"));
  $("#toggleButton").click(() => $("#myDiv").toggle());
};

const showAndHideBtn = () => {
  $("#hideButton").click(() => $("#someEl").hide());
  $("#showButton").click(() => $("#someEl").show());
  $("#toggleButtons").click(() => $("#someEl").toggle());
};

const fetchDatas = () => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    success: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    },
  });
};

const handleFormData = () => {
  $(".myform").submit((e) => {
    e.preventDefault();
    console.log("제출 완료");
  });
};

const handleColor = () => {
  $(".active__color").click(() => {
    $(".yellow").addClass("active");
    $(".blue").addClass("active");
    $(".active__color").attr("disabled", true);
    // $(this).css("background-color", "green");
  });

  $(".reset__color").click(() => {
    $(".yellow").removeClass("active");
    $(".blue").removeClass("active");
    $(".active__color").attr("disabled", false);
  });
};

const handleChain = () => {
  $("#btn").click(() => {
    $("#header")
      .addClass("highlight")
      .fadeOut("slow")
      .fadeIn("fast")
      .addClass("large");
  });
};

const handleConnect = () => {
  const color = $(".label__data").css("color");
  console.log(color);

  const labelEl = $(".label__data");
  labelEl.css("color", "aqua");
  labelEl.css("border", "1px solid #000");

  const textEl = $(".small__box .mind");
  textEl.click(() => {
    textEl.css("color", "red").css("text-decoration", "underline");
    textEl.css({
      fontSize: "20px",
      fontWeight: 800,
      border: "1px solid #000",
      padding: "1rem",
    });
  });
};

appInit();
