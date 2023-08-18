// Fetch data from json-server
fetch("http://localhost:3000/tables")
  .then((response) => response.json())
  .then((data) => {
    // Process and use the data to create charts or display information
    // Example: Create a bar chart using Chart.js
    const tableCapacityData = data.map((table) => table.quantity);
    const tableLabels = data.map((table) => `Table ${table.id}`);

    const ctx = document.createElement("canvas");
    document.getElementById("charts-container").appendChild(ctx);
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: tableLabels,
        datasets: [
          {
            label: "Table Capacities",
            data: tableCapacityData,
            backgroundColor: "rgba(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// Fetch data from json-server
fetch("http://localhost:3000/tables")
  .then((response) => response.json())
  .then((data) => {
    // Process and use the data to create charts or display information
    // Example: Create a pie chart using Chart.js
    const tableCapacityData = data.map((table) => table.quantity);
    const tableLabels = data.map((table) => `Table ${table.id}`);

    const ctx = document.createElement("canvas");
    document.getElementById("charts-pie").appendChild(ctx);

    new Chart(ctx, {
      type: "pie", // Use 'pie' for creating a pie chart
      data: {
        labels: tableLabels,
        datasets: [
          {
            label: "Table Capacities",
            data: tableCapacityData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6)",
              "rgba(0, 128, 128, 0.6)",
              "rgba(128, 128, 0, 0.6)",
              "rgba(255, 165, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 0, 255, 0.6)",
              "rgba(128, 0, 0, 0.6)",
              "rgba(0, 128, 0, 0.6)",
              "rgba(0, 0, 128, 0.6)",
              // You can add more colors here if needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              'rgba(0, 0, 255, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              'rgba(0, 128, 128, 0.6)',
              'rgba(128, 128, 0, 0.6)',
              'rgba(255, 165, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)',
              'rgba(255, 0, 255, 0.6)',
              'rgba(128, 0, 0, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(0, 0, 128, 0.6)',
              // You can add more colors here if needed
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
