import $ from 'jquery'

export default +function ajax() {
    $.ajax(
        {
            url: 'http://localhost:3000/123',
            success: function (data) {
                console.log(data)
            },
            error: function (data) {
                console.log(data)

            }
        }
    )
}()

