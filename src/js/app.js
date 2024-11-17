class TowerOfHanoi {
    constructor() {
        this.moves = []; // To store all the moves
        this.movesHtml = document.createElement("div");
        this.InputNumber = document.querySelector("#numberInput");
        this.runBtns = document.querySelectorAll(".runIssue");
        this.outputDiv = document.querySelector("#outputDiv");

        // Attach event listeners for input and button
        this.InputNumber.addEventListener("keypress", (e) => {
            if (e.code === "Enter") {
                this.start(); // Start solving on Enter key press
            }
        });

        this.InputNumber.addEventListener("keypress", (e) => {
            // Check if the key is not a number
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault(); // Prevent the input
            }
        });

        this.runBtns.forEach((btn)=>{
            btn.addEventListener("click", () => {
                this.start(); // Start solving on button click
            });
        })
    }

    // Recursive method to solve the Tower of Hanoi
    solve(n, source, target, auxiliary) {
        if (n === 1) {
            // Base case: Move the last disk directly
            this.recordMove(n, source, target);
            return;
        }

        // Move n-1 disks from source to auxiliary
        this.solve(n - 1, source, auxiliary, target);

        // Move the nth disk from source to target
        this.recordMove(n, source, target);

        // Move n-1 disks from auxiliary to target
        this.solve(n - 1, auxiliary, target, source);
    }

    // Helper method to record and log each move
    recordMove(disk, from, to) {
        const move = `Move disk ${disk} from ${from} to ${to}`;
        this.moves.push(move);
    }

    // Method to start solving the problem
    start() {
        // Dynamically fetch the number of disks
        this.numDisks = parseInt(this.InputNumber.value);

        // Validate input
        if (isNaN(this.numDisks) || this.numDisks <= 0) {
            alert("Please enter a valid number of disks!");
            return;
        }

        // Clear previous moves and output
        this.moves = [];
        this.outputDiv.innerHTML = "";
        this.movesHtml.innerHTML = "";

        const entryMessage = document.createElement("div");
        entryMessage.innerHTML = `
            <h4 class=" sx:text-base ss:text-[18px] md:text-xl text-stone-800 font-bold mt-7 text-center">Output:</h4>
            <h3 class="sx:text-[15px] ss:text-[17px] md:text-lg font-semibold mt-10">
                Starting Tower Of Hanoi for <span class="px-1.5 py-1 bg-stone-800 text-white rounded-md">${this.numDisks}</span> Disk
            </h3>
            <hr class="mt-6">
            <hr class="mb-6">
        `;
        this.outputDiv.appendChild(entryMessage);

        // Solve the problem and generate moves
        this.solve(this.numDisks, "A", "C", "B");

        // Append each move to the output
        this.moves.forEach((m) => {
            const newMove = `<p class=" sx:text-[15px] ss:text-[16px] md:text-[17.5px] font-light text-center mt-4">${m}</p>`;
            this.movesHtml.innerHTML += newMove;
        });
        this.outputDiv.appendChild(this.movesHtml);

        // Display completion message
        const endMessage = document.createElement("div");
        endMessage.innerHTML = `
            <hr class="mt-6">
            <hr class="mb-6">
            <h4 class=" text-center font-semibold mt-4 sx:text-base ss:text-[17px] md:text-[18px]">All moves completed!</h4>
        `;
        this.outputDiv.appendChild(endMessage);
    }
}

// Create an instance of the TowerOfHanoi class
const hanoi = new TowerOfHanoi();
