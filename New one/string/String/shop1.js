		function bodyLoad() {
			categories = document.getElementById("lstCategory");

			lstCategories = new Array("Select a Category", "Electronics", "Shoes");

			for (var i = 0; i < lstCategories.length; i++) {
				var opt = document.createElement("option");
				opt.text = lstCategories[i];
				opt.value = lstCategories[i];
				categories.appendChild(opt);
			}
		}

		function changeCategory() {
			eProducts = new Array("Select a Electornics", "Mobile", "LED TV");

			sProducts = new Array("Select a Shoe", "Nike", "Lee Cooper");

			products = document.getElementById("lstProduct");

			switch (categories.value) {
				case "Electronics":
					products.innerHTML = "";
					for (var i = 0; i < eProducts.length; i++) {
						opt = document.createElement("option");
						opt.text = eProducts[i];
						opt.value = eProducts[i];
						products.appendChild(opt);
					}
					document.getElementById("selectElectornic").style.display = "none";
					break;
				case "Shoes":
					products.innerHTML = "";
					for (var i = 0; i < sProducts.length; i++) {
						opt = document.createElement("option");
						opt.text = sProducts[i];
						opt.value = sProducts[i];
						products.appendChild(opt);
					}
					document.getElementById("selectElectornic").style.display = "none";
					break;
				default:
					products.innerHTML = "";
					document.getElementById("selectElectornic").innerHTML = "Please Select a Category";
					break;
			}
		}

		function changeProduct() {
			switch (products.value) {
				case "Mobile":
					document.getElementById("product").src = "images/mobile.jpg";
					document.getElementById("price").innerHTML = "&#x20B9;" + 12000;
					break;
				case "LED TV":
					document.getElementById("product").src = "images/tv.jpg";
					break;
				case "Nike":
					document.getElementById("product").src = "images/shoe.jpg";
					break;
				case "Lee Cooper":
					document.getElementById("product").src = "images/shoe1.jpg";
					break;
			}
		}

		function zooming() {
			zoomvalue = parseInt(document.getElementById("zoom").value);
			switch (zoomvalue) {
				case 1:
					document.getElementById("product").width = "50";
					document.getElementById("product").height = "50";
					break;
				case 2:
					document.getElementById("product").width = "150";
					document.getElementById("product").height = "150";
					break;
				case 3:
					document.getElementById("product").width = "350";
					document.getElementById("product").height = "350";
					break;
				case 4:
					document.getElementById("product").width = "450";
					document.getElementById("product").height = "450";
					break;
			}
		}
	