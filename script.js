<html>
<head>
function showMore(element) {
            const moreText = element.previousElementSibling;
            if (moreText.style.display === "none" || !moreText.style.display) {
                moreText.style.display = "inline";
                element.textContent = "Less...";
            } else {
                moreText.style.display = "none";
                element.textContent = "More...";
            }
        }
</html>
