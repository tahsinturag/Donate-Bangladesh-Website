function getInputElementValueAsNumber(id) {
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);

function getTextElementValueAsNumber(id) {
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}

function manageDonation(
    buttonId,
    donationInputId,
    currentDonationId,
    totalAmountId,
    historySection,
    headingId
) {
    document.getElementById(buttonId).addEventListener("click", function () {
        const donateAmount = getInputElementValueAsNumber(donationInputId);
        let currentAmount = getTextElementValueAsNumber(currentDonationId);
        let totalAmount = getTextElementValueAsNumber(totalAmountId);

        if (isNaN(donateAmount) || donateAmount < 0) {
            alert("Invalid Donation Amount");
            return;
        }

        if (donateAmount > totalAmount) {
            alert("You don't have sufficient balance");
            return;
        }

        currentAmount += donateAmount;
        document.getElementById(currentDonationId).innerText = currentAmount;

        document.getElementById(donationInputId).value = "";

        totalAmount -= donateAmount;
        document.getElementById(totalAmountId).innerText = totalAmount;

        let title = document.getElementById(headingId).textContent;

        let history = document.getElementById(historySection);
        let newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="flex flex-col p-5 bg-white border border-border-color rounded-2xl">
                <h3 class="text-lg font-bold">
                    ${donateAmount} Taka is ${title}
                </h3>
                <p id="history-date" class="text-sm md:text-base text-paragraph-color">
                </p>
            </div>
            `;

        history.appendChild(newHistory);

        const currentDate = new Date();
        newHistory.querySelector("#history-date").innerText =
            "Date: " + currentDate.toString();

        const modal = document.getElementById("my_modal_1");
        modal.showModal();
    });
}
