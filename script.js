/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


document
    .querySelectorAll("#navigation a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

        });

    });



/* =====================================================
   PROPERTY SEARCH
===================================================== */

function searchProperties() {

    const location =
        document.getElementById("locationFilter").value;

    const type =
        document.getElementById("typeFilter").value;

    const distance =
        document.getElementById("distanceFilter").value;


    const properties =
        document.querySelectorAll(".property-card");


    let numberFound = 0;


    properties.forEach(function (property) {

        const propertyLocation =
            property.dataset.location;

        const propertyType =
            property.dataset.type;

        const propertyDistance =
            property.dataset.distance;


        const locationMatch =
            location === "all" ||
            propertyLocation === location;


        const typeMatch =
            type === "all" ||
            propertyType === type;


        const distanceMatch =
            distance === "all" ||
            propertyDistance === distance;


        if (
            locationMatch &&
            typeMatch &&
            distanceMatch
        ) {

            property.style.display = "block";

            numberFound++;

        }

        else {

            property.style.display = "none";

        }

    });


    if (numberFound === 0) {

        alert(
            "No properties match your search."
        );

    }

}



/* =====================================================
   PROPERTY INQUIRY MODAL
===================================================== */

const inquiryModal =
    document.getElementById("inquiryModal");


function openInquiry(propertyName) {

    const selectedProperty =
        document.getElementById(
            "selectedProperty"
        );

    const modalWhatsApp =
        document.getElementById(
            "modalWhatsApp"
        );


    selectedProperty.innerHTML =
        "You are interested in: <strong>"
        + propertyName
        + "</strong>";


    const message =
        "Hello BAJAKUKIRIZAPROPERTIES,%0A%0A"
        + "I am interested in the "
        + propertyName
        + " property.%0A%0A"
        + "Please give me more information.";


    modalWhatsApp.href =
        "https://wa.me/256708759877?text="
        + message;


    inquiryModal.classList.add("show");

}


function closeInquiry() {

    inquiryModal.classList.remove("show");

}


window.addEventListener(
    "click",
    function (event) {

        if (event.target === inquiryModal) {

            closeInquiry();

        }

    }
);



/* =====================================================
   CUSTOMER COMMENTS
===================================================== */

const commentForm =
    document.getElementById("commentForm");

const commentsList =
    document.getElementById("commentsList");


commentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "commentName"
            ).value.trim();


        const commentText =
            document.getElementById(
                "commentText"
            ).value.trim();


        if (!name || !commentText) {

            return;

        }


        const firstLetter =
            name.charAt(0).toUpperCase();


        const newComment =
            document.createElement("div");


        newComment.className =
            "comment";


        newComment.innerHTML = `

            <div class="comment-avatar">
                ${firstLetter}
            </div>

            <div>

                <strong>
                    ${escapeHTML(name)}
                </strong>

                <p>
                    ${escapeHTML(commentText)}
                </p>

            </div>

        `;


        commentsList.appendChild(
            newComment
        );


        commentForm.reset();

    }
);



/* Prevent HTML injection */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}



/* =====================================================
   PROPERTY SUBMISSION
===================================================== */

const propertySubmissionForm =
    document.getElementById(
        "propertySubmissionForm"
    );


propertySubmissionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const ownerName =
            document.getElementById(
                "ownerName"
            ).value;


        const ownerPhone =
            document.getElementById(
                "ownerPhone"
            ).value;


        const location =
            document.getElementById(
                "propertyLocation"
            ).value;


        const price =
            document.getElementById(
                "propertyPrice"
            ).value;


        const distance =
            document.getElementById(
                "roadDistance"
            ).value;


        const description =
            document.getElementById(
                "propertyDescription"
            ).value;


        const whatsappMessage =

            "PROPERTY SUBMISSION%0A%0A"

            + "Owner: "
            + encodeURIComponent(ownerName)

            + "%0APhone: "
            + encodeURIComponent(ownerPhone)

            + "%0ALocation: "
            + encodeURIComponent(location)

            + "%0APrice: "
            + encodeURIComponent(price)

            + "%0ADistance from road: "
            + encodeURIComponent(distance)

            + "%0ADescription: "
            + encodeURIComponent(description);


        const whatsappURL =
            "https://wa.me/256708759877?text="
            + whatsappMessage;


        window.open(
            whatsappURL,
            "_blank"
        );


        alert(
            "Your property has been submitted for review."
        );


        propertySubmissionForm.reset();

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "contactName"
            ).value;


        const phone =
            document.getElementById(
                "contactPhone"
            ).value;


        const email =
            document.getElementById(
                "contactEmail"
            ).value;


        const message =
            document.getElementById(
                "contactMessage"
            ).value;


        const whatsappMessage =

            "NEW WEBSITE INQUIRY%0A%0A"

            + "Name: "
            + encodeURIComponent(name)

            + "%0APhone: "
            + encodeURIComponent(phone)

            + "%0AEmail: "
            + encodeURIComponent(email)

            + "%0A%0AMessage:%0A"
            + encodeURIComponent(message);


        const whatsappURL =
            "https://wa.me/256708759877?text="
            + whatsappMessage;


        window.open(
            whatsappURL,
            "_blank"
        );


        contactForm.reset();

    }
);