// Search Materials

const searchInput = document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const cards =
    document.querySelectorAll(".material-card");

const noResults =
    document.getElementById("noResults");


function filterMaterials() {

    const searchText =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;

    let found = false;


    cards.forEach(function(card) {

        const title =
            card.dataset.title.toLowerCase();

        const cardCategory =
            card.dataset.category;


        const searchMatch =
            title.includes(searchText);

        const categoryMatch =
            category === "all" ||
            cardCategory === category;


        if (searchMatch && categoryMatch) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

}


searchInput.addEventListener(
    "input",
    filterMaterials
);

categoryFilter.addEventListener(
    "change",
    filterMaterials
);



// Download Button

function downloadMaterial(name) {

    alert(
        "Download started for: " + name
    );

}



// Upload Form

const uploadForm =
    document.getElementById("uploadForm");


uploadForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const materialName =
            document.getElementById("materialName").value;

        const subject =
            document.getElementById("subject").value;


        alert(
            materialName +
            " has been uploaded successfully!"
        );


        uploadForm.reset();

    }
);



// Dark Mode

const darkModeBtn =
    document.getElementById("darkModeBtn");


darkModeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            darkModeBtn.textContent = "☀️";

        } else {

            darkModeBtn.textContent = "🌙";

        }

    }
);