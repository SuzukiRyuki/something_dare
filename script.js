window.onload = function () {
    const submitButton = document.getElementById("submit_post_button");
    const form = document.getElementById("form_post")
    const form_textarea = document.getElementById("post_textarea")

    submitButton.onclick = () => {
        /**送信するかの確認 */
        if (!window.confirm("Are you sure you want to submit?")) {
            return false;
        }
        
        const formData = new URLSearchParams([...new FormData(form)]);
        const action = form.getAttribute("action");
        const options = {
            method: "post",
            body: formData,
        }
        //console.log(form)
        fetch(action, options).then((e) => {
            if (e.status === 200) {
                alert("送信成功しました")
                form_textarea.value = "";
                return
            }
            alert("失敗しました")
        })
    }
}