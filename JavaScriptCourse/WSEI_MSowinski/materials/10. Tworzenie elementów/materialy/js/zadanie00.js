/* jshint -W104 */
/* jshint -W119 */
document.addEventListener('DOMContentLoaded', function () {

    const deleteButtons = document.querySelectorAll('.deleteBtn');

    deleteButtons.forEach(button => button.addEventListener('click', function () {

        this.parentElement.parentElement.remove();

    }));

});