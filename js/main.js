const sectionCard = document.getElementById("card");
let portscharacters = [];

//Fetch the items
const loadPorts = async () => {
  try {
    const res = await fetch("data/portfolio.json");
    portscharacters = await res.json();
    console.log(portscharacters);
    if (!res.ok) throw new Error(`${portscharacters.message} (${res.status})`);
    displayMenuItems(portscharacters);
  } catch (err) {
    console.log(err);
  }
};

//Display items to screen
const displayMenuItems = (portfolios) => {
  const htmlString = portfolios
    .map((portfolios) => {
      return ` 
               <div class="col-lg-4 item ${portfolios.type}">
                            <div class="card">
                                <div class="card-head">
                                    <img src="/images/port/${portfolios.portfolioPhoto}.png" alt="" class="img-fluid card-img">
                                    <div class="card-hover">
                                        <h4>Details: ${portfolios.type}</h4>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <h4 class="title">${portfolios.name}</h4>
                                    <a href="${portfolios.link}" class="btn btn-lg card-btn">Go to Page</a>
                                </div>
                            </div>
                </div>
               `;
    })
    .join("");
  sectionCard.innerHTML = htmlString;
  loadCard();
};

//Filter Function
function displayMenuButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const type = e.currentTarget.dataset.id;
      console.log(type);
      const menuType = portscharacters.filter(function (port) {
        console.log(port.type);
        if (port.type === type) {
          return port;
        }
      });
      if (type === "all") {
        displayMenuItems(portscharacters);
      } else {
        displayMenuItems(menuType);
      }
    });
  });
}
displayMenuButtons();

// Show CardHover
function loadCard() {
  $(".card")
    .mouseenter(function () {
      $(this).find(".card-overlay").css({ top: "-100%" });
      $(this).find(".card-hover").css({ top: "0" });
    })
    .mouseleave(function () {
      $(this).find(".card-overlay").css({ top: "0" });
      $(this).find(".card-hover").css({ top: "100%" });
    });
}
loadPorts();