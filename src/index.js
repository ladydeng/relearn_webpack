import $ from "jquery"
import "./css/index.css"
import "./css/index.less"

$(() => {
    $(".div").css("background", "lightGreen")
})

class Person {
    static info = "person info!!!"
}
consle.log(Person.info)